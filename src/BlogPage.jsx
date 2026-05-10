import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const GAS_URL = "https://script.google.com/macros/s/AKfycbwu836OeL21taIDhmEyJdhB1h3izeiCONfFKe_qMrTbZfsgF4Md_vgLmQ4CT8_7iGsDAA/exec";
const CACHE_KEY = 'blog_cache';
const CACHE_TTL = 10 * 60 * 1000; // 10 minut

const BlogPage = () => {
  const [wpisy, setWpisy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [aktywny, setAktywny] = useState(null);

  useEffect(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, ts } = JSON.parse(cached);
        if (Date.now() - ts < CACHE_TTL) {
          setWpisy(Array.isArray(data) ? data : []);
          setLoading(false);
          return;
        }
      }
    } catch (e) {}

    fetch(`${GAS_URL}?tab=blog`)
      .then(r => r.json())
      .then(data => {
        const lista = Array.isArray(data) ? data : [];
        setWpisy(lista);
        setLoading(false);
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data: lista, ts: Date.now() }));
      })
      .catch(() => setLoading(false));
  }, []);

  const formatData = (raw) => {
    if (!raw) return '';
    const d = new Date(raw);
    if (isNaN(d)) return raw;
    return d.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const renderHTML = (text) => {
    if (!text) return '';
    return text.replace(/\n/g, '<br>');
  };

  const typLabel = (typ) => {
    const mapy = {
      poradnik: '📖 Poradnik',
      lista: '📋 Lista',
      aktualnosc: '📰 Aktualność',
      porownanie: '⚖️ Porównanie',
    };
    return mapy[typ] || '';
  };

  if (loading) return (
    <>
      <Navbar />
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Ładowanie wpisów...</p>
      </div>
    </>
  );

  // ── WIDOK POJEDYNCZEGO WPISU ──────────────────────────────
  if (aktywny) {
    const wpis = wpisy.find(w => String(w.id) === String(aktywny));
    if (!wpis) return null;

    return (
      <div className="homepage">
        <Navbar />
        <div className="hero-section" style={{ minHeight: '160px' }}>
          <div className="hero-content">
            <h1>Blog</h1>
            <p>Auto Handel Puławy</p>
          </div>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '40px 20px' }}>

          {/* BADGE TYPU */}
          {wpis.typ && (
            <div style={{ marginBottom: '12px' }}>
              <span style={badgeStyle}>{typLabel(wpis.typ)}</span>
            </div>
          )}

          {/* DATA */}
          <div style={{ color: '#999', fontSize: '14px', marginBottom: '10px' }}>
            {formatData(wpis.data)}
          </div>

          {/* TYTUŁ */}
          <h1 style={{ fontSize: '30px', fontWeight: 900, marginBottom: '24px', color: '#111', lineHeight: 1.3 }}>
            {wpis.tytul}
          </h1>

          {/* ZDJĘCIE */}
          {wpis.zdjecie && (
            <img src={wpis.zdjecie} alt={wpis.tytul}
              style={{ width: '100%', maxHeight: '440px', objectFit: 'cover', borderRadius: '12px', marginBottom: '32px' }} />
          )}

          {/* INTRO */}
          {wpis.intro && (
            <div style={introStyle}
              dangerouslySetInnerHTML={{ __html: renderHTML(wpis.intro) }}
            />
          )}

          {/* BODY */}
          {wpis.body && (
            <div style={bodyStyle}
              dangerouslySetInnerHTML={{ __html: renderHTML(wpis.body) }}
            />
          )}

          {/* CONCLUSION */}
          {wpis.conclusion && (
            <div style={conclusionStyle}>
              <div style={{ fontWeight: 700, fontSize: '13px', color: '#e30613', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Podsumowanie
              </div>
              <div dangerouslySetInnerHTML={{ __html: renderHTML(wpis.conclusion) }} />
            </div>
          )}

          {/* CTA */}
          {wpis.cta && (
            <div style={ctaStyle}>
              <div style={{ fontWeight: 700, fontSize: '16px', marginBottom: '12px' }}>
                {wpis.cta}
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="tel:603616448" className="product-call-btn"
                  style={{ textDecoration: 'none', padding: '12px 28px' }}>
                  Zadzwoń: 603 616 448
                </a>
                <a href="https://wa.me/48603616448?text=Dzień dobry, mam pytanie z bloga."
                  target="_blank" rel="noreferrer" className="product-wa-btn"
                  style={{ textDecoration: 'none', padding: '12px 28px' }}>
                  WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* NAWIGACJA */}
          <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '24px' }}>
            <button onClick={() => setAktywny(null)} className="reset-filters-btn" style={{ padding: '12px 24px' }}>
              ← Wszystkie wpisy
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── LISTA WPISÓW ─────────────────────────────────────────
  return (
    <div className="homepage">
      <Navbar />
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
            <p>Brak wpisów. Użyj menu <strong>✍️ Blog → Nowy wpis z szablonem</strong> w arkuszu Google.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
            {wpisy.map(wpis => (
              <div key={wpis.id} onClick={() => setAktywny(wpis.id)} style={blogCardStyle}>
                {/* ZDJĘCIE */}
                {wpis.zdjecie && (
                  <div style={{ height: '200px', overflow: 'hidden', borderRadius: '10px 10px 0 0' }}>
                    <img src={wpis.zdjecie} alt={wpis.tytul}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}

                <div style={{ padding: '20px' }}>
                  {/* BADGE + DATA */}
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap' }}>
                    {wpis.typ && <span style={badgeStyle}>{typLabel(wpis.typ)}</span>}
                    <span style={{ color: '#999', fontSize: '12px' }}>{formatData(wpis.data)}</span>
                  </div>

                  {/* TYTUŁ */}
                  <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '10px', color: '#111', lineHeight: 1.4 }}>
                    {wpis.tytul}
                  </h3>

                  {/* INTRO jako zajawka */}
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
                    {(wpis.intro || wpis.body || '').replace(/<[^>]*>/g, '').substring(0, 130)}...
                  </p>

                  <span style={{ color: '#e30613', fontWeight: 600, fontSize: '14px' }}>Czytaj więcej →</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ── STYLE ─────────────────────────────────────────────────

const blogCardStyle = {
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
  cursor: 'pointer',
  transition: 'transform 0.2s, box-shadow 0.2s',
  overflow: 'hidden',
  border: '1px solid #f0f0f0',
};

const badgeStyle = {
  background: '#fff0f0',
  color: '#e30613',
  fontSize: '12px',
  fontWeight: 700,
  padding: '3px 10px',
  borderRadius: '20px',
  border: '1px solid #fcc',
};

const introStyle = {
  fontSize: '17px',
  lineHeight: '1.8',
  color: '#444',
  marginBottom: '32px',
  padding: '20px 24px',
  background: '#f8f8f8',
  borderLeft: '4px solid #e30613',
  borderRadius: '0 8px 8px 0',
};

const bodyStyle = {
  fontSize: '16px',
  lineHeight: '1.9',
  color: '#333',
  marginBottom: '32px',
};

const conclusionStyle = {
  background: '#fff9f9',
  border: '1px solid #fcc',
  borderRadius: '10px',
  padding: '24px',
  marginBottom: '32px',
  fontSize: '15px',
  lineHeight: '1.7',
  color: '#444',
};

const ctaStyle = {
  background: '#1a1a1a',
  color: '#fff',
  borderRadius: '12px',
  padding: '28px 24px',
  marginBottom: '32px',
  textAlign: 'center',
};

export default BlogPage;