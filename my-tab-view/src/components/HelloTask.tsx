import React from 'react';

interface HelloTaskProps {
  count: number;
}

const HelloTask: React.FC<HelloTaskProps> = ({ count }) => {
  const printHello = (n: number): string[] => {
    if (n <= 0) return ['STOP'];
    return [...printHello(n - 1), 'Hello Task'];
  };

  return (
    <div>
      {printHello(count).map((text, index) => (
        <div key={index}>{text}</div>
      ))}
    </div>
  );
};

export default HelloTask;
