
Claude finished the response

import ProductPage from './ProductPage'; import ContactPage from './ContactPage'; import BlogPage from './BlogPage'; import React, { useState, useEffect, useCallback } from 'react'; import './App.css'; import Navbar from './Navbar'; const HomePage = () => { const [currentHash, setCurren

pasted

1)strona sie otwiera na srpodku zamiast na górze
2)opis auta nie pobiera formatowania html
3)linki są be sensu, zamiast marka model slogan1 jakies hasze i id

strona produktu

22:09
Pokaż mi ProductPage.js to zrobie wszystkie 3 na raz.


import React, { useState, useEffect, useRef } from 'react'; import PhotoSwipeLightbox from 'photoswipe/lightbox'; import 'photoswipe/style.css'; import './App.css'; import Navbar from './Navbar'; const ProductPage = () => { const [car, setCar] = useState(null); const [loading, setLoadin

pasted

22:10
Trzy problemy, trzy poprawki:

1. Scroll na górę – window.scrollTo odpala się dopiero po załadowaniu, ale przeglądarka wcześniej zapamiętuje pozycję. Trzeba scrollować synchronicznie przy montowaniu.

2. HTML w opisie – już masz dangerouslySetInnerHTML, więc problem jest w danych. uc_beztla pewnie zawiera encje HTML (&lt;p&gt; zamiast <p>). Trzeba je odkodować.

3. URL – hash #/samochod/123 jest brzydki. Zamiast tego użyj marka-model-slogan jako slug, a ID trzymaj jako fallback do wyszukania auta.

Poprawki w ProductPage.js
Fix 1 & 2 – scroll + dekodowanie HTML:

jsx
// Zamień useEffect ze scrollTo na:
useEffect(() => {
  window.scrollTo(0, 0); // synchronicznie przy mount
}, []);

// Usuń ten useEffect (był za późno):
// useEffect(() => { if (!loading && car) { window.scrollTo... } }, [loading, car]);
jsx
// W processCarData, przy description:
const decodeHtml = (html) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

description: decodeHtml(rawCar.uc_beztla || rawCar.opis || 'Brak opisu'),
Fix 3 – ładne URL-e. W HomePage.js zmień goToProduct:

jsx
const slugify = (str) => str
  .toLowerCase()
  .replace(/ą/g,'a').replace(/ę/g,'e').replace(/ó/g,'o').replace(/ś/g,'s')
  .replace(/ł/g,'l').replace(/ż/g,'z').replace(/ź/g,'z').replace(/ć/g,'c').replace(/ń/g,'n')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const goToProduct = (car) => {
  const slug = slugify(`${car.brand}-${car.model}-${car.slogan || car.year}`);
  window.location.hash = `#/samochod/${slug}--${car.id}`;
};
Wywołanie w karcie:

jsx
// było:
onClick={() => goToProduct(car.id)}
// zmień na:
onClick={() => goToProduct(car)}
W ProductPage.js – wyciągnięcie ID z nowego formatu:

jsx
useEffect(() => {
  window.scrollTo(0, 0);
  const hash = window.location.hash; // #/samochod/ford-focus-ekonomiczny--42
  const segment = hash.split('/').pop(); // ford-focus-ekonomiczny--42
  const carId = segment.includes('--') 
    ? segment.split('--').pop()   // nowy format
    : segment;                     // stary format (fallback)
  if (carId) fetchCarDetails(carId);
}, []);
W HomePage.js routing też trzeba poprawić:

jsx
// było:
if (currentHash.startsWith('#/samochod/')) {
// zostaje tak samo, działa dalej
Trzy niezależne patche, możesz wdrażać po jednym. Który zaczynasz?

opis zawiera <b>  i <li>

22:10
To znaczy że dane są już poprawnym HTML-em, dangerouslySetInnerHTML powinno działać.

Sprawdź w DevTools co faktycznie siedzi w polu uc_beztla – wklej tu wynik tego w konsoli przeglądarki:

js
JSON.parse(localStorage.getItem('cars_cache_raw'))[0].uc_beztla
mam lustrzaną stronę w wordpresie, na tym samym kodzie, i jest ok,. wina jest w tym pliku

22:11
To znaczy że dane są OK, problem jest w mapowaniu. W processCarData masz:

js
description: rawCar.uc_beztla || rawCar.opis || 'Brak opisu',
A w HomePage.js przy budowaniu cache masz:

js
description: auto.uc_beztla || '',
I potem w fetchCarDetails najpierw szukasz w cars_cache_raw (surowe dane – OK), ale czy na pewno trafiasz na cars_cache_raw a nie cars_cache? Dodaj log:

js
const mainCache = localStorage.getItem('cars_cache_raw');
console.log('cache source:', mainCache ? 'raw' : 'brak');
const found = allCars.find(c => String(c.id_wc_1) === String(id));
console.log('uc_beztla:', found?.uc_beztla?.substring(0, 100));
Ale bardziej prawdopodobne – sprawdź w App.css czy .description nie ma ustawionego white-space: pre albo czy tagi HTML nie są escapowane gdzieś po drodze. Wklej pierwsze 200 znaków z tego loga.


@import url('https://cdnjs.cloudflare.com/ajax/libs/dashicons/2.9.0/css/dashicons.min.css'); * { margin: 0; padding: 0; box-sizing: border-box; } body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; } /* ========== LOAD

pasted

22:11
CSS jest czysty, nie ma tam nic co blokowałoby HTML w opisie.

Problem jest gdzie indziej – dane z Pythona (data.json) mają pewnie zdublowane escapowanie. Sprawdź to w konsoli:

js
JSON.parse(localStorage.getItem('cars_cache_raw'))[0].uc_beztla
Jeśli zobaczysz &lt;b&gt; zamiast <b> – dane są podwójnie escapowane i trzeba je odkodować przed renderem.

Dodaj tę funkcję w processCarData:

js
const decodeHtml = (html) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

// i zmień:
description: decodeHtml(rawCar.uc_beztla || rawCar.opis || 'Brak opisu'),
Jeśli natomiast w konsoli widać prawdziwe tagi <b>, to znaczy że dangerouslySetInnerHTML działa, ale CSS nie styluje elementów wewnątrz .description. Dodaj do CSS:

css
.description b, .description strong { font-weight: 700; }
.description ul, .description ol { padding-left: 20px; margin: 10px 0; }
.description li { margin: 4px 0; }
.description p { margin-bottom: 10px; }
Najpierw sprawdź konsolę – to powie który przypadek.


{ "name": "moja-baza", "version": "1.0.0", "lockfileVersion": 3, "requires": true, "packages": { "": { "name": "moja-baza", "version": "1.0.0", "dependencies": { "lucide-react": "^1.8.0", "photoswipe": "^5.4.4", "react": "^18.2.0",

pasted

22:12
To nie jest plik który mi potrzebny. Wróćmy do tematu.

Wklej wynik tego z konsoli przeglądarki (na stronie produktu):

js
JSON.parse(localStorage.getItem('cars_cache_raw'))[0].uc_beztla
'https://drive.google.com/uc?id=12dRq9Y5dbfUjZxpYB7xXyLGPhxehYYM_'

22:16
To jest link do zdjęcia, nie opis. Znaczy że uc_beztla dla pierwszego auta w tablicy jest puste/null, albo pierwsze auto nie ma opisu.

Sprawdź konkretne auto które oglądasz:

js
const raw = JSON.parse(localStorage.getItem('cars_cache_raw'));
const id = window.location.hash.split('/').pop();
const car = raw.find(c => String(c.id_wc_1) === String(id));
console.log(car.uc_beztla);
taki jest wynik konsoli

22:16
Czyli uc_beztla zawiera URL do zdjęcia zamiast opisu – to błąd w danych z Pythona/GAS, nie w React.

Sprawdź w swoim skrypcie Pythona (otomoto_paralaxa.py lub GAS) co wrzuca do kolumny uc_beztla. Prawdopodobnie pomylone kolumny – opis ląduje gdzie indziej, a uc_beztla dostaje URL.

Sprawdź w surowym JSON jakie pola ma to auto:

js
const raw = JSON.parse(localStorage.getItem('cars_cache_raw'));
const id = window.location.hash.split('/').pop();
const car = raw.find(c => String(c.id_wc_1) === String(id));
console.log(Object.keys(car));
console.log(car);
I szukaj pola które wygląda jak HTML z <b> i <li> – może się nazywa opis, description, short_description albo coś innego.

nie wiem gdzie jest ten opis, w wordpresie sie wyswiet;la normalnie, poco to sprawdzasz

22:19
Racja, przepraszam za zbędne kółka.

Skoro w WordPressie działa, opis jest w WooCommerce. Twój data.json pochodzi z Pythona który czyta z Google Sheets – i tam pewnie nie ma kolumny z opisem, bo opis siedzi bezpośrednio w WC.

Dwa wyjścia:

1. Dodaj opis do Sheets/JSON – w GAS przy eksporcie do data.json dociągnij description z WooCommerce API (GET /wp-json/wc/v3/products/{id} → pole description).

2. Pobieraj opis live z WC API – w ProductPage.js po znalezieniu auta w cache zrób dodatkowy fetch:

js
const res = await fetch(`https://twojadomena.pl/wp-json/wc/v3/products/${id}?consumer_key=xxx&consumer_secret=xxx`);
const wc = await res.json();
// i użyj wc.description
Które rozwiązanie wolisz – dociągnąć przy generowaniu JSON czy fetchować live?

1782246195578_image.png
1782246207601_image.png
dziwne, w wormularzu jest opis, w bazie nie ma, jednak opis w wordpresie nire jest formatowany, pewnie kod wtyczki znowu sie spartolił

22:23
Widzę – w Sheets opis jest z tagami <br>, <b> itd., ale w data.json tego nie ma. Znaczy że Twój skrypt eksportujący do JSON pomija kolumnę z opisem albo mapuje złe pole.

Jak nazywa się kolumna z opisem w Sheets? Na screenie widać "Opis pojazdu (P)" – sprawdź jak to pole się nazywa w nagłówku arkusza (wiersz 1) i porównaj z tym co eksportujesz do JSON.

no własnie NIE ma kolumny z opisem w Sheets

22:24
To jasne – opis jest tylko w WooCommerce, do Sheets nie jest pobierany w ogóle.

Masz dwa realne wyjścia:

1. Szybkie – przy eksporcie do data.json dociągnij opis z WC API dla każdego auta. W GAS:

js
const res = UrlFetchApp.fetch(
  `https://auto-handel.kupuj.pulawy.pl/wp-json/wc/v3/products/${id_wc_1}`,
  { headers: { Authorization: 'Basic ' + Utilities.base64Encode('klucz:sekret') } }
);
const opis = JSON.parse(res.getContentText()).description;
2. Właściwe – dodaj kolumnę opis do Sheets i wypełniaj ją przy dodawaniu auta (już masz formularz, dorzuć pole).

Które wolisz?


import os import requests import re import json import io import base64 import asyncio import threading import tkinter as tk from tkinter import filedialog, messagebox, ttk, scrolledtext, colorchooser from PIL import ( Image, ImageTk, ImageFile, ImageFilter, ImageD

pasted

rzuc okiem, stąd idą dane

22:25
Znalazłem. W funkcji sync() wysyłasz do GAS:

python
"opis": self.opis_txt.get("1.0", tk.END).strip(),
A w _load_to_edit() odczytujesz z bazy:

python
opis = (
    car.get("uc_beztla")
    or car.get("opis")
    or ...
)
Problem jest w GAS – sprawdź jak GAS zapisuje pole opis do Sheets i pod jaką nazwą kolumny. Bo React czyta uc_beztla, a Python wysyła jako opis. Gdzieś po drodze GAS mapuje opis na kolumnę uc_beztla – albo nie mapuje wcale.

Wklej fragment GAS który obsługuje SAVE/UPDATE – tam jest źródło problemu.


/** * GŁÓWNA LOGIKA V28 - POPRAWIONE MAPOWANIE I SEO nowszy */ const V2_ROLKA_OUTPUT_SHEET = 'ROLKA_AUTO_OUTPUT'; // Albo nazwa Twojego nowego arkusza wynikowego function stara_doPost(e) { try { var data = JSON.parse(e.postData.contents); var fotoUrl = data.foto || data.link_fot

pasted

22:25
Znalazłem. W GAS zapiszAutoDoArkusza zapisuje opis do kolumny P (indeks 16):

js
sheet.getRange(row, 16).setValue(data.opis);
A arkuszDoJSON (które buduje data.json) mapuje nagłówki z wiersza 1 arkusza małymi literami. Sprawdź jak nazywa się nagłówek kolumny P w Sheets – prawdopodobnie to uc_beztla albo coś innego, nie opis.

Wejdź w arkusz NOWE_AUTO, wiersz 1, kolumna P – jak dokładnie brzmi ten nagłówek?

uc_bez tla
na przemian są zdjęcia z drive i opisy

22:27
Jasne – kolumna P nazywa się uc_beztla ale GAS wpisuje tam data.opis (tekst) i data.link_bez_tla (URL z Drive) naprzemiennie, bo masz dwa różne miejsca zapisu:

kolumna N (indeks 14) = link_bez_tla (URL)
kolumna P (indeks 16) = opis (tekst HTML)
Ale nagłówek kolumny P to uc_beztla – więc React czyta car.uc_beztla i dostaje tekst opisu. To powinno działać.

Problem jest gdzie indziej – sprawdź kolumnę P dla tego konkretnego auta którego oglądasz. Czy tam jest tekst opisu czy URL do zdjęcia?

Jeśli URL – znaczy że Python wpisuje link_bez_tla zamiast opis do pola opis przy zapisie. W sync() w Pythonie masz:

python
"opis": self.opis_txt.get("1.0", tk.END).strip(),
A GAS zapisuje to do kolumny 16. Ale nagłówek kolumny P to uc_beztla – więc arkuszDoJSON zwróci to jako uc_beztla w JSON, i React to wyświetli.

Wklej co dokładnie jest w komórce P dla tego Opla Insignia z screena.

w tym aucie jest opis

22:28
To znaczy że dane są OK i dangerouslySetInnerHTML powinno renderować HTML. Wróćmy do podstaw – otwórz DevTools na stronie produktu (F12), zakładka Elements, znajdź div .description i sprawdź czy w środku są faktyczne tagi HTML czy czysty tekst.

na wordpresie czy na git-cie?

22:28
Na git-cie – tej stronie React którą naprawiamy.

1782246595401_image.png
nie ma tagów, przecierz ci wysyłałem screena

22:29
Widzę – w DevTools są same <br> bez <b> ani <li>. To znaczy że dane w Sheets dla tego auta mają opis z <br> (zwykłe zamiany nowych linii), a nie z <b>/<li>.

Opis jest renderowany poprawnie przez dangerouslySetInnerHTML – <br> działają (widać odstępy między akapitami).

Problem który zgłosiłeś na początku ("opis nie pobiera formatowania html") – to nie jest bug w React, tylko te konkretne auta po prostu nie mają <b> i <li> w danych. Opis z formularzem GAS (fmt()) zamienia \n na <br>, ale nie dodaje boldów ani list.

Wróćmy do oryginalnych 3 problemów – ten jest de facto rozwiązany. Zostają:

Scroll na górę – zrobiłeś już fix?
Ładne URL-e – wdrożyłeś?
ale skąd tam naprzemiennie opisy z e zdjęciami, co za burdel

22:30
Z screena który wysłałeś wcześniej – w arkuszu kolumna P (uc_beztla) ma naprzemiennie URL z Drive i tekst opisu, bo:

W GAS pobierzDaneDoEdycji czyta kolumnę P jako opis (indeks 15), ale zapiszAutoDoArkusza zapisuje data.opis do kolumny 16 (też P). Tymczasem kolumna N (indeks 13) to link_bez_tla.

Ale patrząc na zapiszAutoDoArkusza:

js
sheet.getRange(row, 14).setValue(fotoN);  // N = link_bez_tla
sheet.getRange(row, 16).setValue(data.opis); // P = opis
To wygląda poprawnie. Problem jest w starych wpisach – były zapisywane starszą wersją GAS która wpisywała URL zdjęcia do kolumny P zamiast N.

Nowe auta będą OK. Stare trzeba ręcznie poprawić w arkuszu – przenieść URL-e z kolumny P do N, a opisy zostawić w P.

Albo zrób to skryptem GAS jednorazowo:

js
function naprawKolumnyPN() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("NOWE_AUTO");
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    var p = data[i][15]; // kolumna P
    if (p && p.toString().startsWith('http')) {
      sheet.getRange(i+1, 14).setValue(p); // przenieś do N
      sheet.getRange(i+1, 16).setValue(''); // wyczyść P
    }
  }
}
Odpal raz i po sprawie.

no i dobrze, wywaliło linki, a opisy sobie dodam ręcznie, ok, na czym staneliśmy?

22:32
Zostały 2 z oryginalnych 3 problemów:

Scroll na górę przy wejściu na stronę produktu
Ładne URL-e zamiast #/samochod/36102
Oba mam już napisane wyżej. Wdrażasz?

napiszesz mi cały plik?

22:32
Który plik – ProductPage.js czy HomePage.js? Bo zmiany są w obu.

no to oba

22:32
Potrzebuję aktualnych wersji obu plików – wklej obecny HomePage.js (masz go z początku rozmowy ale mógłeś coś zmieniać) i ProductPage.js. Wtedy napiszę oba kompletne z wszystkimi poprawkami.


import React, { useState, useEffect, useRef } from 'react'; import PhotoSwipeLightbox from 'photoswipe/lightbox'; import 'photoswipe/style.css'; import './App.css'; import Navbar from './Navbar'; const ProductPage = () => { const [car, setCar] = useState(null); const [loading, setLoadin

pasted


import ProductPage from './ProductPage'; import ContactPage from './ContactPage'; import BlogPage from './BlogPage'; import React, { useState, useEffect, useCallback } from 'react'; import './App.css'; import Navbar from './Navbar'; const HomePage = () => { const [currentHash, setCurren

pasted

ProductPage.jsx
App.jsx

22:33
Piszę oba pliki z wszystkimi trzema poprawkami (scroll, HTML w opisie, ładne URL-e).


Created 2 files, read a file
Created 2 files, read a file
Co zostało zmienione:

HomePage.js:

goToProduct(car) zamiast goToProduct(carId) – przekazuje cały obiekt
URL format: #/samochod/opel-insignia-certyfikat--36102
funkcja slugify na górze pliku
ProductPage.js:

window.scrollTo(0, 0) synchronicznie przy mount (osobny useEffect)
wyciąganie ID z nowego formatu slug--id z fallbackiem na stary format
decodeHtml() na opisie na wypadek podwójnego escapowania
opis renderuje się tylko gdy nie jest pusty (car.description &&)

Homepage
JS 

Productpage
JS 





Claude is AI and can make mistakes. Please double-check responses.
Homepage · JS
import ProductPage from './ProductPage';
import ContactPage from './ContactPage';
import BlogPage from './BlogPage';
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Navbar from './Navbar';
 
const slugify = (str) => str
  .toLowerCase()
  .replace(/ą/g,'a').replace(/ę/g,'e').replace(/ó/g,'o').replace(/ś/g,'s')
  .replace(/ł/g,'l').replace(/ż/g,'z').replace(/ź/g,'z').replace(/ć/g,'c').replace(/ń/g,'n')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');
 
const HomePage = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [stats, setStats] = useState({
    carsSold: 0,
    yearsExperience: 0,
    satisfiedClients: 0
  });
  const [filters, setFilters] = useState({
    brand: '',
    model: '',
    priceRange: [0, 300000],
    yearRange: [2000, 2025],
    fuel: [],
    mileageRange: [0, 300000]
  });
 
  const carsPerPage = 12;
 
  const availableBrands = [...new Set(cars.map(c => c.brand).filter(Boolean))].sort();
  const availableModels = [...new Set(
    cars
      .filter(c => !filters.brand || c.brand === filters.brand)
      .map(c => c.model)
      .filter(Boolean)
  )].sort();
 
  const fuelTypes = ['Benzyna', 'Diesel', 'Hybryda', 'Elektryczny', 'LPG'];
 
  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
 
  const fetchCarsFromAPI = async () => {
    try {
      const timestamp = new Date().getTime();
      const response = await fetch(`./data.json?t=${timestamp}`);
      
      if (!response.ok) {
        throw new Error(`Błąd: Nie znaleziono pliku danych (Status: ${response.status})`);
      }
 
      const data = await response.json();
      localStorage.setItem('cars_cache_raw', JSON.stringify(data));
 
      const mapped = data.map((auto) => ({
        id: auto.id_wc_1,
        title: `${auto.marka} ${auto.model}`,
        brand: auto.marka,
        model: auto.model,
        version: auto.wersja || '',
        year: parseInt(auto.rok) || 2000,
        mileage: parseInt(auto.przebieg) || 0,
        fuel: auto.paliwo || 'Benzyna',
        price: parseInt(auto.cena) || 0,
        engine: auto.pojemnosc || auto['pojemnosc-silnika'] || '---',
        power: auto.moc || '---',
        transmission: auto.skrzynia || 'Manualna',
        color: auto.kolor || '',
        link_glowne: auto.link_glowne || auto.uc_glowne || 'https://via.placeholder.com/400x300?text=Brak+zdjęcia',
        slogan: auto.slogan1 || '',
        sold: String(auto.status_sprzedany).toUpperCase() === 'TAK',
        vin: auto.vin || '---',
        description: auto.uc_beztla || '',
        uc_glowne: auto.uc_glowne || '',
        equip_audio: auto.equip_audio || '',
        equip_komfort: auto.equip_komfort || '',
        equip_bezpieczenstwo: auto.equip_bezpieczenstwo || '',
        equip_systemy: auto.equip_systemy || '',
      }));
 
      const sorted = mapped.sort((a, b) => b.id - a.id);
      localStorage.setItem('cars_cache', JSON.stringify(sorted));
      return sorted;
    } catch (error) {
      console.error("Błąd krytyczny pobierania:", error.message);
      return [];
    }
  };
 
  const animateStats = useCallback(() => {
    const targetStats = { carsSold: 4230, yearsExperience: 28, satisfiedClients: 92 };
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setStats({
        carsSold: Math.floor(targetStats.carsSold * progress),
        yearsExperience: Math.floor(targetStats.yearsExperience * progress),
        satisfiedClients: Math.floor(targetStats.satisfiedClients * progress)
      });
      if (currentStep >= steps) {
        setStats(targetStats);
        clearInterval(interval);
      }
    }, stepTime);
    return () => clearInterval(interval);
  }, []);
 
  useEffect(() => {
    const loadCars = async () => {
      setLoading(true);
      const carsData = await fetchCarsFromAPI();
      if (carsData && carsData.length > 0) {
        setCars(carsData);
        setFilteredCars(carsData);
        const maxPrice = Math.max(...carsData.map(c => c.price));
        const maxMileage = Math.max(...carsData.map(c => c.mileage));
        setFilters(prev => ({
          ...prev,
          priceRange: [0, maxPrice],
          mileageRange: [0, maxMileage],
          yearRange: [2000, new Date().getFullYear()]
        }));
      }
      setLoading(false);
    };
    loadCars();
    animateStats();
  }, [animateStats]);
 
  useEffect(() => {
    let filtered = [...cars];
    if (filters.brand) {
      filtered = filtered.filter(car => car.brand === filters.brand);
    }
    if (filters.model) {
      filtered = filtered.filter(car => car.model === filters.model);
    }
    filtered = filtered.filter(car =>
      car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1]
    );
    filtered = filtered.filter(car =>
      car.year >= filters.yearRange[0] && car.year <= filters.yearRange[1]
    );
    filtered = filtered.filter(car =>
      car.mileage >= filters.mileageRange[0] && car.mileage <= filters.mileageRange[1]
    );
    if (filters.fuel.length > 0) {
      filtered = filtered.filter(car => filters.fuel.includes(car.fuel));
    }
    setFilteredCars(filtered);
    setCurrentPage(1);
  }, [filters, cars]);
 
  const handleBrandChange = (e) => {
    setFilters(prev => ({ ...prev, brand: e.target.value, model: '' }));
  };
 
  const handleModelChange = (e) => {
    setFilters(prev => ({ ...prev, model: e.target.value }));
  };
 
  const handlePriceRangeChange = (e) => {
    setFilters(prev => ({ ...prev, priceRange: [prev.priceRange[0], parseInt(e.target.value)] }));
  };
 
  const handleMileageRangeChange = (e) => {
    setFilters(prev => ({ ...prev, mileageRange: [prev.mileageRange[0], parseInt(e.target.value)] }));
  };
 
  const handleFuelToggle = (fuelType) => {
    setFilters(prev => {
      const current = prev.fuel;
      const updated = current.includes(fuelType)
        ? current.filter(f => f !== fuelType)
        : [...current, fuelType];
      return { ...prev, fuel: updated };
    });
  };
 
  const resetFilters = () => {
    if (cars.length === 0) return;
    const maxPrice = Math.max(...cars.map(c => c.price));
    const maxMileage = Math.max(...cars.map(c => c.mileage));
    setFilters({
      brand: '',
      model: '',
      priceRange: [0, maxPrice],
      yearRange: [2000, new Date().getFullYear()],
      fuel: [],
      mileageRange: [0, maxMileage]
    });
  };
 
  const goToProduct = (car) => {
    const slug = slugify(`${car.brand}-${car.model}-${car.slogan || car.year}`);
    window.location.hash = `#/samochod/${slug}--${car.id}`;
  };
 
  const currentCars = filteredCars.slice(0, currentPage * carsPerPage);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const formatPrice = (price) => price.toLocaleString('pl-PL') + ' zł';
  const formatMileage = (mileage) => (mileage / 1000).toFixed(0) + 'k km';
 
  if (currentHash.startsWith('#/samochod/')) {
    return <ProductPage />;
  }
  if (currentHash === '#/kontakt') {
    return <ContactPage />;
  }
  if (currentHash === '#/blog' || currentHash.startsWith('#/blog')) {
    return <BlogPage />;
  }
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Ładowanie ofert...</p>
      </div>
    );
  }
 
  const maxPrice = cars.length > 0 ? Math.max(...cars.map(c => c.price)) : 300000;
  const maxMileage = cars.length > 0 ? Math.max(...cars.map(c => c.mileage)) : 300000;
 
  return (
    <div className="homepage">
      <Navbar />
      <div className="hero-section">
        <div className="hero-content">
          <h1>Auto Handel Puławy</h1>
          <p>Samochody z certyfikatem • Skup • Zamiana</p>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">{stats.carsSold}+</div>
              <div className="stat-label">Sprzedanych aut</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.yearsExperience}+</div>
              <div className="stat-label">Lat doświadczenia</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.satisfiedClients}%</div>
              <div className="stat-label">Zadowolonych klientów</div>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => { window.location.hash = '#/blog'; }} className="reset-filters-btn">
                📝 Blog
              </button>
              <button onClick={() => { window.location.hash = '#/kontakt'; }} className="reset-filters-btn">
                📞 Kontakt
              </button>
            </div>
          </div>
        </div>
      </div>
 
      <div className="main-container">
        <aside className="filters-sidebar">
          <div className="filters-header">
            <h3>Filtruj ogłoszenia</h3>
            <button onClick={resetFilters} className="reset-filters-btn">Resetuj filtry</button>
          </div>
          <div className="filter-group">
            <label>Marka</label>
            <select name="brand" value={filters.brand} onChange={handleBrandChange}>
              <option value="">Wszystkie marki</option>
              {availableBrands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label>Model</label>
            <select name="model" value={filters.model} onChange={handleModelChange} disabled={availableModels.length === 0}>
              <option value="">Wszystkie modele</option>
              {availableModels.map(model => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label>Cena do: <strong>{filters.priceRange[1].toLocaleString('pl-PL')} zł</strong></label>
            <input type="range" min="0" max={maxPrice} step={1000} value={filters.priceRange[1]} onChange={handlePriceRangeChange} className="range-slider" />
          </div>
          <div className="filter-group">
            <label>Przebieg do: <strong>{(filters.mileageRange[1] / 1000).toFixed(0)}k km</strong></label>
            <input type="range" min="0" max={maxMileage} step={5000} value={filters.mileageRange[1]} onChange={handleMileageRangeChange} className="range-slider" />
          </div>
          <div className="filter-group">
            <label>Rok od: <strong>{filters.yearRange[0]}</strong></label>
            <input type="range" min="2000" max={new Date().getFullYear()} step={1} value={filters.yearRange[0]} onChange={(e) => setFilters(prev => ({ ...prev, yearRange: [parseInt(e.target.value), prev.yearRange[1]] }))} className="range-slider" />
          </div>
          <div className="filter-group">
            <label>Rodzaj paliwa</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
              {fuelTypes.map(fuel => (
                <div key={fuel} onClick={() => handleFuelToggle(fuel)} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                  <div style={{ width: '18px', height: '18px', border: '2px solid', borderColor: filters.fuel.includes(fuel) ? '#e30613' : '#ccc', borderRadius: '4px', background: filters.fuel.includes(fuel) ? '#e30613' : '#fff' }}></div>
                  <span style={{ fontSize: '14px' }}>{fuel}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
 
        <main className="cars-grid-container">
          <div className="cars-header">
            <h2>Dostępne pojazdy</h2>
          </div>
          <div className="cars-grid">
            {currentCars.map(car => (
              <div key={car.id} className="car-card">
                {car.sold && <div className="sold-badge">SPRZEDANY</div>}
                {car.slogan && !car.sold && <div className="slogan-badge">{car.slogan}</div>}
                <div className="car-image">
                  <img src={car.link_glowne} alt={car.title} loading="lazy" />
                </div>
                <div className="car-info">
                  <div className="car-title-block">
                    <h3 className="car-title">{car.title}</h3>
                    {car.version && <div className="car-version">{car.version}</div>}
                  </div>
                  <div className="car-price">{formatPrice(car.price)}</div>
                  <div className="car-specs-divider"></div>
                  <div className="car-specs">
                    <div className="car-spec">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e30613" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      {car.year}
                    </div>
                    <div className="car-spec">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e30613" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {formatMileage(car.mileage)}
                    </div>
                    <div className="car-spec">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e30613" strokeWidth="2"><path d="M3 22V8l9-6 9 6v14"/><path d="M9 22V12h6v10"/></svg>
                      {car.fuel}
                    </div>
                    <div className="car-spec">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e30613" strokeWidth="2"><circle cx="5" cy="12" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><line x1="7" y1="12" x2="17" y2="6"/><line x1="7" y1="12" x2="17" y2="18"/></svg>
                      {car.transmission}
                    </div>
                  </div>
                  <button className="details-btn" onClick={() => goToProduct(car)}>
                    Zobacz szczegóły →
                  </button>
                </div>
              </div>
            ))}
          </div>
          {currentPage < totalPages && (
            <div style={{ textAlign: 'center', margin: '30px 0' }}>
              <button
                className="details-btn"
                style={{ padding: '14px 40px', fontSize: '16px' }}
                onClick={() => setCurrentPage(prev => prev + 1)}
              >
                Zobacz więcej ({filteredCars.length - currentPage * carsPerPage} pozostałych) →
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
 
export default HomePage;
 
















