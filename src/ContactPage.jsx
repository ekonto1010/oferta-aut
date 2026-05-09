import React, { useState, useEffect } from 'react';

const GAS_URL = "https://script.google.com/macros/s/AKfycbwu836OeL21taIDhmEyJdhB1h3izeiCONfFKe_qMrTbZfsgF4Md_vgLmQ4CT8_7iGsDAA/exec";

const ContactPage = () => {
  const [kontakt, setKontakt] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${GAS_URL}?tab=kontakt`)
      .then(r => r.json())
      .then(data => { setKontakt(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const goHome = () => { window.location.hash = ''; };

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Ładowanie...</p>
    </div>
  );

  const tel = kontakt?.telefon || '603616448';
  const telRaw = tel.replace(/\s/g, '');
  const wa = kontakt?.whatsapp || `48${telRaw}`;
  const adres = kontakt?.adres || 'ul. Lubelska 10, Puławy';
  const godziny = kontakt?.godziny || 'Pon-Pt 9-18, Sob 9-14';

  return (
    <div className="homepage">
      {/* HERO */}
      <div className="hero-section" style={{ minHeight: '200px' }}>
        <div className="hero-content">
          <h1>Kontakt</h1>
          <p>Auto Handel Puławy • Jesteśmy do Twojej dyspozycji</p>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>

        {/* KARTY KONTAKTOWE */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>

          <a href={`tel:${telRaw}`} style={{ textDecoration: 'none' }}>
            <div style={cardStyle}>
              <div style={iconStyle}>📞</div>
              <div style={{ fontWeight: 700, fontSize: '13px', color: '#999', marginBottom: '6px', textTransform: 'uppercase' }}>Telefon</div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#111' }}>{tel}</div>
            </div>
          </a>

          <a href={`https://wa.me/${wa}?text=Dzień dobry, chciałem zapytać o ofertę.`} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <div style={{ ...cardStyle, borderColor: '#25D366' }}>
              <div style={{ ...iconStyle, background: '#25D366' }}>💬</div>
              <div style={{ fontWeight: 700, fontSize: '13px', color: '#999', marginBottom: '6px', textTransform: 'uppercase' }}>WhatsApp</div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#25D366' }}>Napisz do nas</div>
            </div>
          </a>

          <div style={cardStyle}>
            <div style={iconStyle}>📍</div>
            <div style={{ fontWeight: 700, fontSize: '13px', color: '#999', marginBottom: '6px', textTransform: 'uppercase' }}>Adres</div>
            <div style={{ fontSize: '15px', fontWeight: 600, color: '#111' }}>{adres}</div>
          </div>

          <div style={cardStyle}>
            <div style={iconStyle}>🕐</div>
            <div style={{ fontWeight: 700, fontSize: '13px', color: '#999', marginBottom: '6px', textTransform: 'uppercase' }}>Godziny</div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#111', whiteSpace: 'pre-line' }}>{godziny}</div>
          </div>

        </div>

        {/* MAPA */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', marginBottom: '40px' }}>
          <iframe
            title="Mapa Auto Handel Puławy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5!2d21.9689!3d51.4166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722b0e0e0e0e0e1%3A0x1!2sul.+Lubelska+10%2C+Pu%C5%82awy!5e0!3m2!1spl!2spl!4v1620000000000!5m2!1spl!2spl"
            width="100%"
            height="420"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* PRZYCISKI CTA */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
          <a href={`tel:${telRaw}`} className="product-call-btn" style={{ textDecoration: 'none', display: 'inline-block', padding: '16px 40px', fontSize: '16px' }}>
            Zadzwoń teraz: {tel}
          </a>
          <a
            href={`https://wa.me/${wa}?text=Dzień dobry, chciałem zapytać o ofertę.`}
            target="_blank" rel="noreferrer"
            className="product-wa-btn"
            style={{ textDecoration: 'none', display: 'inline-block', padding: '16px 40px', fontSize: '16px' }}
          >
            WhatsApp
          </a>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={goHome} className="reset-filters-btn" style={{ padding: '12px 30px' }}>
            ← Wróć do oferty
          </button>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  background: '#fff',
  border: '2px solid #f0f0f0',
  borderRadius: '12px',
  padding: '24px 20px',
  textAlign: 'center',
  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
  cursor: 'default',
  transition: 'transform 0.2s',
};

const iconStyle = {
  width: '48px',
  height: '48px',
  background: '#e30613',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '22px',
  margin: '0 auto 12px',
};

export default ContactPage;