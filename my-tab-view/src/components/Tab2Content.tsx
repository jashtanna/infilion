import React from 'react';
import styles from '../styles/Tab2Content.module.css';
interface Tab2ContentProps {
  onButtonClick: () => void;
}

const Tab2Content: React.FC<Tab2ContentProps> = ({ onButtonClick }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onButtonClick}>
        Go to Tab 3 and Load Data
      </button>
    </div>
  );
};

export default Tab2Content;
