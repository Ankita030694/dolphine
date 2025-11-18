import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="dolphin-footer">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-brand-column">
            <div className="brand-info">
              <h3 className="brand-title">House of Dolphin</h3>
              <p className="brand-description">
                House of Dolphin is a premier Home & Lifestyle brand driven by the core philosophy: Dream – Desire – Design. Backed by the quality and trust of the Dmart Group, we curate exceptional furniture, art, and gifts for your home.
              </p>
            </div>
            <div className="social-icons">
              <a className="social-icon-link" aria-label="X (Twitter)" href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a className="social-icon-link" aria-label="Facebook" href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="social-icon-link" aria-label="Instagram" href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          <div className="footer-links-section">
            <div className="footer-links-column">
              <h4 className="footer-column-title">Shop Our Brands</h4>
              <ul className="footer-link-list">
                <li><a href="https://godsbydmart.com">godsbydmart.com</a></li>
                <li><a href="https://giftsbydmart.com">giftsbydmart.com</a></li>
                <li><a href="https://decorbydmart.com">decorbydmart.com</a></li>
                <li><a href="https://woodmart.in">woodmart.in</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-column-title">Contact Us</h4>
              <ul className="footer-link-list">
                <li><a href="#">Call Us</a></li>
                <li><a href="#">Email Us</a></li>
                <li><a href="#">Visit Our Office/Showroom</a></li>
                <li><a href="#">View Location on Map</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-brand-large">
          <h2 className="brand-large-text">House of Dolphin</h2>
        </div>
      </div>
    </footer>
  );
}
