import React, { useState } from 'react';
import axios from 'axios';
import svg1 from '../image/child.svg';
import svg2 from '../image/idea.svg';
import svg3 from '../image/help.svg';

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

const college = {
  container: {
    padding: '20px',
    backgroundColor: '#fff',
    textAlign: 'center',
    marginTop:'220px',
  },
  heading: {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '10px',
    marginRight:'360px',
  },
  subheading: {
    fontSize: '16px',
    marginBottom: '20px',
    marginRight:'360px',
  },
  stepsWrapper: {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '85%', // Increased width (adjust as needed)
  margin: '0 auto', // Center the stepsWrapper
  gap: '5px', // Decreased gap between steps
  marginTop: '80px', // Top gap for spacing
},
  step: {
    textAlign: 'center',
    width: '220px', // Adjusted width for the step
    margin: '10px',
  },
  iconCircle: {
    width: '120px', // Adjust the size of the circle
    height: '120px', // Keep height equal to width for a perfect circle
    borderRadius: '50%', // Makes the container a circle
    backgroundColor: '#f0f0f0', // Optional background color for the circle
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto', // Center the circle within the step
  },
  icon: {
    width: '70px', // Adjust the icon size within the circle
    height: '70px',
  },
  stepTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '10px',
    marginTop: '20px', // Adjust margin to add space between the circle and the title
  },
  stepDescription: {
    fontSize: '14px',
  },
};


const program = {
  programContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    alignItems: 'flex-start',
  },
  programHeader: {
    width: '60%',
    textAlign: 'left', // Align title and description to the left
    padding: '130px',
    marginRight:'-80px',
  },
  programTitle: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  programDescription: {
    fontSize: '1.15rem',
    color: '#666',
  },
  accordionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%', // Adjust width as needed
    marginLeft: 'auto',
  },
  accordion: {
    width: '35%', // Accordion list on the left
    margin: '0 auto',
    textAlign: 'left',
    marginTop:'140px',
    marginRight:'130px'
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
    fontWeight:'bold'
  },
  accordionContent: {
    fontSize: '1rem',
    color: '#555',
    marginTop: '-10px', // Add space between the title and content
    padding: '10px',
    backgroundColor: '#fff',
    border: '1px solid #fff',
    borderRadius: '8px',
    transition: 'max-height 0.3s ease-in-out', // Smooth height transition
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
        <h2 style={styles.heading}>Hunter Goal Enterprise Platform for Colleges</h2>
        <p style={styles.titlename}>
        At Hunter Goal, we excel at providing the best courses to get your students 'job ready' and hired at top companies.
        </p>
      </div>

      {/* RightSide is now positioned absolutely outside the main section */}
      <div style={styles.rightSide}>
        <h2 style={styles.formheader}>Get Enquired Today..!</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>College Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Official Email Address</label>
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
            <option value="">Select Option</option>
            <option value="Knowledge">Get in connect with us Regarding</option>
            <option value="ER">Enquiry Regarding</option>
            <option value="CC">Certification Course</option>
            <option value="JGC">Job Guaranteed Course</option>
            <option value="AT">Assessment Test</option>
            <option value="jobs">Internship / Jobs</option>
            
          </select>

          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </section>
  );
}

const steps = [
  {
    title: 'Register for Hunter Goal Enterprise Account for Colleges',
    description: 'The AI-driven platform helps you onboard students at bulk, provide courses, monitor their progress and performance.',
    img: svg1,
  },
  {
    title: 'Assign Courses to Students',
    description: 'Students take self-paced courses along with mentor & tutor support. Once they clear all the unit level assessments, they qualify for placements at top companies.',
    img: svg2,
  },
  {
    title: 'Degree Projects & Internships',
    description: 'Students get access to live projects & internships on Hunter Goal platform while completing their courses. This enables them to get hands-on and job ready.',
    img: svg3,
  },
  {
    title: 'Job Placements',
    description: 'Get access to 100s of top companies who hire certified students on Hunter Goal. Your students now are on par with the top colleges across the world.',
    img: svg2,
  },
];

function CollegeScreen() {
  return (
    <div style={college.container}>
      <h1 style={college.heading}>Steps to upgrade your college with Hunter Goal</h1>
      <p style={college.subheading}>
        Revolutionary new platform to get your students on par with best in the world in terms of skill readiness and job placements
      </p>

      <div style={college.stepsWrapper}>
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              ...college.step,
              transform: index % 2 === 0 ? 'translateY(-40px)' : 'translateY(40px)', // Apply translation based on index
            }}
          >
            <div style={college.iconCircle}>
              <img src={step.img} alt={`Step ${index + 1}`} style={college.icon} />
            </div>
            <h2 style={college.stepTitle}>{step.title}</h2>
            <p style={college.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const ProgramScreen = () => {
  // State to handle accordion open/close
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={program.programContainer}>
      {/* Section Title */}
      <div style={program.programHeader}>
        <h1 style={program.programTitle}>Our Program Structure</h1>
        <p style={program.programDescription}>
          Hunter Goal courses have the best-in-industry curriculum & tools to deliver the best learning experience
        </p>
      </div>

      {/* Accordion Section */}
      <div style={program.accordion}>
        {accordionItems.map((item, index) => (
          <div key={index}>
            {/* Accordion Item */}
            <div style={program.accordionItem}>
              <div
                style={program.accordionTitle}
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.title}</span>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>
            </div>

            {/* Accordion Content outside the main card */}
            {activeIndex === index && (
              <div style={program.expandedContent}>
                <div style={program.accordionContent}>
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

// Accordion items data
const accordionItems = [
  {
    title: 'Video Lessons',
    content: 'Our byte-sized videos are 5-10 minutes each, intended to optimize student’s engagement and grasping power.',
  },
  {
    title: 'Quiz & Assessments',
    content: 'Build proficiency with practice tests and assessments.',
  },
  {
    title: 'Mentor Support',
    content: 'Receive support from experienced mentors.',
  },
  {
    title: 'Doubt Resolution',
    content: 'Get your doubts resolved by our experts.',
  },
  {
    title: 'Interview Prep & Mock',
    content: 'Prepare for interviews with mock tests and preparation tips.',
  },
  {
    title: 'Job Placements',
    content: 'Receive guidance for job placements.',
  },
];


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


const CollegeAuthorityScreen = () => {
  // State to handle accordion open/close
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={CollegeAuthority.container}>
      {/* Section Title */}
      <div style={CollegeAuthority.header}>
        <h1 style={CollegeAuthority.title}>Frequently Asked By College Authority</h1>
      </div>

      {/* Accordion Section */}
      <div style={CollegeAuthority.accordion}>
        {CollegeAuthorityItems.map((item, index) => (
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
const CollegeAuthorityItems = [
  {
    title: 'Q: Is there any participation fee for colleges?',
    content: 'No, there is no participation fee. It is completely free of cost for colleges',
  },
  {
    title: 'Q: How can I register my students?',
    content: 'We provide a bulk registration facility for the college authorities on our platform. Once you fill in the registration details, you would be redirected to the next page where you need to upload an Excel file having the necessary details (email address, first name, last name, and mobile number) of your students. Once done, we will create a HunterGoal account for each student and send them a verification email.Please note: In case the student is already registered using the same email address, we do not send a verification email to that particular student, but be assured that the student will be registered by us.',
  },
  {
    title: 'Q: Whom should I register?',
    content: 'We recommend you to register all your students (first to final year) from all the streams/branches so that each student gets an internship opportunity of their relevance and choice.',
  },
  {
    title: 'Q: I am not sure if all my students are already registered on HunterGoal or not. What should I do?',
    content: 'You can register all your students if you are not sure about whether they are already registered or not. As we have an automated system in place that ensures that no duplication of accounts will happen (in case the account already exists) and only the remaining students will get registered.',
  },
  {
    title: 'Q: How will I get access to my college dashboard?',
    content: 'Once the registration process is completed by you, we will send a confirmation email within the next 2 working days to your registered email address with the details to access your college dashboard. All your students internship selections will be updated in your college dashboard.',
  },

  {
    title: 'Q: I want to sign an MoU with HunterGoal, what should I do?',
    content: 'You can reach us at partnership@huntergoal.com and we would get back to you with the necessary details.',
  },

  {
    title: 'Q: My query has not been answered here, what should I do?',
    content: 'Please write to us at university.relations@huntergoal.com or give us a call on +91 8861459921 (Mon - Fri, 10:30 AM - 05:30 PM).',
  },
];


function HomeScreen() {
  return (
    <div>
      <MainSection />
      <CollegeScreen/>
      <ProgramScreen />
      <CollegeAuthorityScreen/>
    </div>
  );
}

export default HomeScreen;
