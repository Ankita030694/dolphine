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
      <section className="usps-section">
        <div className="usps-container">
          {/* Main Title */}
          <h2 className="usps-title">USP'S</h2>
          
          {/* Three Content Blocks */}
          <div className="usps-grid">
            {/* Left Block */}
            <div className="usps-card">
              <div className="usps-icon usps-icon-yellow"></div>
              <h3 className="usps-card-title">Immigration assistance</h3>
              <p className="usps-card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </p>
            </div>
            
            {/* Middle Block */}
            <div className="usps-card">
              <div className="usps-icon usps-icon-green"></div>
              <h3 className="usps-card-title">Intellectual property</h3>
              <p className="usps-card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent libero.
              </p>
            </div>
            
            {/* Right Block */}
            <div className="usps-card">
              <div className="usps-icon usps-icon-pink"></div>
              <h3 className="usps-card-title">Compliance lawyer</h3>
              <p className="usps-card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam.
              </p>
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
          <h2 id="testimonials-title" className="testimonials-title">What our customers says</h2>
          
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
