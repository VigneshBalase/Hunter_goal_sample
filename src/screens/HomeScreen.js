import React, { useState } from 'react';
import axios from 'axios';
import VerifiedIcon from '@mui/icons-material/Verified';
import svg1 from '../image/19.svg';
import svg2 from '../image/22.png';
import svg3 from '../image/23.png';
import svg4 from '../image/25.png';

const styles = {
  mainSection: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '50px',
    backgroundColor: '#284259',
    height: '65vh'
  },
  leftSide: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft:"60px",
  },
  rightSide: {
    position: 'absolute',
    top: '60%',
    right: '120px',
    transform: 'translateY(-50%)',
    backgroundColor: 'white',
    padding: '30px', // Keep existing padding
    width: '33%', // Keep existing width
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    zIndex: '10',
    minHeight: '200px', // Keep existing minimum height
    paddingRight: '20px', // Added padding on the right side
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginRight: '20px', // Add margin to create space from the right
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    appearance: 'none',
  },
  submitButton: {
    padding: '10px',
    backgroundColor: '#000',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
  },
  servicesSection: {
    padding: '50px',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
    marginTop: '160px', // Adjust this value as needed for spacing
  },
  services: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px', // Decreased gap between cards (adjust as needed)
  },
  serviceCard: {
    width: '25%',
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    height: '350px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: '10px', // Adjust margin bottom if needed
  },
  getStartedBtn: {
    marginTop: '40px',
    padding: '10px 10px',
    backgroundColor: 'white',
    color: '#007bff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    width: '200px',
    maxWidth: '300px',
    '&:hover': {
      backgroundColor: '#e7f1ff',
      color: '#0056b3',
    },
  },
  heading: {
    fontSize: '44px', // Increase size to 64px
    fontWeight: 'bold', // Make it bold
    color: 'white', // Dark color for contrast
    margin: '10px 0', // Margin around the heading
  },
  formheader: {
    fontSize: '18px', // Increase size to 64px
    fontWeight: 'bold', // Make it bold
    color: 'black', // Dark color for contrast
    margin: '10px 0', // Margin around the heading
  },
  titlename:
  {
    color:'white',
  },
  serviceheading: {
    fontWeight: 'bold', // Make all headings bold
    fontSize: '30px', // Adjust font size if needed
  },

  span: {
        fontSize: '0.8rem', // Adjust this size as needed
    },

    knowmoreBtn: {
    marginTop: '20px',
    padding: '10px 10px',
    backgroundColor: '#1c3a53',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    width: '150px',
    maxWidth: '300px',
    '&:hover': {
      backgroundColor: '#e7f1ff',
      color: '#0056b3',
    },
  },
};


function MainSection() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    enquiryRegarding: 'Knowledge',
  });

  // State for form submission status
  const [status, setStatus] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request with form data
      const response = await axios.post('https://your-server-url.com/api/enquiry', formData);
      setStatus('Enquiry submitted successfully!');
      console.log(response.data);
    } catch (error) {
      setStatus('Error submitting enquiry.');
      console.error(error);
    }
  };

  return (
    <section style={styles.mainSection}>
      <div style={styles.leftSide}>
        <button style={styles.getStartedBtn}>Get started with Hunter</button>
        <h2 style={styles.heading}>Are you hunting for Something?</h2>
        <p style={styles.titlename}>
          Revolutionize your journey with the world’s most advanced AI-driven platform
          for learning, testing, job search, and HRMS Tool.
        </p>
      </div>

      {/* RightSide is now positioned absolutely outside the main section */}
      <div style={styles.rightSide}>
        <h2 style={styles.formheader}>Get Enquired Today..!</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Enquiry Regarding</label>
          <select
            name="enquiryRegarding"
            value={formData.enquiryRegarding}
            onChange={handleInputChange}
            style={styles.select}
            required
          >
            <option value="Knowledge">Knowledge</option>
            <option value="Jobs">Jobs</option>
            <option value="HRMS">HRMS</option>
          </select>

          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section style={styles.servicesSection}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={styles.serviceheading}>Services that you need to know</h2>
        <p>
          World’s most powerful AI-driven learning platform, Test platform, Jobs search platform & Human Resource System.
        </p>
      </div>
      <div style={styles.services}>
        <div style={styles.serviceCard}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src={svg1} alt="" style={{ width: '20%', height: '80%', marginRight: '10px', borderRadius: '5px' }} />
    <h3 style={{ margin: 0, ...styles.formheader }}>Hunter Knowledge</h3>
  </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Online and Offline Classes.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Recorded Videos.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Courses and Workshops.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Live Projects and Hackathons.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Mock Interviews & Assessments.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Practice Tests.</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button style={styles.knowmoreBtn}>Know More Now!</button>
          </div>
        </div>

        {/* Hunter Test Service Card */}
        <div style={styles.serviceCard}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={svg2} alt="" style={{ width: '20%', height: '80%', marginRight: '10px', borderRadius: '5px' }} />
            <h3 style={{ margin: 0, ...styles.formheader }}>Hunter Test</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Explore Psychometric Test.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Explore Coding Test.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Explore Behavioral Test.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Explore Domain Test.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Explore Aptitude Test.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Explore Communication Skills Test.</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button style={styles.knowmoreBtn}>Know More Now!</button>
          </div>
        </div>

        {/* Hunter Jobs Service Card */}
        <div style={styles.serviceCard}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={svg3} alt="" style={{ width: '20%', height: '100%', marginRight: '10px', borderRadius: '5px' }} />
            <h3 style={{ margin: 0, ...styles.formheader }}>Hunter Jobs</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Freelancing.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Internships.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Part-Time & Full-Time.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Night Shift Jobs.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Work From Home.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>International Jobs.</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button style={styles.knowmoreBtn}>Know More Now!</button>
          </div>
        </div>

        {/* Hunter HRMS Service Card */}
        <div style={styles.serviceCard}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={svg4} alt="Hunter HRMS" style={{ width: '20%', height: '80%', marginRight: '10px', borderRadius: '5px' }} />
            <h3 style={{ margin: 0, ...styles.formheader }}> HRMS</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Payroll & Expenses.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Time & Attendance.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Performance & Culture.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Modern HR.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Project Timesheet.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedIcon fontSize='0.8rem' style={{ marginRight: '3px' }} />
              <span style={styles.span}>Hiring & Onboarding.</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button style={styles.knowmoreBtn}>View Demo!</button>
          </div>
        </div>
      </div>
    </section>
  );
}


function HomeScreen() {
  return (
    <div>
      <MainSection />
      <ServicesSection />
    </div>
  );
}

export default HomeScreen;
