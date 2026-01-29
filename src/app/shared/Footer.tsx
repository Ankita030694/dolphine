import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faAmazon } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="dolphin-footer">
      {/* Desktop Footer */}
      <div className="footer-desktop">
        <div className="footer-content">
          <div className="footer-columns">
            <div className="footer-brand-column">
              <div className="brand-info" style={{marginTop: '2.5rem'}}>
                <p className="brand-description">
                  House of Dolphin is a premier Home & Lifestyle brand driven by the core philosophy: Dream – Desire – Design. Backed by the quality and trust of the Dmart Group, we curate exceptional furniture, art, and gifts for your home.
                </p>
              </div>
              <div className="social-icons">
                <a className="social-icon-link" aria-label="Instagram" href="https://www.instagram.com/dmart_exclusif?igsh=ZDh0aDNueDB3ajBi&utm_source=qr" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="social-icon-link" aria-label="YouTube" href="https://youtube.com/@dmartexclusif1?si=2IM_wyLGY_slgPM_" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a className="social-icon-link" aria-label="Amazon" href="https://www.amazon.in/stores/DmartExclusif/page/A3C86975-8D99-4DA1-A710-A175A81B30B1?lp_asin=B0D4DWS1DS&ref_=cm_sw_r_apin_ast_store_WJCE0B3HKMZ60MB488ZJ&dplnkId=c9084a8d-71de-4f24-aae0-4d9f893540c8&dplnk=Y" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faAmazon} />
                </a>
              </div>
            </div> 

            <div className="footer-links-section" style={{ marginLeft: '5rem', marginTop: '2rem', flexWrap: 'nowrap', gap: '3.5rem'}}>
              <div className="footer-links-column" style={{minWidth: '250px', flex: '0 0 auto'}}>
                <h4 className="footer-column-title">Shop Our Brands</h4>
                <ul className="footer-link-list">
                  <li style={{whiteSpace: 'nowrap'}}><a href="https://www.giftsbydmart.com">Gifts by Dmart (Iota)</a></li>
                  <li style={{whiteSpace: 'nowrap'}}>God by Dmart</li>
                  <li style={{whiteSpace: 'nowrap'}}><a href="https://www.decorbydmart.com">Décor by Dmart (Argentario)</a></li>
                  <li style={{whiteSpace: 'nowrap'}}><a href="https://linktr.ee/Woodmartexclusif?utm_source=linktree_profile_share&ltsid=0810208b-ce34-4548-8a48-bfce2a04468b">Furniture by Dmart (Woodmart)</a></li>
                </ul>
              </div>

              <div className="footer-links-column" style={{marginLeft: '5rem', minWidth: '350px', flex: '0 0 auto'}}>
                <h4 className="footer-column-title">Location</h4>
                <ul className="footer-link-list">
                  <li style={{whiteSpace: 'nowrap'}}>For Franchise Enquiry : <a href="tel:+919560891360">+91 95608 91360</a></li>
                  <li style={{whiteSpace: 'nowrap'}}>For Private Viewing : <a href="tel:+919560891354">+91 95608 91354</a></li>
                  <li style={{whiteSpace: 'nowrap'}}>Customer Service : <a href="tel:+919560891338">+91 95608 91338</a></li>
                  <li style={{whiteSpace: 'nowrap'}}>Email: <a href="mailto:crm@dolphin-india.com">crm@dolphin-india.com</a></li>
                  <li style={{whiteSpace: 'nowrap'}}>Flagship Store Address: 2nd Floor, K-405, Near Metro Pillar No. 119, <br /> Ghitorni, New Delhi, Delhi 110030</li>
                </ul>
              </div>
            </div>
          </div>
         

          <div className="footer-divider"></div>

          <div className="footer-brand-large" >
            <Image src="/footer_logo.png" alt="House of Dolphin" width={500} height={900} unoptimized />
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="footer-mobile">
        <div className="footer-mobile-content">
          <div className="footer-mobile-brand">
            <p className="footer-mobile-description">
              House of Dolphin is a premier Home & Lifestyle brand driven by the core philosophy: Dream – Desire – Design. Backed by the quality and trust of the Dmart Group, we curate exceptional furniture, art, and gifts for your home.
            </p>
            <div className="footer-mobile-social">
              <a className="social-icon-link" aria-label="Instagram" href="https://www.instagram.com/dmart_exclusif?igsh=ZDh0aDNueDB3ajBi&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="social-icon-link" aria-label="YouTube" href="https://youtube.com/@dmartexclusif1?si=2IM_wyLGY_slgPM_" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a className="social-icon-link" aria-label="Amazon" href="https://www.amazon.in/stores/DmartExclusif/page/A3C86975-8D99-4DA1-A710-A175A81B30B1?lp_asin=B0D4DWS1DS&ref_=cm_sw_r_apin_ast_store_WJCE0B3HKMZ60MB488ZJ&dplnkId=c9084a8d-71de-4f24-aae0-4d9f893540c8&dplnk=Y" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faAmazon} />
              </a>
            </div>
          </div>

          <div className="footer-mobile-section">
            <h4 className="footer-mobile-title">Shop Our Brands</h4>
            <ul className="footer-mobile-list">
              <li><a href="https://www.giftsbydmart.com">Gifts by Dmart (Iota)</a></li>
              <li>God by Dmart</li>
              <li><a href="https://www.decorbydmart.com">Décor by Dmart (Argentario)</a></li>
              <li><a href="https://linktr.ee/Woodmartexclusif?utm_source=linktree_profile_share&ltsid=0810208b-ce34-4548-8a48-bfce2a04468b">Furniture by Dmart (Woodmart)</a></li>
            </ul>
          </div>

          <div className="footer-mobile-section">
            <h4 className="footer-mobile-title">Location</h4>
            <ul className="footer-mobile-list">
              <li>For Franchise Enquiry : <a href="tel:+919560891360">+91 95608 91360</a></li>
              <li>For Private Viewing : <a href="tel:+919560891354">+91 95608 91354</a></li>
              <li>Customer Service : <a href="tel:+919560891338">+91 95608 91338</a></li>
              <li>Email: <a href="mailto:crm@dolphin-india.com">crm@dolphin-india.com</a></li>
              <li>Flagship Store Address: 2nd Floor, K-405, Near Metro Pillar No. 119, Ghitorni, New Delhi, Delhi 110030</li>
            </ul>
          </div>

          <div className="footer-mobile-divider"></div>

          <div className="footer-mobile-logo">
            <Image src="/footer_logo.png" alt="House of Dolphin" width={300} height={540} style={{width: '100%', height: 'auto', maxWidth: '300px'}} unoptimized />
          </div>
        </div>
      </div>
    </footer>
  );
}
