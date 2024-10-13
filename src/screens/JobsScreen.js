import React from 'react';
import illustrationImage from '../image/coming-soon.svg';

const NewScreen = () => {
    return (
        <div style={styles.container}>
            <div style={styles.leftSection}>
                <h1 style={styles.heading}>We are building something awesome!</h1>
                <p style={styles.description}>
                    Hey you! Hunter Goal Jobs & Internships from Various Organisation is coming soon. We are doing our best to launch our New Version.
                </p>

                {/* Progress Section is now part of the left section */}
                <div style={styles.progressSection}>
                    <div style={styles.progressContainer}>
                        <div style={styles.progressBar}>
                            <div style={styles.stripedProgressFill}></div>
                        </div>
                        <span style={styles.progressText}>85%</span>
                    </div>
                </div>
            </div>

            {/* Image displayed on the right */}
            <div style={styles.rightSection}>
                <img src={illustrationImage} alt="Cloud" style={styles.illustration} />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '50px',
        fontFamily: 'Arial, sans-serif',
        marginRight: '60px',
        marginLeft: '80px',
    },
    leftSection: {
        width: '500px', // Decreased width for the left section
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: '40px',
    },
    heading: {
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
    },
    description: {
        fontSize: '15px',
        color: '#666',
        marginBottom: '40px',
    },
    progressSection: {
        marginTop: '20px',
    },
    progressContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    progressBar: {
        width: '650px',
        height: '10px',
        backgroundColor: '#ddd',
        borderRadius: '5px',
        overflow: 'hidden',
        marginRight: '10px',
    },
    stripedProgressFill: {
        width: '85%',
        height: '100%',
        backgroundImage: 'repeating-linear-gradient(45deg, #3e576c 0%, #3e576c 25%, #1d3b53 25%, #1d3b53 50%)',
        backgroundSize: '20px 20px',
        animation: 'progress-stripes 1s linear infinite',
    },
    progressText: {
        fontSize: '16px',
        color: '#333',
    },
    rightSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    illustration: {
        marginTop:'20px',
        width: '730px', // Adjust the size as needed
        height: '650px',
    },
};

// Add keyframes for animation
const styleSheet = document.styleSheets[0];
const keyframes =
    `@keyframes progress-stripes {
        from { background-position: 0 0; }
        to { background-position: 40px 0; }
    }`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default NewScreen;
