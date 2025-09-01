import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-heading">D&apos;mart group</h3>
            <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Sed do eiusmod tempor incididunt.</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Our Brands</h4>
            <ul className="footer-list">
              <li><a href="#">Gifts by D&apos;Mart</a></li>
              <li><a href="#">Herbgen</a></li>
              <li><a href="#">D&apos;Mart Exclusif</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-list">
              <li><a href="#">About us</a></li>
              <li><a href="#">Our brands</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Follow us</h4>
            <div className="footer-social">
              <a className="social-link h-12" aria-label="Instagram" href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram}/>
              </a>
              <a className="social-link" aria-label="LinkedIn" href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a className="social-link" aria-label="Twitter" href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
