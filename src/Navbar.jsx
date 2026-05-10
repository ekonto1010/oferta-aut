import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const hash = window.location.hash;

  const go = (path) => {
    window.location.hash = path;
    setMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === '') return hash === '' || hash === '#';
    return hash.startsWith(path);
  };

  return (
    <nav style={navStyle}>
      <div style={innerStyle}>
        {/* LOGO */}
        <div onClick={() => go('')} style={logoStyle}>
          <span style={{ color: '#e30613', fontWeight: 900 }}>AUTO</span>
          <span style={{ color: '#fff', fontWeight: 700 }}> HANDEL</span>
          <span style={{ color: '#aaa', fontWeight: 400, fontSize: '13px', marginLeft: '6px' }}>Puławy</span>
        </div>

        {/* DESKTOP LINKS */}
        <div style={linksStyle}>
          <button onClick={() => go('')} style={linkStyle(isActive('') && !isActive('#/blog') && !isActive('#/kontakt'))}>
            🚗 Oferta
          </button>
          <button onClick={() => go('#/blog')} style={linkStyle(isActive('#/blog'))}>
            📝 Blog
          </button>
          <button onClick={() => go('#/kontakt')} style={linkStyle(isActive('#/kontakt'))}>
            📞 Kontakt
          </button>
          <a href="tel:603616448" style={callStyle}>
            603 616 448
          </a>
        </div>

        {/* HAMBURGER */}
        <button onClick={() => setMenuOpen(o => !o)} style={hamburgerStyle}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={mobileMenuStyle}>
          <button onClick={() => go('')} style={mobileLinkStyle}>🚗 Oferta</button>
          <button onClick={() => go('#/blog')} style={mobileLinkStyle}>📝 Blog</button>
          <button onClick={() => go('#/kontakt')} style={mobileLinkStyle}>📞 Kontakt</button>
          <a href="tel:603616448" style={{ ...mobileLinkStyle, color: '#e30613', textDecoration: 'none', display: 'block' }}>
            📱 603 616 448
          </a>
        </div>
      )}
    </nav>
  );
};

const navStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  background: '#1a1a1a',
  borderBottom: '3px solid #e30613',
  boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
};

const innerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const logoStyle = {
  cursor: 'pointer',
  fontSize: '18px',
  letterSpacing: '1px',
  userSelect: 'none',
};

const linksStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '@media (max-width: 600px)': { display: 'none' },
};

const linkStyle = (active) => ({
  background: active ? '#e30613' : 'transparent',
  color: active ? '#fff' : '#ccc',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: active ? 700 : 400,
  transition: 'all 0.2s',
});

const callStyle = {
  background: '#e30613',
  color: '#fff',
  padding: '8px 18px',
  borderRadius: '6px',
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: '14px',
  marginLeft: '8px',
};

const hamburgerStyle = {
  display: 'none',
  background: 'none',
  border: 'none',
  color: '#fff',
  fontSize: '24px',
  cursor: 'pointer',
  '@media (max-width: 600px)': { display: 'block' },
};

const mobileMenuStyle = {
  background: '#222',
  padding: '12px 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

const mobileLinkStyle = {
  background: 'none',
  border: 'none',
  color: '#ccc',
  fontSize: '16px',
  padding: '12px 8px',
  textAlign: 'left',
  cursor: 'pointer',
  borderBottom: '1px solid #333',
  width: '100%',
};

export default Navbar;