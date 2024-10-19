import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main style={styles.main}>
      <Link to="/dashboard/agent" style={styles.button}>
        Get Started
      </Link>
    </main>
  );
}

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '-20vh',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff', 
    background: 'linear-gradient(to right, #00f, #ff00ff)', 
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none', 
    transition: 'background 0.3s', 
  },
  buttonHover: {
    background: 'linear-gradient(to right, #ff00ff, #00f)', 
  },
};
