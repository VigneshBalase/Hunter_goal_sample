import React from 'react';
import svgLeft from '../image/category-1.svg'; // Replace with actual path
import svgRight from '../image/category-2.svg';

const ForKnowledgeScreen = () => {
  return (
    <div style={styles.homeContainer}>
      {/* Header Section */}
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

      {/* Learning Options Section */}
      <section style={styles.learningOptions}>
        {/* Training Certificate Card */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Earn a Training Certificate</h2>
          <p style={styles.cardText}>
            Enroll now in the most popular and best rated Courses - By Top Professionals.
          </p>
          <button style={styles.button}>View Courses</button>
        </div>

        {/* Internship Certificate Card */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Earn an Internship Certificate</h2>
          <p style={styles.cardText}>
            Enroll now in the most popular and best rated Internship - Assured Internship program.
          </p>
          <button style={styles.button}>View Internships</button>
        </div>

        {/* Job Assured Course Card */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Earn a Job Assured Course</h2>
          <p style={styles.cardText}>
            Enroll now in the most popular and best rated Job-Assured Training courses.
          </p>
          <button style={styles.button}>View Job Assured Courses</button>
        </div>
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
  homeHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  headerContent: {
    margin: '0 20px',
  },
  headerTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: '18px',
    color: '#555',
  },
  headerImgLeft: {
    width: '150px',
  },
  headerImgRight: {
    width: '150px',
  },
  learningOptions: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '40px',
  },
  card: {
    backgroundColor: '#f4f8fb',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '300px',
    textAlign: 'left',
  },
  cardTitle: {
    fontSize: '20px',
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
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default ForKnowledgeScreen;

