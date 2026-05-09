import React, { useState, useEffect } from 'react';

const GAS_URL = "https://script.google.com/macros/s/AKfycbwu836OeL21taIDhmEyJdhB1h3izeiCONfFKe_qMrTbZfsgF4Md_vgLmQ4CT8_7iGsDAA/exec";

const BlogPage = () => {
  const [wpisy, setWpisy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [aktywny, setAktywny] = useState(null); // ID otwartego wpisu

  useEffect(() => {
    fetch(`${GAS_URL}?tab=blog`)
      .then(r => r.json())
      .then(data => { setWpisy(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const goHome = () => { window.location.hash = ''; };

  const formatData = (raw) => {
    if (!raw) return '';
    const d = new Date(raw);
    if (isNaN(d)) return raw;
    return d.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Ładowanie wpisów...</p>
    </div>
  );

  // Widok pojedynczego wpisu
  if (aktywny) {
    const wpis = wpisy.find(w => String(w.id) === String(aktywny));
    if (!wpis) return null;
    return (
      <div className="homepage">
        <div className="hero-section" style={{ minHeight: '180px' }}>
          <div className="hero-content">
            <h1>Blog</h1>
            <p>Auto Handel Puławy</p>
          </div>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
          {wpis.zdjecie && (
            <img src={wpis.zdjecie} alt={wpis.tytul}
              style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', borderRadius: '12px', marginBottom: '30px' }} />
          )}
          <div style={{ color: '#999', fontSize: '14px', marginBottom: '10px' }}>{formatData(wpis.data)}</div>
          <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '24px', color: '#111' }}>{wpis.tytul}</h1>
          <div
            style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}
            dangerouslySetInnerHTML={{ __html: (wpis.tresc || '').replace(/\n/g, '<br>') }}
          />
          <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '24px', display: 'flex', gap: '12px' }}>
            <button onClick={() => setAktywny(null)} className="reset-filters-btn" style={{ padding: '12px 24px' }}>
              ← Wszystkie wpisy
            </button>
            <button onClick={goHome} className="reset-filters-btn" style={{ padding: '12px 24px' }}>
              Wróć do oferty
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Lista wpisów
  return (
    <div className="homepage">
      <div className="hero-section" style={{ minHeight: '200px' }}>
        <div className="hero-content">
          <h1>Blog</h1>
          <p>Porady, aktualności i ciekawostki motoryzacyjne</p>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        {wpisy.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#999' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📝</div>
            <p>Brak wpisów. Dodaj wpisy w arkuszu w zakładce "blog".</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
            {wpisy.map(wpis => (
              <div key={wpis.id} onClick={() => setAktywny(wpis.id)} style={blogCardStyle}>
                {wpis.zdjecie && (
                  <div style={{ height: '200px', overflow: 'hidden', borderRadius: '10px 10px 0 0' }}>
                    <img src={wpis.zdjecie} alt={wpis.tytul}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} />
                  </div>
                )}
                <div style={{ padding: '20px' }}>
                  <div style={{ color: '#999', fontSize: '13px', marginBottom: '8px' }}>{formatData(wpis.data)}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: '#111' }}>{wpis.tytul}</h3>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
                    {(wpis.tresc || '').replace(/<[^>]*>/g, '').substring(0, 120)}...
                  </p>
                  <span style={{ color: '#e30613', fontWeight: 600, fontSize: '14px' }}>Czytaj więcej →</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button onClick={goHome} className="reset-filters-btn" style={{ padding: '12px 30px' }}>
            ← Wróć do oferty
          </button>
        </div>
      </div>
    </div>
  );
};

const blogCardStyle = {
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
  cursor: 'pointer',
  transition: 'transform 0.2s, box-shadow 0.2s',
  overflow: 'hidden',
  border: '1px solid #f0f0f0',
};

export default BlogPage;