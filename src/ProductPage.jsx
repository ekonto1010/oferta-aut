import React, { useState, useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import './App.css';

const ProductPage = () => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]);
  const lightboxRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash;
    const carId = hash.split('/').pop();
    if (carId) {
      fetchCarDetails(carId);
    }
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery-trigger',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();
    lightboxRef.current = lightbox;
    return () => lightbox.destroy();
  }, [images]);

  const fetchCarDetails = async (id) => {
    setLoading(true);
    const timestamp = new Date().getTime();

    try {
      // 1. Najpierw sprawdźmy, czy mamy to w localStorage
      const mainCache = localStorage.getItem('cars_cache_raw');
      let allCars = mainCache ? JSON.parse(mainCache) : null;

      // 2. Jeśli nie ma w pamięci, pobierz świeży plik JSON (ten od Pythona)
      if (!allCars) {
        const response = await fetch(`./data.json?t=${timestamp}`);
        allCars = await response.json();
        localStorage.setItem('cars_cache_raw', JSON.stringify(allCars));
      }

      // 3. Znajdź konkretne auto
      const found = allCars.find(c => String(c.id_wc_1) === String(id));
      if (found) {
        processCarData(found);
      } else {
        console.error("Nie znaleziono auta o ID:", id);
      }
    } catch (error) {
      console.error('Błąd pobierania danych z JSON:', error);
    } finally {
      setLoading(false);
    }
  };

  const processCarData = (rawCar) => {
    let galleryImages = [];
    const mainImg = rawCar.link_glowne;
    if (mainImg) galleryImages.push(mainImg);

    const additionalPhotos = rawCar.uc_glowne || '';
    if (typeof additionalPhotos === 'string' && additionalPhotos.trim()) {
      const galUrls = additionalPhotos.split('\n').map(u => u.trim()).filter(u => u && u !== mainImg);
      galleryImages.push(...galUrls);
    }

    const parseEquipment = (str) => {
      if (!str) return [];
      return str.split('\n')
                .map(item => item.replace(/^-/, '').trim())
                .filter(item => item.length > 1);
    };

    const cleanNum = (val) => {
      if (!val) return 0;
      const num = parseInt(String(val).replace(/[^0-9]/g, ''));
      return num || 0;
    };

    const mappedCar = {
      id: rawCar.id_wc_1,
      title: `${rawCar.marka || ''} ${rawCar.model || ''}`.trim() || 'Pojazd',
      version: rawCar.wersja || '',
      year: rawCar.rok || '---',
      mileage: cleanNum(rawCar.przebieg),
      fuel: rawCar.paliwo || '---',
      price: cleanNum(rawCar.cena),
      engine: (rawCar['pojemnosc-silnika'] || '---'),
      power: (rawCar.moc || '---') + ' KM',
      transmission: rawCar['skrzynia-biegow'] || '---',
      color: rawCar.kolor || '---',
      vin: rawCar.vin || 'Dostępny na życzenie',
      body: rawCar.typ_nadwozia || '---',
      drive: rawCar.naped || '---',
      description: rawCar.uc_beztla || rawCar.opis || 'Brak opisu',
      slogan: rawCar.slogan1 || '',
      sold: String(rawCar.status_sprzedany).toUpperCase() === 'TAK',
      phone: '603616448',
      equipment: {
        'Multimedia': parseEquipment(rawCar.equip_audio),
        'Komfort': parseEquipment(rawCar.equip_komfort),
        'Bezpieczeństwo': parseEquipment(rawCar.equip_bezpieczenstwo),
        'Systemy': parseEquipment(rawCar.equip_systemy)
      },
      galleryImages: galleryImages
    };

    setCar(mappedCar);
    setImages(galleryImages.length > 0 ? galleryImages : ['https://via.placeholder.com/800x600?text=Brak+zdjęć']);

    return mappedCar;
  };

  const changeImage = (index) => setCurrentImageIndex(index);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const formatPrice = (price) => price > 0 ? price.toLocaleString('pl-PL') + ' zł' : 'Zapytaj o cenę';
  const formatPhone = (phone) => phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');

  if (loading && !car) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Ładowanie pełnej specyfikacji...</p>
      </div>
    );
  }

  if (!car) return <div className="loading-container"><h2>Nie znaleziono pojazdu</h2></div>;

  return (
    <div className="product-page">
      <div className="product-wrapper">
        <div className="product-gallery">
          <div className="main-image-container" id="gallery-trigger">
            {car.sold && <div className="sold-overlay">POJAZD SPRZEDANY</div>}
            {car.slogan && !car.sold && <div className="slogan-overlay">{car.slogan}</div>}

            <div className="main-image-wrapper" onClick={() => lightboxRef.current?.loadAndOpen(currentImageIndex)}>
              <img src={images[currentImageIndex]} alt={car.title} className="main-image" />
            </div>

            {images.length > 1 && (
              <>
                <button className="gallery-nav prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>❮</button>
                <button className="gallery-nav next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>❯</button>
              </>
            )}

            <div style={{ display: 'none' }}>
              {images.map((img, idx) => (
                <a key={idx} href={img} data-pswp-width="1600" data-pswp-height="1200"></a>
              ))}
            </div>
          </div>

          {images.length > 1 && (
            <div className="thumbnail-list">
              {images.map((img, idx) => (
                <div key={idx} className={`thumbnail ${idx === currentImageIndex ? 'active' : ''}`} onClick={() => changeImage(idx)}>
                  <img src={img} alt="Miniatura" />
                </div>
              ))}
            </div>
          )}

          <div className="product-details">
            <div className="details-section">
              <h3>Opis pojazdu</h3>
<div className="description" dangerouslySetInnerHTML={{ __html: car.description.replace(/\n{3,}/g, '\n\n').replace(/\n/g, '<br>') }} />            </div>
          </div>

          <div className="product-details">
            <div className="details-section">
              <h3>Dane techniczne</h3>
              <div className="tech-grid">
                <div className="tech-item"><span>Rok produkcji</span><strong>{car.year}</strong></div>
                <div className="tech-item"><span>Przebieg</span><strong>{car.mileage.toLocaleString('pl-PL')} km</strong></div>
                <div className="tech-item"><span>Pojemność</span><strong>{car.engine}</strong></div>
                <div className="tech-item"><span>Moc</span><strong>{car.power}</strong></div>
                <div className="tech-item"><span>Skrzynia biegów</span><strong>{car.transmission}</strong></div>
                <div className="tech-item"><span>Nadwozie</span><strong>{car.body}</strong></div>
                <div className="tech-item"><span>Kolor</span><strong>{car.color}</strong></div>
                <div className="tech-item"><span>Napęd</span><strong>{car.drive}</strong></div>
                <div className="tech-item"><span>Paliwo</span><strong>{car.fuel}</strong></div>
                <div className="tech-item"><span>VIN</span><strong className="vin">{car.vin}</strong></div>
              </div>
            </div>
          </div>

          {Object.values(car.equipment).some(arr => arr.length > 0) && (
            <div className="product-details">
              <div className="details-section">
                <h3>Wyposażenie</h3>
                <div className="equipment-grid">
                  {Object.entries(car.equipment).map(([category, items]) => (
                    items.length > 0 && (
                      <div className="equipment-category" key={category}>
                        <div className="category-title">
                          {category === 'Multimedia' ? '🎵' : category === 'Komfort' ? '🛋️' : category === 'Bezpieczeństwo' ? '🛡️' : '⚙️'} {category}
                        </div>
                        <ul>{items.map((item, i) => <li key={i}>✓ {item}</li>)}</ul>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="product-info">
          <div className="product-sticky-widget">
            <div className="product-cert-badge">★ Auta z certyfikatem</div>

            <div className="product-widget-icons">
              <div className="product-w-icon-item"><strong>{car.year}</strong><span>ROK</span></div>
              <div className="product-w-icon-item"><strong>{Math.round(car.mileage / 1000)}k</strong><span>KM</span></div>
              <div className="product-w-icon-item"><strong>{car.fuel}</strong><span>PALIWO</span></div>
            </div>

            <div style={{ padding: '25px', textAlign: 'center' }}>
              <h1 className="product-title">{car.title}</h1>
              <div className="product-price">{formatPrice(car.price)}</div>
              <a href={`tel:${car.phone}`} className="product-call-btn">ZADZWOŃ<br /><span>{formatPhone(car.phone)}</span></a>
              <a href={`https://wa.me/48${car.phone}?text=Dzień dobry, czy oferta ${car.title} jest nadal aktualna?`} target="_blank" rel="noreferrer" className="product-wa-btn">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;