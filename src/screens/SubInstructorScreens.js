import React, { useState } from 'react';

const styles = {
  formSection: {
    flex: 1,
    marginRight: '20px',
  },
  infoSection: {
    flex: 2,
  },
  h2: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '5px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  submitBtn: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  submitBtnHover: {
    backgroundColor: '#0056b3',
  },
  infoCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '20px',
  },
  infoBtn: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  infoBtnHover: {
    backgroundColor: '#0056b3',
  },
  instructorPromotion: {
    backgroundColor: '#f0f0f0',
    padding: '15px',
    borderRadius: '8px',
  },
  startTeachingBtn: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  startTeachingBtnHover: {
    backgroundColor: '#218838',
  },
  '@media (maxWidth: 600px)': {
    container: {
      flexDirection: 'column',
    },
    formSection: {
      marginRight: '0',
      marginBottom: '20px',
    },
  },
};

const InstructorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <div style={styles.formSection}>
        <h2 style={styles.h2}>Please fill this form</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            ></textarea>
          </div>
          <button type="submit" style={styles.submitBtn}>Submit form</button>
        </form>
      </div>
      <div style={styles.infoSection}>
        <h2 style={styles.h2}>How to begin?</h2>
        <div style={styles.infoCard}>
          <button style={styles.infoBtn}>Plan your curriculum</button>
          <p>
            You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool. The way that you teach — what you bring to it — is up to you.
          </p>
          <p>
            We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.
          </p>
        </div>
        <div style={styles.infoCard}>
          <button style={styles.infoBtn}>Record Your Video</button>
          <p>
            Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start. If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.
          </p>
          <p>
            Our support team is available to help you throughout the process and provide feedback on test videos.
          </p>
        </div>
        <div style={styles.infoCard}>
          <button style={styles.infoBtn}>Launch your course</button>
          <p>
            Gather your first ratings and reviews by promoting your course through social media and your professional networks. Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.
          </p>
          <p>
            Our custom coupon tool lets you offer enrollment incentives while our global promotions drive traffic to courses. There’s even more opportunity for courses chosen for Hunter's Business.
          </p>
        </div>
        <div style={styles.instructorPromotion}>
          <h3>Become an Instructor!</h3>
          <p>
            Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished.
          </p>
          <button style={styles.startTeachingBtn}>Start Teaching Today</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorForm;
