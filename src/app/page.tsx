import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="roseate-header">
        {/* Background Image */}
        <div className="header-background">
          <Image
            src="/herobg.jpeg"
            alt="Dolphine Hero Background"
            fill
            priority
            className="object-cover"
          />
          <div className="overlay"></div>
        </div>

        {/* Header Content */}
        <header className="header-content">
          {/* Section 1: Primary Brand Mark */}
          <div className="brand-mark">
            <h1 className="brand-name">Dolphine</h1>
          </div>

          {/* Section 2: Primary Navigation (Hotels & Resorts) */}
          <nav className="hotels-nav">
          <ul className="hotels-list"> <li><a href="#Dolphine-new-delhi">Gifts by D'Mart</a></li> <li><a href="#Dolphine-house-delhi">Herbgen</a></li> <li><a href="#Dolphine-ganges-rishikesh">D'Mart Exclusif</a></li> </ul>
          </nav>
        </header>
      </div>

      {/* About Us Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Section 1: Page Title */}
          <h3 className="about-title">about</h3>
          
          {/* Section 2: Brand Name Heading */}
          <h2 className="about-brand-name">Dolphine</h2>
          
          {/* Section 3: Body Text - Two Column Layout */}
          <div className="about-content">
            <div className="about-column">
              <p className="about-paragraph">
                Dolphine lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <div className="about-column">
              <p className="about-paragraph">
                In India the existing portfolio includes Dolphine New Delhi, Dolphine House New Delhi and The Dolphine Ganges Rishikesh. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USP's Section */}
      <section className="usps-section-clean">
        <div className="usps-container-clean">
          {/* Section Header */}
          <div className="usps-header-clean">
            <h2 className="usps-title-clean">Unique Selling Point</h2>
            <p className="usps-description-clean">
              A unique selling proposition (USP) refers to the unique benefit exhibited by a company, service, product or brand that enables it to stand out from competitors.
            </p>
            <button className="usps-cta-button">GET STARTED</button>
          </div>
          
          {/* Three Content Blocks */}
          <div className="usps-grid-clean">
            {/* Card 1 - Orange Background */}
            <div className="usps-card-clean usps-card-orange">
              <div className="usps-icon-clean">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15l-3-3h6l-3 3z" fill="currentColor"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="usps-card-title-clean">Automate Ecommerce Operations</h3>
              <p className="usps-card-description-clean" style={{color: "#666"}}>
                Sync Quick Books, Shopify, Amazon, eBay, and more for a complete picture of your business performance
              </p>
              <a href="#" className="usps-card-link">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z" fill="currentColor"/>
                </svg>
              </a>
            </div>
            
            {/* Card 2 - White Background */}
            <div className="usps-card-clean usps-card-white">
              <div className="usps-icon-clean usps-icon-orange">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="usps-card-title-clean">Accurate Accounting Automation</h3>
              <p className="usps-card-description-clean">
                Save time on data entry, improve productivity, and ensure keep accurate financials by connecting Shopify to Quikbooks.
              </p>
              <a href="#" className="usps-card-link usps-link-orange">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z" fill="currentColor"/>
                </svg>
              </a>
            </div>
            
            {/* Card 3 - White Background */}
            <div className="usps-card-clean usps-card-white">
              <div className="usps-icon-clean usps-icon-orange">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="usps-card-title-clean">Order Fulfilment Automation</h3>
              <p className="usps-card-description-clean">
                Increase customer satisfaction process orders faster, prevent stock-outs, and easily access historical records.
              </p>
              <a href="#" className="usps-card-link usps-link-orange">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Experience Excellence</h2>
          <button className="cta-button">Lorem ipsum dolor</button>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="testimonials-section" aria-labelledby="testimonials-title">
        <div className="testimonials-container">
          {/* Main Title */}
          <h2 id="testimonials-title" className="testimonials-title" style={{textAlign: "center", fontSize: "2.5rem", fontWeight: "300", color: "#333", marginBottom: "2rem"}}>What our customers says</h2>
          
          {/* Three Testimonial Cards */}
          <div className="testimonials-grid">
            {/* Card 1 */}
            <article className="testimonial-card" tabIndex ={0}>
              <div className="testimonial-avatar">
                                 <img 
                   src="/avatar-1.jpg" 
                   alt="Lorem ipsum avatar"
                   className="avatar-image"
                   width={92}
                   height={92}
                 />
              </div>
              <h3 className="testimonial-name">Yogesh Arora</h3>
              <p className="testimonial-company">Lorem ipsum dolor sit amet</p>
              <div className="testimonial-rating" role="img" aria-label="5 out of 5 stars">
                <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="testimonial-divider"></div>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </p>
              </div>
            </article>
            
            {/* Card 2 */}
            <article className="testimonial-card" tabIndex  ={0}>
              <div className="testimonial-avatar">
                                 <img 
                   src="/avatar-2.jpg" 
                   alt="Lorem ipsum avatar"
                   className="avatar-image"
                   width={92}
                   height={92}
                 />
              </div>
              <h3 className="testimonial-name">Yogesh Arora</h3>
              <p className="testimonial-company">Lorem ipsum dolor sit amet</p>
              <div className="testimonial-rating" role="img" aria-label="5 out of 5 stars">
                <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="testimonial-divider"></div>
              <div className="testimonial-content">
                <span className="quote-mark" aria-hidden="true">"</span>
                <p className="testimonial-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </p>
              </div>
            </article>
            
            {/* Card 3 */}
            <article className="testimonial-card" tabIndex  ={0}>
              <div className="testimonial-avatar">
                                 <img 
                   src="/avatar-3.jpg" 
                   alt="Lorem ipsum avatar"
                   className="avatar-image"
                   width={92}
                   height={92}
                 />
              </div>
              <h3 className="testimonial-name">Yogesh Arora</h3>
              <p className="testimonial-company">Lorem ipsum dolor sit amet</p>
              <div className="testimonial-rating" role="img" aria-label="5 out of 5 stars">
                <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="testimonial-divider"></div>
              <div className="testimonial-content">
                <span className="quote-mark" aria-hidden="true">"</span>
                <p className="testimonial-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
