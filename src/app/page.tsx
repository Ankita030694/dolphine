'use client';

import Image from 'next/image';
import Script from 'next/script';
import { useState } from 'react';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Blurred Background Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 999,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}

      {/* Hamburger Button - Mobile Only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          top: '1.5rem',
          right: '1.5rem',
          zIndex: 1001,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          padding: '0.5rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className="mobile-hamburger"
        aria-label="Toggle menu"
      >
        {!isOpen ? (
          <>
            <span
              style={{
                width: '28px',
                height: '3px',
                background: '#FFECDB',
                transition: 'all 0.3s ease',
              }}
            />
            <span
              style={{
                width: '28px',
                height: '3px',
                background: '#FFECDB',
                transition: 'all 0.3s ease',
              }}
            />
            <span
              style={{
                width: '28px',
                height: '3px',
                background: '#FFECDB',
                transition: 'all 0.3s ease',
              }}
            />
          </>
        ) : (
          <span
            style={{
              color: '#FFFFFF',
              fontSize: '2rem',
              fontWeight: 300,
              lineHeight: 1,
            }}
          >
            ×
          </span>
        )}
      </button>

      {/* Mobile Menu Sidebar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: isOpen ? '70%' : '0',
          height: '100vh',
          background: '#1C3B4E',
          zIndex: 1000,
          transition: 'width 0.3s ease',
          overflow: 'hidden',
          borderTopLeftRadius: '24px',
          borderBottomLeftRadius: '24px',
          boxShadow: isOpen ? '-4px 0 20px rgba(0, 0, 0, 0.3)' : 'none',
        }}
        className="mobile-nav-overlay"
      >
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            padding: '4rem 2rem 2rem 2rem',
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.2s ease 0.1s',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Navigation Links */}
            <span
              style={{
                color: '#FFECDB',
                fontSize: '1.25rem',
                fontWeight: 400,
                fontFamily: 'Poppins, sans-serif',
                padding: '0.75rem 0',
              }}
            >
              God by Dmart
            </span>
            <a
              href="https://www.giftsbydmart.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              style={{
                color: '#FFECDB',
                textDecoration: 'none',
                fontSize: '1.25rem',
                fontWeight: 400,
                fontFamily: 'Poppins, sans-serif',
                padding: '0.75rem 0',
                transition: 'opacity 0.3s ease',
              }}
            >
              Gifts by Dmart (Iota)
            </a>
            <a
              href="https://www.decorbydmart.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              style={{
                color: '#FFECDB',
                textDecoration: 'none',
                fontSize: '1.25rem',
                fontWeight: 400,
                fontFamily: 'Poppins, sans-serif',
                padding: '0.75rem 0',
                transition: 'opacity 0.3s ease',
              }}
            >
              Décor by Dmart (Argentario)
            </a>
            <a
              href="https://linktr.ee/Woodmartexclusif?utm_source=linktree_profile_share&ltsid=0810208b-ce34-4548-8a48-bfce2a04468b"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              style={{
                color: '#FFECDB',
                textDecoration: 'none',
                fontSize: '1.25rem',
                fontWeight: 400,
                fontFamily: 'Poppins, sans-serif',
                padding: '0.75rem 0',
                transition: 'opacity 0.3s ease',
                whiteSpace: 'normal',
              }}
            >
              Furniture by Dmart (Woodmart)
            </a>
          </div>

          {/* House of Dolphin Text at Bottom */}
          <div
            style={{
              marginTop: 'auto',
              paddingTop: '2rem',
            }}
          >
            <h2
              style={{
                color: '#FFECDB',
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.5rem',
                fontStyle: 'italic',
                fontWeight: 400,
                margin: 0,
                textAlign: 'left',
              }}
            >
              House of Dolphin
            </h2>
          </div>
        </nav>
      </div>
    </>
  );
}

function PartnerStrip() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    businessType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Replace this URL with your Google Apps Script Web App URL
  // See instructions below on how to get this URL
  const GOOGLE_SCRIPT_URL = process.env.SCRIPT_URL_SHEET || '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Reset status when user starts typing
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!GOOGLE_SCRIPT_URL) {
      setSubmitStatus('error');
      setErrorMessage('Form submission is not configured. Please contact the administrator.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      // With no-cors mode, we can't read the response, so assume success
      // The form data will still be sent to Google Sheets
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        businessType: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to submit form. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="partner-strip"
      style={{
        background: '#1C3B4E',
        color: '#FFECDB',
        padding: '3rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="partner-strip-container" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div 
          className="partner-strip-expanded"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '3rem',
            marginTop: '1rem',
          }}
        >
          <div className="partner-strip-content" style={{ flex: '1' }}>
            <h2 
              className="partner-strip-title-expanded"
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
              className="partner-strip-description"
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
          <div className="partner-strip-form-wrapper" style={{ flex: '1' }}>
            <form 
              className="partner-strip-form"
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="partner-strip-input"
                style={{
                  padding: '0.75rem 0',
                  border: 'none',
                  borderBottom: '2px solid #FFECDB',
                  color: '#FFECDB',
                  fontSize: '1rem',
                  fontFamily: 'Poppins',
                  outline: 'none',
                  background: 'transparent',
                  opacity: isSubmitting ? 0.6 : 1,
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="partner-strip-input"
                style={{
                  padding: '0.75rem 0',
                  border: 'none',
                  borderBottom: '2px solid #FFECDB',
                  color: '#FFECDB',
                  fontSize: '1rem',
                  fontFamily: 'Poppins',
                  outline: 'none',
                  background: 'transparent',
                  opacity: isSubmitting ? 0.6 : 1,
                }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="partner-strip-input"
                style={{
                  padding: '0.75rem 0',
                  border: 'none',
                  borderBottom: '2px solid #FFECDB',
                  color: '#FFECDB',
                  fontSize: '1rem',
                  fontFamily: 'Poppins',
                  outline: 'none',
                  background: 'transparent',
                  opacity: isSubmitting ? 0.6 : 1,
                }}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="partner-strip-input"
                style={{
                  padding: '0.75rem 0',
                  border: 'none',
                  borderBottom: '2px solid #FFECDB',
                  color: '#FFECDB',
                  fontSize: '1rem',
                  fontFamily: 'Poppins',
                  outline: 'none',
                  background: 'transparent',
                  opacity: isSubmitting ? 0.6 : 1,
                }}
              />
              <input
                type="text"
                name="businessType"
                placeholder="Business type"
                value={formData.businessType}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="partner-strip-input"
                style={{
                  padding: '0.75rem 0',
                  border: 'none',
                  borderBottom: '2px solid #FFECDB',  
                  color: '#FFECDB',
                  fontSize: '1rem',
                  fontFamily: 'Poppins',
                  outline: 'none',
                  background: 'transparent',
                  opacity: isSubmitting ? 0.6 : 1,
                }}
              />
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div style={{ 
                  color: '#4ade80', 
                  fontSize: '0.9rem', 
                  marginTop: '-0.5rem',
                  fontFamily: 'Poppins',
                }}>
                  ✓ Thank you! Your submission has been received.
                </div>
              )}
              {submitStatus === 'error' && (
                <div style={{ 
                  color: '#f87171', 
                  fontSize: '0.9rem', 
                  marginTop: '-0.5rem',
                  fontFamily: 'Poppins',
                }}>
                  {errorMessage || 'An error occurred. Please try again.'}
                </div>
              )}

              <button
                type="submit"
                className="partner-strip-submit-btn"
                disabled={isSubmitting}
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
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  marginTop: '0.5rem',
                  opacity: isSubmitting ? 0.6 : 1,
                  background: 'transparent',
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      {/* Mobile Navigation */}
      <MobileNav />
      
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
              House Of Dolphin
            </h1>
          </div>

          {/* Section 2: Primary Navigation (Hotels & Resorts) - Desktop Only */}
          <nav
            className="hotels-nav desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "50px",
              flexWrap: "nowrap",
              whiteSpace: "nowrap",
            }}
          >
            <span
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
                whiteSpace: "nowrap",
              }}
            >
              God by Dmart
            </span>
            <a
              href="https://www.giftsbydmart.com"
              target="_blank"
              rel="noopener noreferrer"
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
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Gifts by Dmart (Iota)
            </a>
            <a
              href="https://www.decorbydmart.com"
              target="_blank"
              rel="noopener noreferrer"
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
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Décor by Dmart (Argentario)
            </a>
            <a
              href="https://linktr.ee/Woodmartexclusif?utm_source=linktree_profile_share&ltsid=0810208b-ce34-4548-8a48-bfce2a04468b"
              target="_blank"
              rel="noopener noreferrer"
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
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Furniture by Dmart (Woodmart)
            </a>
          </nav>
        </header>
      </div>

      {/* About Us Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Section 1: Page Title */}
          <h3 className="about-title">about</h3>
          
          {/* Section 2: Brand Name Heading */}
          <h2 className="about-brand-name">Home & Lifestyle Brand</h2>
          
          {/* Section 3: Body Text - Two Column Layout */}
          <div className="about-content">
            <div className="about-column">
              <p className="about-paragraph">
                Welcome to Dmart Exclusif – your trusted destination for luxury spiritual and lifestyle products. We offer a thoughtfully curated collection that blends traditional craftsmanship with modern elegance, featuring handcrafted god idols, premium home décor, festive accessories, and exclusive gifting solutions.
              </p>
              <p className="about-paragraph">
                Each piece is chosen for its cultural significance, artisanal value, and lasting beauty. Whether you’re enhancing a sacred space or marking a special occasion, Dmart Exclusif ensures that divinity and design seamlessly enrich your everyday life.
              </p>
            </div>
            <div className="about-column">
              <h3 className="about-subheading">Our Heritage & Commitment</h3>
              <p className="about-paragraph">
                Rooted in India’s rich heritage and inspired by timeless traditions, Dmart Exclusif is dedicated to authenticity, quality, and customer delight. Our commitment is reflected in our handpicked selection and thoughtful service. 
              </p>
              <p className="about-paragraph">
                We strive to deliver an unparalleled online experience — from effortless browsing to trusted delivery. Join us in discovering the art of meaningful living, one exquisite piece at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with Us Expandable Strip */}
      <PartnerStrip />

      {/* Logo Strip Section */}
      <section 
        className="logo-strip-section"
        style={{
          backgroundColor: '#FFECDB',
          padding: '2rem 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div 
          className="logo-strip-container"
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
          <div className="logo-strip-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
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
          <div className="logo-strip-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
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
          <div className="logo-strip-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
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
          <div className="logo-strip-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
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
          <div className="logo-strip-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
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
                <img src="/img1.png" alt="Founder Image" width={800} height={800} style={{maxWidth: '120%', maxHeight: '120%'}} />

              </div>
            </div>
            
            {/* Right side - Text content */}
            <div className="founders-note-text" style={{marginTop: '8rem'}}>
              <h2
                className="founders-note-title"
                style={{
                  textAlign: "left",
                  fontSize: "2rem",
                  fontWeight: "300",
                  color: "#333",
                  marginBottom: "2rem",
                }}
              >
                Founder’s Note
              </h2>
              <div className="founders-note-quote">
                <p className="founders-quote-text">
                  Welcome to a realm where artistic luxury meets refined living. Our destination is dedicated to helping you discover, experience, and acquire the very finest in international art, designer furniture, rare collectibles, and curated home décor. Each piece showcased in our collection is not just a product—it is a statement of craftsmanship and a story of culture.
                </p>
                <p className="founders-quote-text">
                  We partner with esteemed brands, world-class galleries, visionary artists, and renowned design houses to bring together a selection that is truly unparalleled. Every item is meticulously conceptualized and curated to ensure it stands out for exceptional quality, timeless aesthetics, and bold creativity.
                </p>
                <p className="founders-quote-text">
                  Our mission is to create an inspiring space where art and design enthusiasts can explore extraordinary treasures, embark on new journeys of discovery, and find pieces that elevate their environments. We invite you to immerse yourself in our world of excellence, where your pursuit of beauty and distinction finds its perfect expression.
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
      <Script 
        src="https://elfsightcdn.com/platform.js" 
        strategy="lazyOnload"
      />
      <section className="hall-of-fame-section">
        <div className="hall-of-fame-container">
          <h2 className="hall-of-fame-title">
            Hall of Fame: <br /> Stories from Our Customers
          </h2>

          <div className="hall-of-fame-content">
            <div 
              className="elfsight-app-dbccfea4-5473-4d05-80b6-cb94077aa339" 
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </section>
    </div>
  );
}
