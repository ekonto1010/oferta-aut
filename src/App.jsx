import React, { useState, useMemo } from 'react';
import CountUp from 'react-countup';
import { 
  Phone, MessageCircle, Calendar, Gauge, Fuel, 
  Zap, Settings, Car, Palette, ChevronRight, X, 
  ShieldCheck, Search, Coins, Filter
} from 'lucide-react';
import './App.css';
import rawData from './data.json';

const StatBox = ({ end, suffix, text, icon: Icon }) => (
  <div className="stat-box">
    <Icon size={20} className="stat-icon" />
    <div>
      <span className="stat-number">
        <CountUp end={end} duration={2.5} separator=" " />{suffix}
      </span>
      <span className="stat-text">{text}</span>
    </div>
  </div>
);

function App() {
  const [selectedAuto, setSelectedAuto] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [fuelFilter, setFuelFilter] = useState('');
  
  const maxPriceData = useMemo(() => Math.max(...rawData.map(auto => parseInt(auto.cena?.toString().replace(/\s/g, '')) || 0)), []);
  const maxKmData = useMemo(() => Math.max(...rawData.map(auto => parseInt(auto.przebieg?.toString().replace(/\s/g, '')) || 0)), []);

  const [maxPrice, setMaxPrice] = useState(maxPriceData);
  const [maxKm, setMaxKm] = useState(maxKmData);

  const getImageUrl = (auto) => auto.link_glowne || auto.uc_glowne || 'https://placehold.co/600x400';

  const filteredCars = useMemo(() => {
    return rawData.filter(auto => {
      const price = parseInt(auto.cena?.toString().replace(/\s/g, '')) || 0;
      const km = parseInt(auto.przebieg?.toString().replace(/\s/g, '')) || 0;
      const matchSearch = `${auto.marka} ${auto.model}`.toLowerCase().includes(searchTerm.toLowerCase());
      const matchPrice = price <= maxPrice;
      const matchKm = km <= maxKm;
      const matchFuel = fuelFilter === '' || auto.paliwo === fuelFilter;
      return matchSearch && matchPrice && matchKm && matchFuel;
    });
  }, [searchTerm, maxPrice, maxKm, fuelFilter]);

  return (
    <div className="app-container">
      <header className="hero-section">
        <div className="hero-inner">
          <h1 className="hero-logo">Auto Handel <span className="text-red">Puławy</span></h1>
          <p className="hero-desc">Pewne auta używane od 1997 roku</p>
          <div className="hero-stats">
            <StatBox icon={Calendar} end={30} suffix="+" text="LAT TRADYCJI" />
            <StatBox icon={Car} end={rawData.length} suffix="" text="AUT W OFERCIE" />
            <StatBox icon={Zap} end={4176} suffix="+" text="SPRZEDANYCH" />
            <StatBox icon={ShieldCheck} end={100} suffix="%" text="PEWNE AUTA" />
          </div>
        </div>
      </header>

      <section className="filters-area">
        <div className="filters-card">
          <div className="filter-row-top">
            <div className="input-with-icon">
              <Search size={18} />
              <input type="text" placeholder="Szukaj marki lub modelu..." onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className="input-with-icon">
              <Fuel size={18} />
              <select onChange={(e) => setFuelFilter(e.target.value)}>
                <option value="">Wszystkie paliwa</option>
                <option value="Benzyna">Benzyna</option>
                <option value="Diesel">Diesel</option>
                <option value="LPG">Benzyna + LPG</option>
              </select>
            </div>
          </div>
          <div className="filter-row-bottom">
            <div className="range-group">
              <label>Cena do: <strong>{maxPrice.toLocaleString()} zł</strong></label>
              <input type="range" min="0" max={maxPriceData} step="1000" value={maxPrice} onChange={(e) => setMaxPrice(parseInt(e.target.value))} />
            </div>
            <div className="range-group">
              <label>Przebieg do: <strong>{maxKm.toLocaleString()} km</strong></label>
              <input type="range" min="0" max={maxKmData} step="5000" value={maxKm} onChange={(e) => setMaxKm(parseInt(e.target.value))} />
            </div>
          </div>
        </div>
        <div className="results-info">Znaleziono: {filteredCars.length} ofert</div>
      </section>

      <main className="cars-grid">
        {filteredCars.map((auto, i) => (
          <div key={i} className="car-card" onClick={() => setSelectedAuto(auto)}>
            <div className="car-card-img"><img src={getImageUrl(auto)} alt="car" /></div>
            <div className="car-card-body">
              <div className="car-card-tags"><span>{auto.rok}</span><span>{auto.paliwo}</span></div>
              <h3>{auto.marka} {auto.model}</h3>
              <div className="car-card-price">{auto.cena} zł</div>
              <div className="car-card-footer">
                <span><Gauge size={14}/> {auto.przebieg} km</span>
                <span><Zap size={14}/> {auto.moc} KM</span>
              </div>
            </div>
          </div>
        ))}
      </main>

      {selectedAuto && (
        <div className="product-view">
          <div className="product-inner">
            <button className="btn-close" onClick={() => setSelectedAuto(null)}><X size={20}/> POWRÓT</button>
            <div className="product-grid">
              <div className="product-content">
                <div className="gallery-main"><img src={getImageUrl(selectedAuto)} alt="foto" /></div>
                <div className="details-card">
                  <h3>Opis pojazdu</h3>
                  <p>{selectedAuto.opis || "Zapraszamy do kontaktu telefonicznego."}</p>
                </div>
              </div>
              <aside className="product-sidebar">
                <div className="widget-sticky">
                  <h2 className="w-title">{selectedAuto.marka} {selectedAuto.model}</h2>
                  <div className="w-price">{selectedAuto.cena} zł</div>
                  <div className="w-btns">
                    <a href="tel:603616448" className="btn-tel"><Phone size={20}/> ZADZWOŃ</a>
                    <a href="https://wa.me/48603616448" target="_blank" className="btn-wa"><MessageCircle size={20}/> WHATSAPP</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
