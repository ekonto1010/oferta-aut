import React from 'react';
import './App.css';
import data from './data.json';

function App() {
  const auta = data;

  return (
    <div className="app-container">
      <header className="header">
        <h1>Nasza Oferta Aut</h1>
      </header>
      
      <div className="cars-grid">
        {auta.map((auto, index) => {
          // Twoja logika, która jest poprawna:
          const finalImg = auto.link_glowne 
            ? auto.link_glowne.split(',')[0].trim() 
            : 'https://via.placeholder.com/400x250';
          
          const title = `${auto.Marka || ''} ${auto.Model || ''}`.trim() || "Pojazd";
          
          const price = auto.Cena 
            ? (isNaN(auto.Cena.toString().replace(/\s/g, '')) 
                ? auto.Cena 
                : parseInt(auto.Cena.toString().replace(/\s/g, '')).toLocaleString() + " PLN")
            : "Cena tel.";

          const description = auto.Opis || "";

          return (
            <div key={index} className="auto-card">
              <div className="card-image">
                <img 
                  src={finalImg} 
                  alt={title} 
                  onError={(e) => e.target.src='https://via.placeholder.com/400x250'} 
                />
                <span className="status-badge">{auto.Status || 'Dostępny'}</span>
              </div>
              <div className="card-content">
                <h3>{title}</h3>
                <p className="price">{price}</p>
                {description && <p className="description-text">{description}</p>}
                <button className="details-btn">Szczegóły</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// TO JEST TO, CZEGO BRAKOWAŁO I CO WYWALAŁO BŁĄD:
export default App;
