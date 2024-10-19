import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default function GradientSection() {
  // Initialize AOS for animations on scroll
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div style={styles.section}>
        <h1 style={styles.h1Text}>Welcome to SuperHuman AI</h1>
        <p style={styles.pText}>
          SuperHuman AI is an AI Agent built to automate and empower job aspirants in their journey towards professional success.
        </p>
      </div>

      {/* Need for SuperHuman AI Section */}
      <div style={styles.needSection}>
        <h1 style={styles.h1Text}>Need for SuperHuman AI</h1>

        <div style={styles.infoDiv} data-aos="fade-right">
          <img src="" alt="AI Empowerment" style={styles.image} />
          <p style={styles.pText}>
            In today's dynamic job market, the job application process is time-consuming and daunting, creating a need for a solution that streamlines and automates the process.
          </p>
        </div>

        <div style={styles.infoDiv} data-aos="fade-left">
          <p style={styles.pText}>
            AI has created a lot of impact in replacing a few traditional roles with AI roles. We need a new tool to speed up the process of reaching out to companies and getting placed.
          </p>
          <img src="your-image-url-2.jpg" alt="AI Preparation" style={styles.image} />
        </div>

        {/* Third div: image left, text right */}
        <div style={styles.infoDiv} data-aos="fade-right">
          <img src="your-image-url-3.jpg" alt="AI Success" style={styles.image} />
          <p style={styles.pText}>
            ● Inefficient job search processes. <br />
            ● Lack of personalized career guidance. <br />
            ● Difficulty in identifying and developing relevant skills. <br />
            ● Limited access to curated learning resources.
          </p>
        </div>
      </div>

      {/* What We Do Section */}
      <div style={styles.whatWeDoSection}>
        <h1 style={styles.h1Text}>What We Do</h1>

        <div style={styles.cardsContainer}>
          <div style={{ ...styles.card, ...styles.cardHover }} data-aos="fade-up">
            <h2 style={styles.cardTitle}>Resume Parser</h2>
            <p style={styles.cardDescription}>
              Our AI-powered resume parser extracts key information and formats it for better job search visibility.
            </p>
          </div>

          <div style={{ ...styles.card, ...styles.cardHover }} data-aos="fade-up" data-aos-delay="200">
            <h2 style={styles.cardTitle}>Personalized Curated Learning Assistant</h2>
            <p style={styles.cardDescription}>
              A learning assistant that curates personalized content to help you upskill and stay competitive in the job market.
            </p>
          </div>

          <div style={{ ...styles.card, ...styles.cardHover }} data-aos="fade-up" data-aos-delay="400">
            <h2 style={styles.cardTitle}>AI Job Search Automation Tool</h2>
            <p style={styles.cardDescription}>
              Automate your job search with AI that finds and applies for jobs tailored to your skills and preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  section: {
    height: '700px',
    background: 'linear-gradient(to right, #ff00ff, #00f)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    padding: '20px',
  },
  h1Text: {
    margin: '40px 0',
    fontSize: '50px',
    '@media (max-width: 768px)': {
      fontSize: '32px',
    },
  },
  pText: {
    margin: '0',
    fontSize: '20px',
    maxWidth: '600px',
    padding: '0 20px',
    '@media (max-width: 768px)': {
      fontSize: '16px',
    },
  },
  needSection: {
    background: '#f9f9f9',
    padding: '50px 20px',
    textAlign: 'center',
  },
  infoDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '40px 0',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  image: {
    width: '300px',
    height: 'auto',
    borderRadius: '10px',
    marginRight: '20px',
    '@media (max-width: 768px)': {
      marginRight: '0',
      marginBottom: '20px',
    },
  },

  // What We Do Section
  whatWeDoSection: {
    background: '#f3f3f3',
    padding: '50px 20px',
    textAlign: 'center',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap', 
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardTitle: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  },
  cardDescription: {
    fontSize: '16px',
    color: '#555',
  },
  cardHover: {
    ':hover': {
      transform: 'scale(1.05)', 
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', 
    },
  },
};
