# -*- coding: utf-8 -*-
import urllib.request
import json
import subprocess
import csv
import io
import os

# Link do arkusza (format CSV)
url = "https://docs.google.com/spreadsheets/d/1cA7LU8zDFb0Phgiv8ZH-MQN2A6lmM1VRRLJRP1_KHr4/export?format=csv&gid=2007376506"

def update():
    try:
        print("1. Pobieranie danych z Google Sheets...")
        response = urllib.request.urlopen(url)
        content = response.read().decode('utf-8')

        f_input = io.StringIO(content)
        reader = csv.DictReader(f_input)
        data = []
        for row in reader:
            data.append(row)

        # Ścieżka do pliku JSON
        json_path = 'public/data.json'
        
        # Upewnij się, że folder public istnieje
        if not os.path.exists('public'):
            os.makedirs('public')

        # Zapisywanie danych do pliku
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        
        print(f"2. Plik {json_path} zaktualizowany lokalnie.")

        # Komendy Gita
        print("3. Wysyłanie zmian na GitHub (gałąź master)...")
        # Dodajemy wszystkie zmiany (w tym App.jsx i ProductPage.jsx)
        subprocess.call(["git", "add", "."])
        
        # Tworzymy commit
        subprocess.call(["git", "commit", "-m", "Aktualizacja danych i kodu aplikacji"])
        
        # Wypychamy na master (zgodnie z Twoim terminalem)
        subprocess.call(["git", "push", "origin", "master"])

        # Publikacja strony przez npm
        print("4. Uruchamiam npm run deploy...")
        subprocess.call(["npm", "run", "deploy"])

        print("\n--- SUKCES! ---")
        print("Dane zostały wysłane. Strona zaktualizuje się w ciągu 1-2 minut.")
        print("Jeśli auta nadal się nie zmieniają, odśwież stronę używając Ctrl+F5.")

    except Exception as e:
        print("\n!!! WYSTĄPIŁ BŁĄD !!!")
        print(str(e))

if __name__ == "__main__":
    update()