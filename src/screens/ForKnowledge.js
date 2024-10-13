import React, { useState, useEffect } from "react";
import svgLeft from '../image/category-1.svg'; // Replace with actual path
import svgRight from '../image/category-2.svg';
import bottomImage1 from '../image/08.svg'; // Replace with actual path for the image
import bottomImage2 from '../image/15.svg'; // Replace with actual path for the image
import bottomImage3 from '../image/09.svg'; // Replace with actual path for the image
import partner1 from '../image/cardekho.png'; // Replace with actual path for the image
import partner2 from '../image/concentrix.png'; // Replace with actual path for the image
import partner3 from '../image/convergys.png'; // Replace with actual path for the image
import partner4 from '../image/cred.png'; // Replace with actual path for the image
import partner5 from '../image/flipkart.png'; // Replace with actual path for the image
import partner6 from '../image/infosys.png'; // Replace with actual path for the image
import partner7 from '../image/lenskart.png'; // Replace with actual path for the image
import partner8 from '../image/myntra.png'; // Replace with actual path for the image
import partner9 from '../image/phonepe.png'; // Replace with actual path for the image
import partner10 from '../image/sap.png'; // Replace with actual path for the image
import partner11 from '../image/slice.png'; // Replace with actual path for the image
import partner12 from '../image/HGS.png'; // Replace with actual path for the image
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from "react-slick";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import zIndex from "@mui/material/styles/zIndex";

const corporatePartners = [
    partner1, partner2, partner3, partner4, partner5, partner6,
    partner7, partner8, partner9, partner10, partner11, partner12
];

const ForKnowledgeScreen = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to automatically slide the images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % corporatePartners.length);
        }, 500); // Slide every 0.5 seconds
        return () => clearInterval(interval); // Clean up on component unmount
    }, []);

    // Display the 6 images, but with circular wrapping
    const displayImagesWithCircularWrap = () => {
        const firstHalf = corporatePartners.slice(currentSlide, currentSlide + 6);
        const secondHalf = corporatePartners.slice(0, (currentSlide + 6) % corporatePartners.length);
        return [...firstHalf, ...secondHalf].slice(0, 6);
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 cards at a time
        slidesToScroll: 1, // Scroll one card at a time
        autoplay: true,
        autoplaySpeed: 3000, // Change every 3 seconds
        responsive: [
            {
                breakpoint: 768, // For smaller devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Internship Slider
    const internships = [
        { title: "Front end Developer", company: "Hunter Goal (OPC) Private Limited", location: "Bangalore", duration: "2 Months" },
        { title: "Java Backend Developer", company: "Hunter Goal (OPC) Private Limited", location: "Bangalore", duration: "2 Months" },
        { title: "Python Backend Developer", company: "Hunter Goal (OPC) Private Limited", location: "Bangalore", duration: "2 Months" },
        { title: "Campus Ambassador", company: "Hunter Goal (OPC) Private Limited", location: "Bangalore", duration: "2 Months" },
        { title: "Full Stack Developer", company: "Hunter Goal (OPC) Private Limited", location: "Bangalore", duration: "2 Months" },
        { title: "Data Scientist", company: "Hunter Goal (OPC) Private Limited", location: "Bangalore", duration: "3 Months" },
        { title: "Digital Marketing Intern", company: "Hunter Goal (OPC) Private Limited", location: "Bangalore", duration: "2 Months" }
    ];
    
    const [currentCard, setCurrentCard] = useState(0);
    
    const nextCard = () => {
        setCurrentCard((currentCard + 1) % internships.length);
    };
    
    const prevCard = () => {
        setCurrentCard((currentCard - 1 + internships.length) % internships.length);
    };
    
    // Function to display 4 internship cards, starting from the current card
    const displayInternshipCards = () => {
        let displayedInternships = [];
        for (let i = 0; i < 4; i++) {
            displayedInternships.push(internships[(currentCard + i) % internships.length]);
        }
        return displayedInternships;
    };

    // Feedback Slider
    const feedbackData = [
        {
            name: "Arvind Shukla",
            content: "My colleague recommended this training institute based on his expertise, and my experience was also positive. I am quite pleased with what I have learned."
        },
        {
            name: "Pavitra B",
            content: "I attended web design and development classes at this platform. Teaching was excellent. I found it really helpful. Thanks to the Hunter Goal Team, I was successfully placed with a decent package after post training."
        },
        {
            name: "Jairam Nayak",
            content: "The Placement Guarantee courses/trainings are good and provide adequate knowledge. I learned UI/UX from the platform, and it is helping me so much in my job. It's not fake as many users claim; instead, the competition in the job market is high. Hunter Goal has all types of internships and jobs and you can also use their filters to find your dream job."
        },
        {
            name: "Ratna Naik",
            content: "Very good training institute; administration and trainers are very friendly. I recently completed web design and development courses. It was an amazing experience. Trainer... and was placed under internship."
        },
        {
            name: "Abhishek Kumar",
            content: "I made the right decision by enrolling in Huntergoal's AWS course; I recommend it to others because the AWS course content is superior to that of other institutions, and the instructor is more informed. The nicest thing is that it is a real-world corporate project that Hunter manages and trains us on real-world difficulties."
        },
        {
            name: "Manjunath Moghe",
            content: "I feel more at home, more comfortable, more in control and more supported than I ever have before. The employer genuinely cares for your growth, both professionally and personally. The team lead and the mentor are really great, helping to understand how everything is done and making sure to help if I am doubtful about how things will be managed."
        }
    ];
    
    const [currentFeedback, setCurrentFeedback] = useState(0);

    const nextFeedback = () => {
        setCurrentFeedback((currentFeedback + 1) % feedbackData.length);
    };

    const prevFeedback = () => {
        setCurrentFeedback((currentFeedback - 1 + feedbackData.length) % feedbackData.length);
    };
    
    // Display 3 feedback cards, starting from the current feedback
    const displayFeedbackCards = () => {
        let displayedFeedback = [];
        for (let i = 0; i < 3; i++) {
            displayedFeedback.push(feedbackData[(currentFeedback + i) % feedbackData.length]);
        }
        return displayedFeedback;
    };
    
    // Automatically change internship card every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCard((prevCard) => (prevCard + 1) % internships.length); // Move to the next internship card
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval); // Clean up on component unmount
    }, []); // No dependencies to run only once on mount

    // Automatically change feedback card every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFeedback((prevFeedback) => (prevFeedback + 1) % feedbackData.length); // Move to the next feedback card
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval); // Clean up on component unmount
    }, []); // No dependencies to run only once on mount

    return (
        <div style={styles.homeContainer}>
            {/* Main Knowledge Section */}
            <section style={styles.mainSection}>
                <header style={styles.homeHeader}>
                    <img src={svgLeft} alt="Left Illustration" style={styles.headerImgLeft} />
                    <div style={styles.headerContent}>
                        <h1 style={styles.headerTitle}>What do you want to learn?</h1>
                        <p style={styles.headerSubtitle}>
                            Grow your skill with the most reliable online courses and certifications
                        </p>
                    </div>
                    <img src={svgRight} alt="Right Illustration" style={styles.headerImgRight} />
                </header>
            </section>

            {/* Learning Options Section */}
            <section style={styles.learningOptions}>
                <div style={styles.learningCard}>
                    <h2 style={styles.cardTitle}>Earn a Training Certificate</h2>
                    <p style={styles.cardText}>
                        Enroll now in the most popular and best rated Courses - By Top Professionals.
                    </p>
                    <button style={styles.button}>View Courses</button>
                    <img src={bottomImage1} alt="Bottom Illustration" style={styles.bottomImage1} />
                </div>

                <div style={styles.learningCard2}>
                    <h2 style={styles.cardTitle}>Earn an Internship Certificate</h2>
                    <p style={styles.cardText}>
                        Enroll now in the most popular and best rated Internship - Assured Internship program.
                    </p>
                    <button style={styles.buttonYellow}>View Internships</button>
                    <img src={bottomImage2} alt="Bottom Illustration" style={styles.bottomImage2} />
                </div>

                <div style={styles.learningCard}>
                    <h2 style={styles.cardTitle}>Earn a Job Assured Course</h2>
                    <p style={styles.cardText}>
                        Enroll now in the most popular and best rated Job-Assured Training courses.
                    </p>
                    <button style={styles.button}>View Job Assured Courses</button>
                    <img src={bottomImage1} alt="Bottom Illustration" style={styles.bottomImage1} />
                </div>
            </section>

            {/* Corporate Partners Slider */}
            <h2 style={styles.companiesTitle}>Our Trusted Corporate Partners</h2>
            <p style={styles.companiestext}>Creating pathways to professional success</p>
            <div style={styles.slider}>
                {displayImagesWithCircularWrap().map((image, index) => (
                    <img key={index} src={image} alt={`Corporate Partner ${index}`} style={styles.image} />
                ))}
            </div>

            {/* Internship Slider */}
            <h2 style={styles.jobsTitle}>Top Listed Internships</h2>
            <p style={styles.companiestext}>Check out most 🤩 Internships in the Hunter Goal</p>
            
            <div style={styles.internshipContainer}>
            <button onClick={prevCard} style={styles.sliderButton}><ArrowBackIosIcon /></button>
                {displayInternshipCards().map((internship, index) => (
                    <div key={index} style={styles.internshipCard}>
                    <h3 style={styles.title}>{internship.title}</h3>
                    <p style={styles.company}>{internship.company}</p>
                    <hr style={styles.divider} />
    
                    {/* Location Section */}
                    <div style={styles.infoRow}>
                    <span style={styles.icon}>
                    <LocationOnIcon style={{ color: '#6CB4EE' }} />
                    </span>
                    <span style={styles.text}>{internship.location}</span>
                    </div>
    
                    {/* Duration Section */}
                    <div style={styles.infoRow}>
                    <span style={styles.icon}>
                     <DateRangeIcon style={{ color: '#6CB4EE' }} />
                    </span>
                     <span style={styles.text}>{internship.duration}</span>
                    </div>
    
                    {/* Bottom Section */}
                    <div style={styles.bottomRow}>
                     <span style={styles.internText}>Internship</span>
                    <span style={styles.viewDetails}>
                     View Details <ArrowForwardIcon />
                    </span>
                    </div>
                    </div>
                    
                ))}
                <button onClick={nextCard} style={styles.sliderButton}><ArrowForwardIosIcon /></button>
            </div>
            
            <section style={styles.subfeedbackSection}>
            <section style={styles.feedbackSection}>
                <h2 style={styles.feedbackTitle}>Students Feedback</h2>
                <p style={styles.companiestext}>
                    The importance of customer feedback in improving and achieving excellence in our products or services.
                </p>
                
                <div style={styles.feedbackSlider}>
                    <button onClick={prevFeedback} style={styles.sliderButton}><ArrowBackIosIcon /></button>
                    <div style={styles.feedbackCardsContainer}>
                        {displayFeedbackCards().map((feedback, index) => (
                            <div key={index} style={styles.feedbackCard}>
                                <h3 style={{ ...styles.feedbacktext, fontWeight: 'bold' }}>{feedback.name}</h3>
                                <p style={{ ...styles.feedbackContent }}>
                                    <strong style={{ fontSize: '1.5em' }}>“</strong>
                                    {feedback.content}
                                    <strong style={{ fontSize: '1.5em' }}>”</strong>
                                </p>
                            </div>
                        ))}
                    </div>
                    <button onClick={nextFeedback} style={styles.sliderButton}><ArrowForwardIosIcon /></button>
                </div>
            </section>
            <img src={bottomImage3} alt="Bottom Illustration" style={styles.bottomImage3} /> {/* Add your image here */}
        </section>
        </div>
    );
};

// Styles as JavaScript Object
const styles = {
    homeContainer: {
    textAlign: 'center',
    padding: '20px',
    },
    mainSection: {
    width: '100%',
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#f5f7f9',
    marginBottom: '30px',
    },
    homeHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    },
    headerContent: {
    margin: '0 20px',
    },
    headerTitle: {
    fontSize: '44px',
    fontWeight: 'bold',
    },
    headerSubtitle: {
    fontSize: '18px',
    color: '#555',
    },
    headerImgLeft: {
    width: '350px',
    height: '350px',
    },
    headerImgRight: {
    width: '350px',
    height: '350px',
    },
    companiesTitle: {
    fontSize: "2rem", // Adjust font size as needed
    marginTop: "40px", // Margin to create space above the h2
    marginBottom: "20px", // Space below h2 to separate it from the slider
    color: "#333", // You can customize the font color here
    fontWeight:'Bold',
    },
    companiestext: {
    fontSize: "1rem", // Adjust font size as needed
    marginTop: "-10px", // Margin to create space above the h2
    marginBottom: "20px", // Space below h2 to separate it from the slider
    color: "#333", // You can customize the font color here
    },
    slider: {
    width: "90%", // Slider width set to 80% of the screen
    height:'20vh',
    margin: "0 auto", // Center the slider horizontally
    display: "flex",
    justifyContent: "space-between", // Spacing between the images
    alignItems: "center",
    overflow: "hidden",
    },
    image: {
    width: "12%", // Each image occupies about 12% of the slider width (6 images at a time)
    height: "auto",
    transition: "transform 0.5s ease-in-out", // Smooth transition
    },
    companies: {
    width: "80%", // Default slider width (can be adjusted)
    fontSize: "1.5rem", // Default font size for company title (adjustable)
    marginTop: "40px", // Space before the companies title
    marginBottom: "20px", // Space after the companies title
    color: "#444", // Default color for the companies title
    textAlign: "center", // Center the companies section
    },
    jobsTitle: {
    fontSize: "3rem", // Adjust font size as needed
    marginTop: "60px", // Margin to create space above the h2
    marginBottom: "20px", // Space below h2 to separate it from the slider
    color: "#333", // You can customize the font color here
    fontWeight:'Bold',
    },
    subfeedbackSection: {
    width: '100%',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f7f9',
    marginTop:'20px'
    },

    feedbackTitle: {
    fontSize: "2rem", // Adjust font size as needed
    marginTop: "60px", // Margin to create space above the h2
    marginBottom: "20px", // Space below h2 to separate it from the slider
    color: "#333", // You can customize the font color here
    fontWeight:'Bold',
    },
    feedbacktext:{
        fontSize: "1rem", // Adjust font size as needed
        marginBottom: "20px", // Space below h2 to separate it from the slider
        color: "#333", // You can customize the font color here
        },

    internshipContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
    position: 'relative',
    gap:'25px'
    },
    internshipCard: {
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        width: '300px',
        height: '220px',
        textAlign: 'left',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fff',
        position: 'relative', // Add position relative here
    },
    internText: {
        fontSize: '0.9em',
        cursor: 'pointer',
        position: 'absolute',  // Absolute positioning
        bottom: '10px',        // 10px from the bottom
        Left: '10px',
        fontWeight:'bold'
    },
    title: {
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    company: {
        fontSize: '14px',
        color: '#888',
        marginBottom: '10px',
    },
    divider: {
        margin: '10px 0',
        borderColor: 'black',
    },
    infoRow: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    },
    icon: {
        marginRight: '5px',
    },


    location: {
        fontSize: '14px',
        color: '#555',
    },
    duration: {
        fontSize: '14px',
        color: '#555',
    },
    type: {
        fontWeight: 'bold',
        marginTop: '10px',
        fontSize: '14px',
    },
    viewDetails: {
        fontSize: '0.9em',
        color: '#6CB4EE',
        cursor: 'pointer',
        position: 'absolute',  // Absolute positioning
        bottom: '10px',        // 10px from the bottom
        right: '20px',         // 10px from the right
        fontWeight:'bold'
    },
    arrow: {
        marginLeft: '5px',
        fontWeight: 'bold',
    },
    viewDetailButton: {
    backgroundColor: 'transparent', // Transparent button background
    border: 'none',
    color: '#007bff', // Link color for "View Detail"
    cursor: 'pointer',
    textDecoration: 'underline',
    marginTop: '10px',
    fontWeight: 'bold',
    },
    card: {
    width: '300px',
    padding: '20px',
    backgroundColor: '#e6f0f9',
    borderRadius: '10px',
    textAlign: 'center',
    margin: '0 20px',
    },
    internshipsSlider: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    feedbackSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center elements horizontally
        justifyContent: 'center', // Center elements vertically if needed
        maxWidth: '1200px',
        width: '100%',
        margin: '40px auto', // Center section on the page
        textAlign: 'center',
    },
    feedbackSlider: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%', // Make sure it takes full width for centering
    },
    feedbackCardsContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%', // Full width for centering cards
    },
    feedbackCard: {
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '15px',
        margin: '0 10px',
        flex: '0 0 auto',
        width: '350px', // Fixed width for consistent card size
        height: '350px', // Corrected height property
        textAlign: 'left', // Align text to the left
        display: 'flex', // Use flexbox to align content vertically
        flexDirection: 'column', // Arrange children in a column
        justifyContent: 'space-between', // Space between name and content
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Optional: Add shadow for better appearance
    },
    sliderButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '24px',
        margin: '0 10px',
        padding: '10px',
    },
    learningOptions: {
    display: 'flex',
    marginTop: '40px',
    gap: '25px', // Controls the gap between each card
    justifyContent: 'center',
    },
    learningCard: {
    position: 'relative', 
    backgroundColor: '#e6f0f9',
    borderRadius: '8px',
    padding: '30px',
    width: '420px',
    height: '250px',
    textAlign: 'left',
  },
  learningCard2: {
    position: 'relative', 
    backgroundColor: '#f4f4f6',
    borderRadius: '8px',
    padding: '30px',
    width: '420px',
    height: '250px',
    textAlign: 'left',
  },
  feedbacktext: {
    fontSize: "1rem", // Adjust font size as needed
    marginBottom: "10px", // Space below name to separate it from the content
    color: "#333", // You can customize the font color here
    textAlign: 'center', // Center the name horizontally
},
feedbackContent: {
    textAlign: 'justify', // Justify content
    marginBottom: '10px', // Space below content
    textAlign: 'left', // Align content to the left
    flex: 1, // Allow content to take available space
},
  cardTitle: {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  buttonYellow: {
    backgroundColor: '#f6c22e',
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  bottomImage1: {
    position: 'absolute', 
    bottom: '-20px', 
    right: '10px', 
    width: '150px', 
    height: '150px', 
  },
  bottomImage2: {
    position: 'absolute', 
    bottom: '-10px', 
    right: '10px', 
    width: '130px', 
    height: '130px', 
  },
  bottomImage3: {
    position: 'absolute', 
    bottom: '-1400px', // Adjust as needed
    left: '10px', // Adjust as needed
    width: '230px', // Adjust size as needed
    height: '230px', // Adjust size as needed
    zIndex:'1',
},

};

export default ForKnowledgeScreen;
