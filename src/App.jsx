import ProductPage from './ProductPage';
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

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

  // --- POPRAWIONA FUNKCJA POBIERANIA ---
  const fetchCarsFromAPI = async () => {
    try {
      // Używamy ./data.json (relatywnie) + znacznik czasu, aby uniknąć starego cache
      const timestamp = new Date().getTime();
      const response = await fetch(`./data.json?t=${timestamp}`);
      
      if (!response.ok) {
        throw new Error(`Błąd: Nie znaleziono pliku danych (Status: ${response.status})`);
      }

      const data = await response.json();

      // Zapisujemy surowe dane dla ProductPage
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

      localStorage.setItem('cars_cache', JSON.stringify(mapped));
      return mapped;
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

  const goToProduct = (carId) => {
    window.location.hash = `#/samochod/${carId}`;
  };

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const formatPrice = (price) => price.toLocaleString('pl-PL') + ' zł';
  const formatMileage = (mileage) => (mileage / 1000).toFixed(0) + 'k km';

  if (currentHash.startsWith('#/samochod/')) {
    return <ProductPage />;
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
      {/* Tutaj reszta Twojego JSX, bez zmian */}
      <div className="hero-section">
         {/* ... (treść hero) */}
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
           </div>
         </div>
      </div>

      <div className="main-container">
        <aside className="filters-sidebar">
          <div className="filters-header">
            <h3>Filtruj ogłoszenia</h3>
            <button onClick={resetFilters} className="reset-filters-btn">Resetuj filtry</button>
          </div>
          {/* ... reszta filtrów (bez zmian w JSX) */}
          <div className="filter-group">
            <label>Marka</label>
            <select name="brand" value={filters.brand} onChange={handleBrandChange}>
              <option value="">Wszystkie marki</option>
              {availableBrands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          {/* ... model, cena, przebieg, rok, paliwo ... */}
          <div className="filter-group">
             <label>Model</label>
             <select name="model" value={filters.model} onChange={handleModelChange} disabled={availableModels.length === 0}>
               <option value="">Wszystkie modele</option>
               {availableModels.map(model => (
                 <option key={model} value={model}>{model}</option>
               ))}
             </select>
          </div>
          {/* Suwak ceny */}
          <div className="filter-group">
             <label>Cena do: <strong>{filters.priceRange[1].toLocaleString('pl-PL')} zł</strong></label>
             <input type="range" min="0" max={maxPrice} step={1000} value={filters.priceRange[1]} onChange={handlePriceRangeChange} className="range-slider" />
          </div>
          {/* Suwak przebiegu */}
          <div className="filter-group">
             <label>Przebieg do: <strong>{(filters.mileageRange[1] / 1000).toFixed(0)}k km</strong></label>
             <input type="range" min="0" max={maxMileage} step={5000} value={filters.mileageRange[1]} onChange={handleMileageRangeChange} className="range-slider" />
          </div>
          {/* Suwak roku */}
          <div className="filter-group">
             <label>Rok od: <strong>{filters.yearRange[0]}</strong></label>
             <input type="range" min="2000" max={new Date().getFullYear()} step={1} value={filters.yearRange[0]} onChange={(e) => setFilters(prev => ({ ...prev, yearRange: [parseInt(e.target.value), prev.yearRange[1]] }))} className="range-slider" />
          </div>
          {/* Rodzaj paliwa */}
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
                  </div>
                  <div className="car-price">{formatPrice(car.price)}</div>
                  <button className="details-btn" onClick={() => goToProduct(car.id)}>
                    Zobacz szczegóły →
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* ... paginacja ... */}
        </main>
      </div>
    </div>
  );
};

export default HomePage;