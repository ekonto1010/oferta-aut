import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Auto Handel Puławy</h4>
          <p>Profesjonalna sprzedaż i skup samochodów używanych. Ponad 28 lat doświadczenia na rynku motoryzacyjnym w Puławach.</p>
        </div>
        
        <div className="footer-section">
          <h4>Nawigacja</h4>
          <ul>
            <li><a href="#">Strona główna</a></li>
            <li><a href="#/blog">Blog i aktualności</a></li>
            <li><a href="#/kontakt">Kontakt</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Dane firmy</h4>
          <p>Auto Handel Puławy</p>
          <p>ul. Objazdowa (przy trasie dęblińskiej)</p>
          <p>24-100 Puławy</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Auto Handel Puławy. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;