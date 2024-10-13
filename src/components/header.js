import React, { useState } from 'react';
import logo from '../image/hunter_goal.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const styles = {
  header: {
    padding: '5px 50px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #eaeaea',
    marginBottom: '20px', // Space between header and navbar links
  },
  logo: {
    width: '300px',
    height: 'auto',
    marginRight: '20px', // Space between logo and Navbar.Toggle
  },
  navbarToggle: {
    marginLeft: '0', // Adjust as needed
  },
  navbarCollapse: {
    marginTop: '10px', // Space between header and collapsed navbar items
    marginLeft: '60px', // Pushes navbar links to the right
  },
  collapsedHeader: {
    backgroundColor: '#f8f9fa', // Different background for collapsed header
    transition: 'background-color 0.3s ease',
  },
  navLinkWithBorder: {
    paddingBottom: '10px',
    marginBottom: '10px',
    fontWeight:'bold',
  },
  navLinkWithoutBorder: {
    borderBottom: 'none', // No border on larger screens
    fontWeight:'bold',
  },

};

function Header() {
  const [expanded, setExpanded] = useState(false); // State to track collapse status

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <header style={expanded ? styles.collapsedHeader : styles.header}>
      <Container>
        <Navbar expand="lg" className="d-flex align-items-center" expanded={expanded}>
        <div style={{ flex: '40 40 auto' }}>
          <Link to="/">
            <img src={logo} alt="Hunter Goal Logo" style={styles.logo} />
          </Link>
        </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} style={styles.navbarToggle} />

          <Navbar.Collapse id="basic-navbar-nav" style={styles.navbarCollapse}>
            <Nav className="flex-column flex-lg-row">
              {/* Navbar links */}
              <Nav.Link as={Link} to="/for-knowledge" className="d-block d-lg-none" style={styles.navLinkWithBorder}>
                For Knowledge
              </Nav.Link>
              <Nav.Link as={Link} to="/for-knowledge" className="d-none d-lg-block" style={styles.navLinkWithoutBorder}>
                For Knowledge
              </Nav.Link>

              <Nav.Link as={Link} to="/for-test" className="d-block d-lg-none" style={styles.navLinkWithBorder}>
                For Test
              </Nav.Link>
              <Nav.Link as={Link} to="/for-test" className="d-none d-lg-block" style={styles.navLinkWithoutBorder}>
                For Test
              </Nav.Link>

              <Nav.Link as={Link} to="/for-jobs" className="d-block d-lg-none" style={styles.navLinkWithBorder}>
                For Jobs
              </Nav.Link>
              <Nav.Link as={Link} to="/for-jobs" className="d-none d-lg-block" style={styles.navLinkWithoutBorder}>
                For Jobs
              </Nav.Link>

              <Nav.Link as={Link} to="/for-college-universities" className="d-block d-lg-none" style={styles.navLinkWithBorder}>
                For College & Universities
              </Nav.Link>
              <Nav.Link as={Link} to="/for-college-universities" className="d-none d-lg-block" style={styles.navLinkWithoutBorder}>
                For College & Universities
              </Nav.Link>

              <Nav.Link as={Link} to="/for-instructors" className="d-block d-lg-none" style={styles.navLinkWithBorder}>
                For Instructors
              </Nav.Link>
              <Nav.Link as={Link} to="/for-instructors" className="d-none d-lg-block" style={styles.navLinkWithoutBorder}>
                For Instructors
              </Nav.Link>

              <Nav.Link as={Link} to="/for-enterprise" className="d-block d-lg-none" style={styles.navLinkWithBorder}>
                For Enterprise
              </Nav.Link>
              <Nav.Link as={Link} to="/for-enterprise" className="d-none d-lg-block" style={styles.navLinkWithoutBorder}>
                For Enterprise
              </Nav.Link>

              <Nav.Link as={Link} to="/for-login" className="d-block d-lg-none" style={styles.navLinkWithBorder}>
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/for-login" className="d-none d-lg-block" style={styles.navLinkWithoutBorder}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
