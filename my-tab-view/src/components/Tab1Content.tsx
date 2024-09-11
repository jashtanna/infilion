import React from 'react';
import styles from '../styles/Tab1Content.module.css'; 

const Tab1Content: React.FC = () => {
  const handleButtonClick = () => {
    window.open('https://www.google.com', '_blank');
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleButtonClick}>
        Go to Google
      </button>
    </div>
  );
};

export default Tab1Content;
