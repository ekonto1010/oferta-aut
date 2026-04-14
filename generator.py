import csv
import json
import requests

# TUTAJ WKLEJ LINK Z "OPUBLIKUJ W INTERNECIE" (format CSV)
LINK_CSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRnSIVGelmNQVXW2zfBunG7h7kELugRzezK1DfLiZ6G5v7StsTQ-4ksJ91jO0An-jbCmjWoCa28rYb2/pub?output=csv"

def pobierz_z_google():
    try:
        r = requests.get(LINK_CSV)
        r.encoding = 'utf-8'
        
        # Zamieniamy tekst CSV na listę danych
        czytnik = csv.DictReader(r.text.splitlines())
        dane = [wiersz for wiersz in czytnik]
        
        # Zapisujemy do folderu src, żeby React to widział
        with open("./src/data.json", 'w', encoding='utf-8') as f:
            json.dump(dane, f, ensure_ascii=False, indent=2)
            
        print(f"✅ Sukces! Pobrałem {len(dane)} aut z Google Sheets.")
        print(f"Nagłówki jakie znalazłem: {czytnik.fieldnames}")

    except Exception as e:
        print(f"❌ Coś poszło nie tak: {e}")

if __name__ == "__main__":
    pobierz_z_google()
