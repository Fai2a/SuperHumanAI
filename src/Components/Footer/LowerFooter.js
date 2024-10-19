import React from 'react';

export default function LowerFooter() {
  return (
    <div style={styles.footer}>
      <p style={styles.footerText}>© 2024 | All Rights Reserved</p>
    </div>
  );
}

const styles = {
  footer: {
    height: '50px', 
    background: 'linear-gradient(to right, #00f, #ff00ff)', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff', 
    marginTop: '10px', 
  },
  footerText: {
    margin: '0', 
    fontSize: '16px', 
  },
};

