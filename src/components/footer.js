import React, { useState, useEffect } from 'react';
import logo from '../image/white_logo.png';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { BsCaretUpFill } from 'react-icons/bs';
import ReactCountryFlag from "react-country-flag";

// Define the base styles
const styles = {
  footer: {
    backgroundColor: '#2c2c2c',
    color: 'white',
    padding: '20px 120px',
    fontFamily: 'Arial, sans-serif',
  },
  footerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  column: {
    flex: '1',
    padding: '20px 10px',
    minWidth: '180px',
  },
  footerBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid white',
    paddingTop: '20px',
    flexWrap: 'nowrap',
  },
  footerlink: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '15px',
    marginTop: '20px',
  },
  socialIconBox: {
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '6px',
  },
  socialIcon: {
    color: '#2c2c2c',
    fontSize: '20px',
  },
  logo: {
    width: '250px',
    height: 'auto',
    marginRight: '20px',
    color: 'white',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px',
  },
  languageContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    bottom: '100%',
    left: 0,
    backgroundColor: 'white',
    color: '#2c2c2c',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    minWidth: '150px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    zIndex: 1000,
  },
  dropdownItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  flag: {
    marginRight: '10px',
  },
  footerText: {
    margin: 0,
  },
  footerColumnRow: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
  }
};

function Footer() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  const handleOptionClick = () => {
    setShowDropdown(false);
  };

  return (
    <footer style={styles.footer}>
      <div style={{ ...styles.footerTop, flexDirection: isMobile ? 'column' : 'row' }}>
        <div style={styles.column}>
          <img src={logo} alt="Hunter Goal Logo" style={styles.logo} />
          <p>Are you hunting for Something?</p>
          <p>Then Hunter goal is here to make sure you get what you are hunting for....</p>

          <div style={styles.socialLinks}>
            <div style={styles.socialIconBox}>
              <a href="https://www.facebook.com/huntergoaltechnologies" style={styles.socialIcon}><FaFacebook /></a>
            </div>
            <div style={styles.socialIconBox}>
              <a href="https://www.instagram.com/huntergoaltechnologies/" style={styles.socialIcon}><FaInstagram /></a>
            </div>
            <div style={styles.socialIconBox}>
              <a href="https://x.com/hunter_goa74281" style={styles.socialIcon}><FaTwitter /></a>
            </div>
            <div style={styles.socialIconBox}>
              <a href="https://www.linkedin.com/hunter-goal-opc-private-limited?_l=en_US" style={styles.socialIcon}><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {isMobile ? (
          <div style={styles.footerColumnRow}>
            <div style={styles.column}>
              <h4>Company</h4>
              <a href="/" style={styles.link}>About Us</a>
              <a href="/" style={styles.link}>Contact Us</a>
              <a href="/" style={styles.link}>Career</a>
            </div>
            <div style={styles.column}>
              <h4>Products</h4>
              <a href="/for-knowledge" style={styles.link}>Hunter Knowledge</a>
              <a href="/for-test"style={styles.link}>Hunter Test</a>
              <a href="/for-jobs" style={styles.link}>Hunter Jobs</a>
              <a href="/" style={styles.link}>Hunter HRMS</a>
            </div>
          </div>
        ) : (
          <>
            <div style={styles.column}>
              <h4>Company</h4>
              <a href="/" style={styles.link}>About Us</a>
              <a href="/" style={styles.link}>Contact Us</a>
              <a href="/" style={styles.link}>Career</a>
            </div>
            <div style={styles.column}>
              <h4>Products</h4>
              <a href="/for-knowledge" style={styles.link}>Hunter Knowledge</a>
              <a href="/for-test" style={styles.link}>Hunter Test</a>
              <a href="/for-jobs" style={styles.link}>Hunter Jobs</a>
              <a href="/" style={styles.link}>Hunter HRMS</a>
            </div>
          </>
        )}

        <div style={styles.column}>
          <h4>Community</h4>
          <a href="/" style={styles.link}>Partners</a>
          <a href="/" style={styles.link}>Press</a>
          <a href="/" style={styles.link}>Events</a>
        </div>

        <div style={styles.column}>
          <h4>Contact</h4>
          <p>Email: enquiry@huntergoal.com</p>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p style={styles.footerText}>©2023 Hunter Goal (OPC) Private Limited. Built by Hunter Goal.</p>
        <div style={styles.languageContainer}>
          <div onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/" style={styles.footerlink}>Language</a>
            <BsCaretUpFill style={{ color: 'white', marginLeft: '5px' }} />
          </div>

          {showDropdown && (
            <div style={styles.dropdown}>
              <div style={styles.dropdownItem} onClick={handleOptionClick}>
                <ReactCountryFlag countryCode="GB" svg style={{ width: '20px', height: '20px' }} title="English" />
                <span style={styles.flag}> English</span>
              </div>
            </div>
          )}

          <a href="/" style={styles.footerlink}>Terms of use</a>
          <a href="/" style={styles.footerlink}>Privacy policy</a>
          <a href="/" style={styles.footerlink}>Refund policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
