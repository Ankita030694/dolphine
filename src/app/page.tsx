'use client';

import Image from 'next/image';
import { useState } from 'react';

function PartnerStrip() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section 
      className="partner-strip"
      style={{
        background: '#1C3B4E',
        color: '#FFECDB',
        padding: isExpanded ? '3rem 2rem' : '1.5rem 2rem',
        transition: 'padding 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="partner-strip-container" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {!isExpanded ? (
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              minHeight: '60px',
            }}
            onClick={() => setIsExpanded(true)}
          >
            <h3 
              style={{
                fontSize: '2.5rem',
                fontWeight: '500',
                color: '#FFECDB',
                margin: 0,
                height: 'fit-content',
                fontFamily: 'Playfair Display',
              }}
            >
              Partner with us
            </h3>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(true);
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFECDB',
                cursor: 'pointer',
                fontSize: '2rem',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease',
              }}
              aria-label="Expand partner section"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 5V19M5 12H19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ) : (
          <>
            <button
              onClick={() => setIsExpanded(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '2rem',
                background: 'transparent',
                border: 'none',
                color: '#FFECDB',
                cursor: 'pointer',
                fontSize: '1.5rem',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}
              aria-label="Collapse partner section"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M5 12H19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '3rem',
                marginTop: '1rem',
              }}
            >
              <div style={{ flex: '1' }}>
                <h2 
                  style={{
                    fontSize: '3rem',
                    fontWeight: '500',
                    color: '#FFECDB',
                    marginBottom: '1.5rem',
                    marginTop: 0,
                  }}
                >
                  Partner with us
                </h2>
                <p 
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    color: '#FFECDB',
                    margin: 0,
                  }}
                >
                  Join the Dmart legacy: Become a House of Dolphin franchise partner and bring premium design to your city.
                </p>
              </div>
              <div style={{ flex: '1' }}>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle form submission here
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    style={{
                      padding: '0.75rem 0',
                      border: 'none',
                      borderBottom: '2px solid #FFECDB',
                      color: '#FFECDB',
                      fontSize: '1rem',
                      fontFamily: 'Poppins',
                      outline: 'none',
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    style={{
                      padding: '0.75rem 0',
                      border: 'none',
                      borderBottom: '2px solid #FFECDB',
                      color: '#FFECDB',
                      fontSize: '1rem',
                      fontFamily: 'Poppins',
                      outline: 'none',
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    required
                    style={{
                      padding: '0.75rem 0',
                      border: 'none',
                      borderBottom: '2px solid #FFECDB',
                      color: '#FFECDB',
                      fontSize: '1rem',
                      fontFamily: 'Poppins',
                      outline: 'none',
                    }}
                  />
                  <input
                    type="text"
                    placeholder="City"
                    required
                    style={{
                      padding: '0.75rem 0',
                      border: 'none',
                      borderBottom: '2px solid #FFECDB',
                      color: '#FFECDB',
                      fontSize: '1rem',
                      fontFamily: 'Poppins',
                      outline: 'none',
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Business type"
                    required
                    style={{
                      padding: '0.75rem 0',
                      border: 'none',
                      borderBottom: '2px solid #FFECDB',  
                      color: '#FFECDB',
                      fontSize: '1rem',
                      fontFamily: 'Poppins',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      display: 'flex',
                      padding: '14px 68px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '10px',
                      borderRadius: '151px',
                      border: '3px solid #FFECDB',
                      color: '#FFECDB',
                      fontSize: '1.2rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      marginTop: '0.5rem',
                    }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <div className="roseate-header">
        {/* Background Image */}
        <div className="header-background">
          <Image
            src="/img2.png"
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
            <h1
              className="brand-name"
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: '"Playfair Display"',
                fontSize: "50px",
                fontStyle: "italic",
                fontWeight: 500,
                lineHeight: "50px",
              }}
            >
              House Of Dolphine
            </h1>
          </div>

          {/* Section 2: Primary Navigation (Hotels & Resorts) */}
          <nav
            className="hotels-nav"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "50px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "15px 40px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "9px",
                background: "rgba(28, 59, 78, 0.60)",
                color: "#fff",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              Limited Editions
            </div>
            <div
              style={{
                display: "flex",
                padding: "15px 40px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "9px",
                background: "rgba(28, 59, 78, 0.60)",
                color: "#fff",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              Decorative &amp; Arts
            </div>
            <div
              style={{
                display: "flex",
                padding: "15px 40px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "9px",
                background: "rgba(28, 59, 78, 0.60)",
                color: "#fff",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              Decorative &amp; Functional Gifts
            </div>
            <div
              style={{
                display: "flex",
                padding: "15px 40px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "9px",
                background: "rgba(28, 59, 78, 0.60)",
                color: "#fff",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              Furniture
            </div>
          </nav>
        </header>
      </div>

      {/* About Us Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Section 1: Page Title */}
          <h3 className="about-title">about</h3>
          
          {/* Section 2: Brand Name Heading */}
          <h2 className="about-brand-name">House Of Dolphine</h2>
          
          {/* Section 3: Body Text - Two Column Layout */}
          <div className="about-content">
            <div className="about-column">
              <p className="about-paragraph">
                Welcome to the House of Dolphin, where every item tells a story of aspiration, artistry, and enduring quality. As a premier Home & Lifestyle brand, we embody our tagline: Dream - Desire - Design. We believe your living space should be a canvas for your personal journey, inspiring you daily.
                Born from the legacy of Dmart—our trusted mother brand—the House of Dolphin was established to curate exceptional design across every facet of the home. We are not just a retailer; we are a destination for those who seek to enrich their lives with beauty and functionality. From our Limited Editions and bespoke Furniture to our exquisite Decorative Arts and thoughtful Gifts, we empower you to design the life you've always desired.
              </p>
            </div>
            <div className="about-column">
              <h3 className="about-subheading">Our Unique Promise</h3>
              <p className="about-paragraph">
                We stand apart through our commitment to design integrity and craftsmanship: FROM THE DESIGNER'S HEART: Each piece is born from a deep passion for aesthetics and is meticulously developed by visionary designers. You receive originality, not imitation.
                THE TEAM: Our global network of artisans, craftspeople, and experts ensures that every product you bring home meets the highest standards of quality, ethical sourcing, and artistic execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with Us Expandable Strip */}
      <PartnerStrip />

      {/* Logo Strip Section */}
      <section 
        style={{
          backgroundColor: '#FFECDB',
          padding: '2rem 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            maxWidth: '1200px',
            width: '100%',
            flexWrap: 'wrap',
            paddingTop: '2rem',
            paddingBottom: '2rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <Image 
              src="/logo1.png" 
              alt="Logo 1" 
              width={80} 
              height={80} 
              style={{ objectFit: 'contain' }}
            />
            <p style={{ 
              margin: 0, 
              color: '#1C3B4E',
              textAlign: 'center',
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: '22px',
              textTransform: 'uppercase'
            }}>
              Silver Plating Gurantee
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <Image 
              src="/logo2.png" 
              alt="Logo 2" 
              width={80} 
              height={80} 
              style={{ objectFit: 'contain' }}
            />
            <p style={{ 
              margin: 0, 
              color: '#1C3B4E',
              textAlign: 'center',
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: '22px',
              textTransform: 'uppercase'
            }}>
              Authenticity Enclosieed
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <Image 
              src="/logo3.png" 
              alt="Logo 3" 
              width={80} 
              height={80} 
              style={{ objectFit: 'contain' }}
            />
            <p style={{ 
              margin: 0, 
              color: '#1C3B4E',
              textAlign: 'center',
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: '22px',
              textTransform: 'uppercase'
            }}>
              Certificate of origin
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <Image 
              src="/logo4.png" 
              alt="Logo 4" 
              width={80} 
              height={80} 
              style={{ objectFit: 'contain' }}
            />
            <p style={{ 
              margin: 0, 
              color: '#1C3B4E',
              textAlign: 'center',
              fontFamily: 'Poppins',
                fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: '22px',
              textTransform: 'uppercase'
            }}>
              Handcrafted
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <Image 
              src="/logo5.png" 
              alt="Logo 5" 
              width={80} 
              height={80} 
              style={{ objectFit: 'contain' }}
            />
            <p style={{ 
              margin: 0, 
              color: '#1C3B4E',
              textAlign: 'center',
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: '22px',
              textTransform: 'uppercase'
            }}>
              Official Warranty Included
            </p>
          </div>
        </div>
      </section>

      {/* Founders Note Section */}
      <section className="founders-note-section" style={{backgroundColor: "#FFECDB", marginTop: '-10rem'}}>
        <div className="founders-note-container">
          <div className="founders-note-content">
            {/* Left side - Image placeholder */}
            <div className="founders-note-image" style={{marginLeft: '-3.5rem'}}>
              <div className="founders-image-placeholder">
                <img src="/img1.png" alt="Founder Image" width={320} height={300} />

              </div>
            </div>
            
            {/* Right side - Text content */}
            <div className="founders-note-text">
              <h2 className="founders-note-title" style={{textAlign: "left", fontSize: "2rem", fontWeight: "300", color: "#333", marginBottom: "2rem"}}>A Note From Our Founders</h2>
              <div className="founders-note-quote">
                <p className="founders-quote-text">
                  Welcome to the House of Dolphin.
                </p>
                <p className="founders-quote-text">
                  We founded this brand on a simple, yet profound belief: that our homes should be the truest reflection of who we are. Every piece you find here—from a bold Limited Edition art piece to an enduring item of Furniture—is chosen to inspire you to Dream, Desire, and Design a life you love.
                </p>
                <p className="founders-quote-text">
                  We are driven by the enduring legacy of Dmart and committed to merging quality craftsmanship with visionary aesthetics. Thank you for inviting our designs into your home. We look forward to being a part of your story.
                </p>
              </div>
              <div className="founders-note-signature">
                <p className="founders-title">Founders, House of Dolphin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Hall of Fame: Customer Testimonials Section */}
      <section className="hall-of-fame-section" style={{marginTop: '-10rem'}}>
        <div className="hall-of-fame-container">
          <h2 className="hall-of-fame-title">
            Hall of Fame: <br /> Stories from Our Customers
          </h2>

          <div className="hall-of-fame-content">
            <div className="testimonials-carousel">
              <article className="testimonial-card-dark">
                <h3 className="testimonial-card-heading">
                  5/5 Stars | &quot;The Perfect Statement Piece&quot;
                </h3>
                <p className="testimonial-card-text">
                  I purchased a piece from the Limited Editions line, and it completely transformed my living room. The craftsmanship is flawless—it truly feels like a work of art. The quality is exceptional, and the delivery was handled with such care.&quot; <span className="testimonial-author">— Anika P., Mumbai</span>
                </p>
              </article>

              <article className="testimonial-card-dark">
                <h3 className="testimonial-card-heading">
                  5/5 Stars | &quot;Furniture Built to Last&quot;
                </h3>
                <p className="testimonial-card-text">
                  We finally upgraded our dining set with a piece from woodmart.in. It is stunning, robust, and exactly as described. The customer service team was helpful through the entire process, making our investment feel absolutely worthwhile.&quot; <span className="testimonial-author">— Rajesh K., Bangalore</span>
                </p>
              </article>

              <article className="testimonial-card-dark">
                <h3 className="testimonial-card-heading">
                  4/5 Stars | &quot;Thoughtful and Unique Gifts&quot;
                </h3>
                <p className="testimonial-card-text">
                  &quot;I always turn to giftsbydmart.com when I need something special. The decorative items are unique and feel much more personal than anything else on the market. They never fail to impress!&quot; <span className="testimonial-author">— Meera S., Delhi</span>
                </p>
              </article>

              <article className="testimonial-card-dark">
                <h3 className="testimonial-card-heading">
                  5/5 Stars | &quot;Truly a Home Design Partner&quot;
                </h3>
                <p className="testimonial-card-text">
                  &quot;From selecting the initial art print to choosing the final decor accents, the quality across all the House of Dolphin sub-brands is consistent. They truly embody the &apos;Dream - Desire - Design&apos; tagline. Highly recommend.&quot; <span className="testimonial-author">— Daniel T., Chennai</span>
                </p>
              </article>
            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
}
