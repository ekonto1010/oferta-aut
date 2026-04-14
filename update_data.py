import urllib.request
import json
import subprocess
import csv
import io

# Link do arkusza (format CSV)
url = "https://docs.google.com/spreadsheets/d/1cA7LU8zDFb0Phgiv8ZH-MQN2A6lmM1VRRLJRP1_KHr4/export?format=csv&gid=2007376506"

def update():
    try:
        print("Pobieranie danych z Google Sheets...")
        # W Pythonie 3 musimy zdekodować odpowiedź na utf-8
        response = urllib.request.urlopen(url)
        content = response.read().decode('utf-8')
        
        # Używamy io.StringIO, żeby csv.DictReader mógł to przeczytać jako plik
        f_input = io.StringIO(content)
        reader = csv.DictReader(f_input)
        
        data = []
        for row in reader:
            data.append(row)
            
        json_path = 'src/data.json'
        
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
            
        print("Plik src/data.json zaktualizowany. Wysylam na GitHub...")
        
        # Komendy Gita
        subprocess.call(["git", "add", "src/data.json"])
        subprocess.call(["git", "commit", "-m", "Aktualizacja bazy z Google Sheets"])
        subprocess.call(["npm", "run", "deploy"])
        
        print("Sukces! Strona powinna zaraz ruszyc.")

    except Exception as e:
        print("Blad: " + str(e))

if __name__ == "__main__":
    update()
