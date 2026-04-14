import React from 'react';
import './App.css';
import data from './data.json';

function App() {
  // Dane z Twojego pliku JSON
  const auta = data;

  return (
    <div className="app-container">
      <header className="header">
        <h1>Auto Handel Puławy</h1>
        <p>Pewne auta od 29 lat</p>
      </header>
      
      <div className="cars-grid">
        {auta.map((auto, index) => {
          // 1. OBSŁUGA ZDJĘCIA
          // Klucz w Twoim JSONie zawiera całą formułę, musimy go wyłapać:
          const kluczZdjecia = Object.keys(auto).find(k => k.includes("finalImg")) || "link_glowne";
          const finalImg = auto[kluczZdjecia] || 'https://via.placeholder.com/400x250';

          // 2. TYTUŁ (u Ciebie w JSON są małe litery: marka, model)
          const marka = auto.marka || "";
          const model = auto.model || "";
          const title = `${marka} ${model}`.trim() || "Pojazd";

          // 3. CENA (formatowanie procentów i spacji)
          let wyswietlanaCena = "Cena tel.";
          if (auto.cena) {
            // Usuwamy "%" i zbędne zera, jeśli skrypt je dodał
            const czystaLiczba = auto.cena.toString().replace('%', '').replace(',00', '').replace(/\s/g, '');
            if (!isNaN(czystaLiczba)) {
              wyswietlanaCena = parseInt(czystaLiczba).toLocaleString() + " PLN";
            } else {
              wyswietlanaCena = auto.cena;
            }
          }

          // 4. STATUS (np. Sprzedany/Dostępny)
          const czySprzedany = auto.status_sprzedany === "TAK";

          return (
            <div key={index} className={`auto-card ${czySprzedany ? 'sold' : ''}`}>
              <div className="card-image">
                <img 
                  src={finalImg} 
                  alt={title} 
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400x250'; }}
                />
                {czySprzedany ? (
                  <span className="status-badge sold-badge">SPRZEDANE</span>
                ) : (
                  <span className="status-badge">DOSTĘPNY</span>
                )}
              </div>
              
              <div className="card-content">
                <h3>{title}</h3>
                <p className="price">{wyswietlanaCena}</p>
                
                <div className="car-details-short">
                  <span>{auto.rok} r.</span>
                  <span>•</span>
                  <span>{auto.przebieg} km</span>
                  <span>•</span>
                  <span>{auto.paliwo}</span>
                </div>

                <button className="details-btn">
                  {czySprzedany ? 'Zobacz szczegóły' : 'Sprawdź ofertę'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
