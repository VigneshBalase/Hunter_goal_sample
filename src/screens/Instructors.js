import React, { useState } from 'react';
import axios from 'axios';
import teachIcon from '../image/create-account.svg';  // Replace with the correct image paths
import inspireIcon from '../image/add-course.svg';
import rewardIcon from '../image/earn-money.svg';
const styles = {
  mainSection: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '50px',
    backgroundColor: '#284259',
    height: '50vh',
  },
  leftSide: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '60px',
  },
  rightSide: {
    position: 'absolute',
    top: '48%',
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
  container: {
    textAlign: 'center',
    padding: '50px 0',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '20px',
    marginTop: '160px',
  },
  titles: {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '20px',
    marginTop:'-5px'
  },
  description: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '5px',
  },
  benefitsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  benefitCard: {
    textAlign: 'center',
    width: '450px',
  },
  icon: {
    width: '200px',
    height: '200px',
    marginBottom: '20px',
  },
  benefitTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  benefitDescription: {
    fontSize: '16px',
    color: '#555',
     marginBottom:'5px'
  },
  benefitDescriptions: {
    fontSize: '16px',
    color: '#555',
   
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

const subForms = {
  formContainer: {
    backgroundColor: 'white',
    padding: '30px',
    width: '33%',
    
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Adjusted shadow here
    borderRadius: '10px',
    minHeight: '200px',
    top: '30px',
    bottom: '30px',
    marginTop: '100px', // Add this line for the gap
    marginLeft: '120px',
    marginBottom:'40px',
  },

  formheader:{
    fontSize: '34px',
    fontWeight: 'bold',
    marginBottom: '20px',
    marginTop:'-5px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    margin: '0 auto',
    borderRadius: '10px',
  },
  label: {
    marginBottom: '8px',
    fontWeight: 'bold',
    borderRadius: '10px',
  },
  input: {
    marginBottom: '16px',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '10px',
  },
  textarea: {
    marginBottom: '16px',
    padding: '8px',
    fontSize: '16px',
    resize: 'vertical', // allows vertical resizing only
    height: '100px',
    borderRadius: '10px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#066bc8',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '10px',
    width: '130px',
  }
};

const info = { 
  buttonContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#e6f0f9',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '30%', // Adjust the width for button layout
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  infoContainer: {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  infoHeader: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    marginTop: '-5px',
  },
  infoText: {
    fontSize: '16px',
    color: '#555',
  },
  infosHeader: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '20px',
    marginTop: '25px',
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#24282c", // Dark background
    borderRadius: "10px",
    position: "relative",
    width: "85%", // Set width to 85%
    height: '180px', // Increased height of the card
    margin: "0 auto", // Center horizontally
    marginBottom: '40px',
  },
  circle: {
    width: '130px', // Diameter of the circle
    height: '130px',
    backgroundColor: '#3a3e43', // Circle color
    borderRadius: '50%', // Make it circular
    position: 'absolute',
    left: '55px', // Adjust to position the circle correctly
    top: '50%', // Center vertically relative to the statsContainer
    transform: 'translateY(-50%)', // Center the circle vertically
  },
  additionalTextContainer: {
    position: 'absolute', // Set position to absolute
    left: '100px', // Adjust left position to create space from the circle
    top: '25%', // Adjust top to align with the top of the circle
    color: '#fff', // Change the text color for better visibility
    textAlign: 'left', // Align text to the left
  },
  additionalHeader: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  additionalParagraph: {
    fontSize: '16px',
    lineHeight: '1.5', // Improve line height for readability
  },
  additionalParagraph1: {
    fontSize: '16px',
    lineHeight: '1.5', // Improve line height for readability
    margintop:'-15px',
  },
  buttonRight: {
    marginLeft: '975px', // Push the button to the right
    padding: '10px 20px',
    backgroundColor: '#fefffe', // Green background for the button
    color: 'black',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width:'auto',
    marginTop: '40px', // Adjust this value to move the button down
    height:'50px'
  },
};



function MainSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        <h2 style={styles.heading}>Apply as Instructor</h2>
        <p style={styles.titlename}>
          Become an instructor and change lives — including your own
        </p>
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

          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </section>
  );
}

function InstructorBenefitsScreen() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>You can be your guiding star with </h2>
      <h2 style={styles.titles}>our help</h2>
      <p style={styles.description}>
        Focusing on the aspects of teaching that you love, such as designing lessons,interacting  
      </p>
      <p style={styles.description}>
        with students, or exploring new topics.
      </p>

      <div style={styles.benefitsContainer}>
        <div style={styles.benefitCard}>
          <img src={teachIcon} alt="Teach your way" style={styles.icon} />
          <h3 style={styles.benefitTitle}>Teach your way</h3>
          <p style={styles.benefitDescription}>
            Publish the course you want, in the way you want, and </p>
          <p style={styles.benefitDescriptions}>
          always have control of your own content.
          </p>
        </div>

        <div style={styles.benefitCard}>
          <img src={inspireIcon} alt="Inspire learners" style={styles.icon} />
          <h3 style={styles.benefitTitle}>Inspire learners</h3>
          <p style={styles.benefitDescriptions}>
            Teach what you know and help learners explore their 
          </p>
          <p style={styles.benefitDescription}>
          interests, gain new skills, and advance their careers.
          </p>
        </div>

        <div style={styles.benefitCard}>
          <img src={rewardIcon} alt="Get rewarded" style={styles.icon} />
          <h3 style={styles.benefitTitle}>Get rewarded</h3>
          <p style={styles.benefitDescription}>
            Expand your professional network, build your expertise, 
          </p>
          <p style={styles.benefitDescriptions}>
          and earn money on each paid enrollment.
          </p>
        </div>
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <div style={styles.statsContainer}>
      <div style={styles.waveBackground}></div>
      <div style={styles.statItem}>
        <h1 style={styles.statNumber}>10K+</h1>
        <p style={styles.statDescription}>Total Students</p>
      </div>
      <div style={styles.statItem}>
        <h1 style={styles.statNumber}>1K+</h1>
        <p style={styles.statDescription}>Total Instructors</p>
      </div>
      <div style={styles.statItem}>
        <h1 style={styles.statNumber}>30+</h1>
        <p style={styles.statDescription}>Total Courses</p>
      </div>
      <div style={styles.statItem}>
        <h1 style={styles.statNumber}>6+</h1>
        <p style={styles.statDescription}>Languages</p>
      </div>
    </div>
  );
};


function SubFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    summary: '',
  });

  const [infoState, setInfoState] = useState({
    header: 'Plan your curriculum',
    text: `You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool. The way that you teach — what you bring to it — is up to you.`,
    header2: `How we help you?`,
    text2: `We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.`,
  });

  const [selectedButton, setSelectedButton] = useState(null); // Initialize selectedButton state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Optionally reset the form here if desired
    // setFormData({ fullName: '', email: '', phone: '', summary: '' });
  };

  const handleButtonClick = (type) => {
    setSelectedButton(type); // Set the selected button state
    switch (type) {
      case 'curriculum':
        setInfoState({
          header: 'Plan your curriculum',
          text: `You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool. The way that you teach — what you bring to it — is up to you.`,
          header2: `How we help you?`,
          text2: `We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.`,
        });
        break;
      case 'video':
        setInfoState({
          header: 'Record your video',
          text: `Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start. If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.`,
          header2: `How we help you?`,
          text2: `Our support team is available to help you throughout the process and provide feedback on test videos.`,
        });
        break;
      case 'launch':
        setInfoState({
          header: 'Launch your course',
          text: `Gather your first ratings and reviews by promoting your course through social media and your professional networks. Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.`,
          header2: `How we help you?`,
          text2: `Our custom coupon tool lets you offer enrollment incentives while our global promotions drive traffic to courses. There’s even more opportunity for courses chosen for Hunter's Business.`,
        });
        break;
      default:
        setInfoState(null);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px' }}>
      <div style={subForms.formContainer}>
        <h2 style={subForms.formheader}>Please fill this form</h2>
        <form style={subForms.form} onSubmit={handleSubmit}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ flex: 1, marginRight: '8px' }}>
              <label style={subForms.label}>Full Name*</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                style={subForms.input}
                required
              />
            </div>
            <div style={{ flex: 1, marginLeft: '8px' }}>
              <label style={subForms.label}>Email Address*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={subForms.input}
                required
              />
            </div>
          </div>

          <label style={subForms.label}>Phone Number*</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={subForms.input}
            required
          />

          <label style={subForms.label}>Add Summary*</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            style={subForms.textarea}
            draggable="true"
            placeholder="Type your summary here..."
            required
          />

          <button type="submit" style={subForms.submitButton}>Submit</button>
        </form>
      </div>

      <div style={{ marginLeft: '50px', flex: 1, marginTop: '110px' }}>
        <h2 style={info.infoHeader}>How to Begin?</h2>
        <div style={info.buttonContainer}>
          <button 
            style={{ 
              ...info.button, 
              backgroundColor: selectedButton === 'curriculum' ? '#066bc8' : '#e6f0f9', 
              color: selectedButton === 'curriculum' ? 'white' : '#7eb3e3' 
            }} 
            onClick={() => handleButtonClick('curriculum')}
          >
            Plan Your Curriculum
          </button>
          <button 
            style={{ 
              ...info.button, 
              backgroundColor: selectedButton === 'video' ? '#066bc8' : '#e6f0f9', 
              color: selectedButton === 'video' ? 'white' : '#7eb3e3' 
            }} 
            onClick={() => handleButtonClick('video')}
          >
            Record Your Video
          </button>
          <button 
            style={{ 
              ...info.button, 
              backgroundColor: selectedButton === 'launch' ? '#066bc8' : '#e6f0f9', 
              color: selectedButton === 'launch' ? 'white' : '#7eb3e3' 
            }} 
            onClick={() => handleButtonClick('launch')}
          >
            Launch Your Course
          </button>
        </div>

        {/* Display the information based on button clicks */}
        {infoState && (
          <div>
            <h3 style={info.infosHeader}>{infoState.header}</h3>
            <p style={info.infoText}>{infoState.text}</p>

            {infoState.header2 && (
              <>
                <h3 style={info.infosHeader}>{infoState.header2}</h3>
                <p style={info.infoText}>{infoState.text2}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function BlackBlockScreen() {
  return (
    <div style={info.statsContainer}>
      <div style={info.circle} /> {/* Circle element */}
      {/* Additional text below the circle */}
      <div style={info.additionalTextContainer}>
        <h2 style={info.additionalHeader}>Become an Instructor!</h2>
        <p style={info.additionalParagraph}>
          Speedily say has suitable disposal add boy. On forth doubt miles of child. 
          Exercise joy man 
          </p>
          <p style={info.additionalParagraph1}>
          children rejoiced. Yet uncommonly his ten who diminution astonished.
        </p>
      </div>
      <button style={info.buttonRight}>Start Teaching Today</button> {/* Right-aligned button */}
    </div>
  );
}

function InstructorsScreen() {
  return (
    <div>
      <MainSection />
      <InstructorBenefitsScreen />
      <StatsSection />
      <SubFormSection /> {/* This section will now display below StatsSection */}
      <BlackBlockScreen /> {/* Corrected component name to start with a capital letter */}
    </div>
  );
}

export default InstructorsScreen;
