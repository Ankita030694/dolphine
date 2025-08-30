import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="roseate-header">
        {/* Background Image */}
        <div className="header-background">
          <Image
            src="/opening.jpg"
            alt="Dolphine Hotels & Resorts"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="overlay"></div>
        </div>

        {/* Header Content */}
        <header className="header-content">
          {/* Section 1: Primary Brand Mark */}
          <div className="brand-mark">
            <h1 className="brand-name">Dolphine</h1>
            <h2 className="brand-subtitle">HOTELS & RESORTS</h2>
          </div>

          {/* Section 2: Primary Navigation (Hotels & Resorts) */}
          <nav className="hotels-nav">
            <ul className="hotels-list">
              <li><a href="#Dolphine-new-delhi">Gifts by D'Mart</a></li>
              <li><a href="#Dolphine-house-delhi">Herbgen</a></li>
              <li><a href="#Dolphine-ganges-rishikesh">D'Mart Exclusif</a></li>
            </ul>
          </nav>
        </header>
      </div>

      {/* About Us Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Section 1: Page Title */}
          <h3 className="about-title">about</h3>
          
          {/* Section 2: Brand Name Heading */}
          <h2 className="about-brand-name">Dolphine HOTELS & RESORTS</h2>
          
          {/* Section 3: Body Text - Two Column Layout */}
          <div className="about-content">
            <div className="about-column">
              <p className="about-paragraph">
                Dolphine Hotels and Resorts is a collection of luxury hotels consisting of seven niche hotels across India and the United Kingdom with more under development. The name 'Dolphine' comes from the graceful marine mammal known for its intelligence and elegance. Avant-garde, imaginative and contemporary in design, each Dolphine hotel has a story to tell. Key focus is laid on immaculate hospitality and service, strategic location, bespoke design and architecture, aesthetics, exemplary dining and meticulous attention to detail.
              </p>
            </div>
            <div className="about-column">
              <p className="about-paragraph">
                In India the existing portfolio includes The Dolphine New Delhi, Dolphine House New Delhi and The Dolphine Ganges Rishikesh. In the United Kingdom, it includes Dolphine House London, The Dolphine Reading, The Dolphine Villa Bath and The Dolphine Edinburgh. Dolphine Hotels & Resorts is a brand of Bird Hospitality, Bird Group, India.
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
                Lorem ipsum dolor sit amet consectetur. Vel mattis vel quam at.
              </p>
            </div>
            
            {/* Middle Block */}
            <div className="usps-card">
              <div className="usps-icon usps-icon-green"></div>
              <h3 className="usps-card-title">Intellectual property</h3>
              <p className="usps-card-description">
                Lorem ipsum dolor sit amet consectetur. Vel mattis vel quam at.
              </p>
            </div>
            
            {/* Right Block */}
            <div className="usps-card">
              <div className="usps-icon usps-icon-pink"></div>
              <h3 className="usps-card-title">Compliance lawyer</h3>
              <p className="usps-card-description">
                Lorem ipsum dolor sit amet consectetur. Vel mattis vel quam at.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Experience Excellence</h2>
          <button className="cta-button">Get in touch</button>
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
                   alt="Yogesh Arora - Smartyields Agro Pvt Ltd"
                   className="avatar-image"
                   width={92}
                   height={92}
                 />
              </div>
              <h3 className="testimonial-name">Yogesh Arora</h3>
              <p className="testimonial-company">Smartyields Agro Pvt Ltd | Incorporation</p>
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
                  Lorem ipsum dolor sit amet consectetur. Leo vitae velit egestas purus quis. In adipiscing pulvinar facilisi posuere. Mauris faucibus vitae tristique varius ut pellentesque. Eleifend elit.
                </p>
              </div>
            </article>
            
            {/* Card 2 */}
            <article className="testimonial-card" tabIndex  ={0}>
              <div className="testimonial-avatar">
                                 <img 
                   src="/avatar-2.jpg" 
                   alt="Yogesh Arora - Smartyields Agro Pvt Ltd"
                   className="avatar-image"
                   width={92}
                   height={92}
                 />
              </div>
              <h3 className="testimonial-name">Yogesh Arora</h3>
              <p className="testimonial-company">Smartyields Agro Pvt Ltd | Incorporation</p>
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
                  Lorem ipsum dolor sit amet consectetur. Leo vitae velit egestas purus quis. In adipiscing pulvinar facilisi posuere. Mauris faucibus vitae tristique varius ut pellentesque. Eleifend elit.
                </p>
              </div>
            </article>
            
            {/* Card 3 */}
            <article className="testimonial-card" tabIndex  ={0}>
              <div className="testimonial-avatar">
                                 <img 
                   src="/avatar-3.jpg" 
                   alt="Yogesh Arora - Smartyields Agro Pvt Ltd"
                   className="avatar-image"
                   width={92}
                   height={92}
                 />
              </div>
              <h3 className="testimonial-name">Yogesh Arora</h3>
              <p className="testimonial-company">Smartyields Agro Pvt Ltd | Incorporation</p>
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
                  Lorem ipsum dolor sit amet consectetur. Leo vitae velit egestas purus quis. In adipiscing pulvinar facilisi posuere. Mauris faucibus vitae tristique varius ut pellentesque. Eleifend elit.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
