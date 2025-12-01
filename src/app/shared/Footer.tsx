import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="dolphin-footer">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-brand-column">
            <div className="brand-info" style={{marginTop: '2.5rem'}}>
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

          <div className="footer-links-section" style={{marginTop: '2rem'}}>
            <div className="footer-links-column">
              <h4 className="footer-column-title">Shop Our Brands</h4>
              <ul className="footer-link-list">
                <li><a href="https://godsbydmart.com">godsbydmart.com</a></li>
                <li><a href="https://giftsbydmart.com">giftsbydmart.com</a></li>
                <li><a href="https://decorbydmart.com">decorbydmart.com</a></li>
                <li><a href="https://woodmart.in">woodmart.in</a></li>
              </ul>
            </div>

            <div className="footer-links-column" style={{marginLeft: '8rem'}}>
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

        <div className="footer-brand-large" style={{marginTop: '-2.5rem'}}>
          <Image src="/White.png" alt="House of Dolphin" width={300} height={100} />
        </div>
      </div>
    </footer>
  );
}
