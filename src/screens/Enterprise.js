import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Img1 from '../image/3.png';
import Img2 from '../image/4.png';
import Img3 from '../image/5.png';
import Img4 from '../image/6.png';
import Img5 from '../image/7.png';
import Img6 from '../image/8.png';
import Img7 from '../image/9.png';
import Img8 from '../image/10.png';



function MainSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });

  const [status, setStatus] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isCheckboxChecked) {
      setStatus('Please accept the terms and conditions.');
      return;
    }

    try {
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
        <h2 style={styles.heading}>Hire Interns & Freshers Faster Post Internships for Free Now</h2>
      </div>

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

          <label style={styles.label}>Office Email ID </label>
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

          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            style={styles.input}
            required
          />

          {/* Checkbox for terms */}
          <div style={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
              style={styles.checkbox}
            />
            <label htmlFor="terms" style={styles.checkboxLabel}>By signing up, you agree to the terms of service</label>
          </div>

          <button
            type="submit"
            style={isCheckboxChecked ? styles.submitButton : styles.disabledSubmitButton}
            disabled={!isCheckboxChecked}
          >
            Submit
          </button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </section>
  );
}

function StatsSection() {
  const [candidates, setCandidates] = useState(0);
  const [hiredCandidates, setHiredCandidates] = useState(0);
  const [jobProfiles, setJobProfiles] = useState(0);
  const [companies, setCompanies] = useState(0);

  useEffect(() => {
    // Increase candidates count from 0 to 10 Mn+
    const candidatesInterval = setInterval(() => {
      setCandidates((prev) => {
        if (prev < 10) {
          return prev + 0.1; // Increase by 0.1 for a smoother transition
        } else {
          clearInterval(candidatesInterval);
          return 10;
        }
      });
    }, 50);

    // Increase hiredCandidates count from 0 to 1 Mn+
    const hiredInterval = setInterval(() => {
      setHiredCandidates((prev) => {
        if (prev < 1) {
          return prev + 0.01; // Increment by 0.01 for smoother transition
        } else {
          clearInterval(hiredInterval);
          return 1;
        }
      });
    }, 50);

    // Increase jobProfiles count from 0 to 100+
    const jobProfilesInterval = setInterval(() => {
      setJobProfiles((prev) => {
        if (prev < 100) {
          return prev + 1; // Increment by 1
        } else {
          clearInterval(jobProfilesInterval);
          return 100;
        }
      });
    }, 50);

    // Increase companies count from 0 to 250+
    const companiesInterval = setInterval(() => {
      setCompanies((prev) => {
        if (prev < 250) {
          return prev + 2.5; // Increment by 2.5
        } else {
          clearInterval(companiesInterval);
          return 250;
        }
      });
    }, 50);

    // Clear intervals on component unmount
    return () => {
      clearInterval(candidatesInterval);
      clearInterval(hiredInterval);
      clearInterval(jobProfilesInterval);
      clearInterval(companiesInterval);
    };
  }, []);

  return (
    <div>
      <div style={styles.programHeader}>
          <h1 style={styles.programTitle}>Why Hire from Hunter Goal?</h1>
          <p style={styles.programDescription}>
          Post your intern requirements and build your dream team with ease.
          </p>
      </div>
    
    <div style={styles.statsContainer}>
      
      <div style={styles.waveBackground}></div>
      <div style={styles.statItem}>
        <h1 style={styles.statNumber}>{candidates.toFixed(1)} Mn+</h1>
        <p style={styles.statDescription}>candidates looking for Internships</p>
      </div>
      <div style={styles.statItem}>
        <h1 style={styles.statNumber}>{hiredCandidates.toFixed(2)} Mn+</h1>
        <p style={styles.statDescription}>candidates hired PAN India</p>
      </div>
      <div style={styles.statItem}>
        <h1 style={styles.statNumber}>{Math.round(jobProfiles)}+</h1>
        <p style={styles.statDescription}>Job Profiles</p>
      </div>
      <div style={styles.statItem}>
        <h1 style={styles.statNumber}>{Math.round(companies)}+</h1>
        <p style={styles.statDescription}>Companies Hiring on Hunter Goal</p>
      </div>
    </div>
    </div>
  );
}

const styles = {
  mainSection: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '50px',
    backgroundColor: '#284259',
    height: '50vh',
  },

  programHeader: {
    width: '60%',
    textAlign: 'left', // Align title and description to the left
    padding: '130px',
    marginRight:'-80px',
    marginTop:'240px',
  },
  programTitle: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  leftSide: {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '60px',
  },
  rightSide: {
    position: 'absolute',
    top: '58%',
    right: '130px',
    transform: 'translateY(-50%)',
    backgroundColor: 'white',
    padding: '30px',
    width: '33%',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    zIndex: '10',
    minHeight: '200px',
    paddingRight: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginRight: '20px',
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
  submitButton: {
    padding: '10px',
    backgroundColor: '#000',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
  },
  disabledSubmitButton: {
    padding: '10px',
    backgroundColor: '#999', // Lighter color to indicate disabled state
    color: 'white',
    border: 'none',
    cursor: 'not-allowed',
    borderRadius: '5px',
    fontSize: '16px',
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
  },
  heading: {
    fontSize: '44px',
    fontWeight: 'bold',
    color: 'white',
    margin: '10px 0',
  },
  formheader: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'black',
    margin: '10px 0',
  },
  titlename: {
    color: 'white',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: '10px',
  },
  checkboxLabel: {
    fontSize: '14px',
    color: '#333',
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#fff6ed", // Soft peach background
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative",
    width: "85%", // Set width to 80%
    margin: "0 auto", // Center horizontally
    marginTop:"-120px",
    marginBottom:"30px",
  },
    statItem: {
      textAlign: "center",
      flex: 1,
      padding: "20px",
    },
    statNumber: {
      fontSize: "3rem",
      color: "#ff7d00", // Bright orange color
      margin: 0,
    },
    statDescription: {
      fontSize: "1rem",
      color: "#555",
      marginTop: "10px",
    },
    waveBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: "url('https://www.svgrepo.com/show/30903/wave.svg')", // Replace with your SVG wave
      backgroundSize: "cover",
      opacity: 0.1,
      pointerEvents: "none",
    },
};


const CollegeAuthority = {
  container: {
    justifyContent: 'flex-end',
    padding: '20px',
    alignItems: 'flex-start',
  },
  header: {
    width: '80%',
    textAlign: 'left', // Align title and description to the left
    padding: '40px',
    marginLeft:'80px',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    fontWeight: 'bold',
    marginRight:'-20px',
  },
  description: {
    fontSize: '1.2rem',
    color: '#666',
  },
  accordion: {
    width: '83%',
    margin: '0 auto',
    textAlign: 'left',
    marginLeft:'140px',
  },
  accordionItem: {
    backgroundColor: '#f4f7f8',
    border: '1px solid #fff',
    borderRadius: '8px',
    marginBottom: '10px',
    padding: '14px',
  },
  accordionTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.0rem',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  accordionContent: {
    fontSize: '1rem',
    color: '#555',
    marginTop: '-10px',
    padding: '10px',
    backgroundColor: '#fff',
    border: '1px solid #fff',
    borderRadius: '8px',
    transition: 'max-height 0.3s ease-in-out',
  },
};


const CompaniesAuthorityScreen = () => {
  // State to handle accordion open/close
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={CollegeAuthority.container}>
      {/* Section Title */}
      <div style={CollegeAuthority.header}>
        <h1 style={CollegeAuthority.title}>Frequently Asked By Companies</h1>
      </div>

      {/* Accordion Section */}
      <div style={CollegeAuthority.accordion}>
        {CompaniesAuthorityItems.map((item, index) => (
          <div key={index}>
            {/* Accordion Item */}
            <div style={CollegeAuthority.accordionItem}>
              <div
                style={CollegeAuthority.accordionTitle}
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.title}</span>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>
            </div>

            {/* Accordion Content */}
            {activeIndex === index && (
              <div style={CollegeAuthority.expandedContent}>
                <div style={CollegeAuthority.accordionContent}>
                  {item.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Accordion items data for CollegeAuthorityScreen
const CompaniesAuthorityItems = [
  {
    title: 'What is the process of hiring from Hunter Goal?',
    content: 'Hiring quality candidates for your company from Hunter Goal is easy and free. Simply post your job requirement on Hunter Goal. Your listing will be live on our platform shortly after it is reviewed by our team of experts. You will start receiving applications within a few hours. Post that you can shortlist, interview, and extend offer letters to the candidates you like.',
  },
  {
    title: 'Can I post jobs for free on Hunter Goal?',
    content: 'Yes, you can post 1 free internship or job listing in a month. If you want to post unlimited job/internship listings to accelerate your hiring process you can opt for our premium plan. If you are an international employer(i.e. employers whose companies are based outside India) you can sign up for our free trial which will allow you to post 1 free internship/job listing in the lifetime. You will also get access to all our premium features, our world-class ATS, a dedicated relationship manager, and more with the free trial which is valid for 30 days. You can purchase the premium plan to post unlimited jobs/internships to hire quality candidates with ease.',
  },
  {
    title: 'For how many days is a job listing visible on the portal, after I post a job?',
    content: 'Any job listing is visible for 30 days. The visibility of a job listing can further be extended for 15 days based on the requirement.',
  },
  {
    title: 'Can I hire candidates from any city in India?',
    content: 'Yes, you can Post Jobs for free and hire candidates from any location in India on Hunter Goal.',
  },
  {
    title: 'Can I hire candidates for any profile on Hunter Goal?',
    content: 'Yes, you can hire candidates for 200+ profiles on our platform. Hunter Goal is trusted by job seekers from every domain, residing across the nation, to find internships as well as fresher jobs. So, when you post job requirements on our platform, you can gain access to a pool of interns and freshers from diverse fields',
  },

  {
    title: 'Do all job listings follow a character word limit?',
    content: 'Yes, all the job listings follow a character limit. Always remember that when you post jobs, the job description can not be more than 2500 characters',
  },

  {
    title: 'How can I remove a job that I have posted?',
    content: "Once you post jobs online through Hunter Goal, the listing can be closed but it can not be removed. When a listing is closed, it won't be visible to anyone but the employer, on their Hunter Goal account",
  },
  {
    title: 'How do you ensure responses for job listings?',
    content: "OAfter you post a job, we add relevant categories to your job listings so that they can be visible to the maximum number of students available on the platform.",
  },
  {
    title: 'How can I hire a lot of employees quickly?',
    content: "To hire interns or to hire freshers quickly, you can post a premium job. A premium job post will grant you access to a relationship manager who will assist you with the hiring process.",
  },
  {
    title: 'How is Hunter Goal better than other free job listing sites?',
    content: "Hunter Goal has a pool of more than 6 million students registered on the platform who are seeking job opportunities. Further, Hunter Goal provides you with a hassle-free process of hiring, along with many advanced filters that can help you hire freshers or hire interns quickly and efficiently. For more information, you may reach out to us at employer@huntergoal.com or call us at +91-8861459921 between 10 AM to 6 PM from Monday to Saturday.",
  },
  {
    title: 'How does Hunter Goal benefit from a free job listing?',
    content: "At Hunter Goal, we believe in the idea of ‘Users at the heart of everything we do’ which means we value our users above profit. We pride ourselves in the trust of the employers who fulfill their hiring requirements using the free hiring process. The hassle-free and smooth hiring process persuades the employer to invest in a long-term relationship with Hunter Goal.",
  },
  {
    title: 'What is the limit on the number of applications I can see for a free listing?',
    content: "For any free listing, you can see the first 50 applications that are received for your listing. If you want to see more applications, you will need to upgrade your free listing to a premium listing or purchase a premium plan.",
  },
  {
    title: 'How can I contact huntergoal.com?',
    content: "You can contact us by writing a mail at employer@huntergoal.com or call us at +91 8861459921, in case you wish to hire freshers or hire employees for your company. If you are a student, you can write to us at helpdesk@huntergoal.com. We are always happy to help!",
  },
];


function HrPlatformScreen() {
  return (
    <div style={HrPlatform.container}>
      <div style={HrPlatform.headerSection}>
        <h1 style={HrPlatform.headerTitle}>
          Single Integrated HR Platform for Growing Teams
        </h1>
        <p style={HrPlatform.headerDescription}>
          Hunter HRMS is a mobile-first hire-to-retire HCM platform that enables
          you to automate HR operations, engage and retain talent, build a
          high-performing workforce while delivering a great employee
          experience that works as a catalyst in your growth journey.
        </p>
      </div>

      <div style={HrPlatform.gridContainer}>
        {/* Card 1 */}
        <div style={HrPlatform.card}>
          <img
            src={Img1}
            alt="Core HR Icon"
            style={HrPlatform.cardIcon}
          />
          <div style={HrPlatform.cardTextContainer}>
            <h3 style={HrPlatform.cardTitle}>Core HR</h3>
            <p style={HrPlatform.cardDescription}>
              Powerful engine that drives every HR function in your organization
              and acts as the backbone of HR.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div style={HrPlatform.card}>
          <img
            src={Img2}
            alt="Time & Attendance Icon"
            style={HrPlatform.cardIcon}
          />
          <div style={HrPlatform.cardTextContainer}>
            <h3 style={HrPlatform.cardTitle}>Time & Attendance</h3>
            <p style={HrPlatform.cardDescription}>
              Get most out of your employee’s time with integrated, touchless time
              tracking for hybrid and remote workforce.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div style={HrPlatform.card}>
          <img
            src={Img3}
            alt="Payroll Icon"
            style={HrPlatform.cardIcon}
          />
          <div style={HrPlatform.cardTextContainer}>
            <h3 style={HrPlatform.cardTitle}>Payroll</h3>
            <p style={HrPlatform.cardDescription}>
              Wizard driven approach and integrated data inputs make the payroll
              process accurate, automated, and compliant.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div style={HrPlatform.card}>
          <img
            src={Img4}
            alt="Performance Icon"
            style={HrPlatform.cardIcon}
          />
          <div style={HrPlatform.cardTextContainer}>
            <h3 style={HrPlatform.cardTitle}>Performance</h3>
            <p style={HrPlatform.cardDescription}>
              OKR-based system where one can create multiple goals, evaluate them
              with flexible review cycles, and improve them with insightful MIS.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div style={HrPlatform.card}>
          <img
            src={Img5}
            alt="Employee Onboarding Icon"
            style={HrPlatform.cardIcon}
          />
          <div style={HrPlatform.cardTextContainer}>
            <h3 style={HrPlatform.cardTitle}>Employee Onboarding</h3>
            <p style={HrPlatform.cardDescription}>
              Simplify your recruitment process and offer your new recruits a
              productive working environment for a perfect start.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div style={HrPlatform.card}>
          <img
            src={Img6}
            alt="Expense Management Icon"
            style={HrPlatform.cardIcon}
          />
          <div style={HrPlatform.cardTextContainer}>
            <h3 style={HrPlatform.cardTitle}>Expense Management</h3>
            <p style={HrPlatform.cardDescription}>
              Ensure efficient handling of travel and expense claims with
              easy-to-use tools.
            </p>
          </div>
        </div>

        {/* Card 7 */}
        <div style={HrPlatform.card}>
          <img
            src={Img7}
            alt="Employee Self Service Icon"
            style={HrPlatform.cardIcon}
          />
          <div style={HrPlatform.cardTextContainer}>
            <h3 style={HrPlatform.cardTitle}>Employee Self Service</h3>
            <p style={HrPlatform.cardDescription}>
              Empower your employees to access and manage personal information
              easily with a secure platform.
            </p>
          </div>
        </div>

        {/* Card 8 */}
        <div style={HrPlatform.card}>
          <img
            src={Img8}
            alt="Mobile App Icon"
            style={HrPlatform.cardIcon}
          />
          <div style={HrPlatform.cardTextContainer}>
            <h3 style={HrPlatform.cardTitle}>Mobile App</h3>
            <p style={HrPlatform.cardDescription}>
              Experience seamless employee management on the go with our intuitive
              mobile app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const HrPlatform = {
  container: {
    width: '90%',
    margin: 'auto',
    padding: '40px 0',
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  headerTitle: {
    fontSize: '2.4rem',
    fontWeight: 'bold',
    marginLeft:'-380px',
  },
  headerDescription: {
    fontSize: '1.0rem',
    color: '#555',
    marginLeft:'-20px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  card: {
    backgroundColor: '#f4f7f8',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center', // Align content in a row (icon + text)
    height: '100%',
    transition: 'transform 0.3s ease',
  },
  cardIcon: {
    width: '48px',
    marginRight: '20px', // Add space between icon and text
    marginBottom:'70px',
  },
  cardTextContainer: {
    textAlign: 'left', // Align text to the left side
  },
  cardTitle: {
    fontSize: '1.3rem',
    marginBottom: '10px',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#666',
  },
};





function EnterpriseScreen() {
  return (
    <div>
      <MainSection />
      <StatsSection />
      <HrPlatformScreen/>
      <CompaniesAuthorityScreen />
    </div>
  );
}

export default EnterpriseScreen;
