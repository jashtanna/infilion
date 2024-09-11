import React from 'react';

interface Tab2ContentProps {
  onButtonClick: () => void;
}

const Tab2Content: React.FC<Tab2ContentProps> = ({ onButtonClick }) => {
  return (
    <div>
      <button onClick={onButtonClick}>Go to Tab 3 and Load Data</button>
    </div>
  );
};

export default Tab2Content;
