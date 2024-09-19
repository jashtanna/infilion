import React, { useEffect, useState } from 'react';
import styles from '../styles/HelloTask.module.css'; 

interface HelloTaskProps {
  count: number;
}

const HelloTask: React.FC<HelloTaskProps> = ({ count }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    // Reset messages if count is 0
    if (count <= 0) {
      setMessages([]);
      setIsRunning(false);
      return;
    }

    const printHello = (n: number): string[] => {
      if (n <= 0) return [];
      return [...printHello(n - 1), 'Hello Task'];
    };

    const helloMessages = [...printHello(count), 'STOP'];
    let index = 0;

    if (!isRunning) {
      setIsRunning(true);

      const interval = setInterval(() => {
        if (index < helloMessages.length) {
          setMessages((prevMessages) => [...prevMessages, helloMessages[index]]);
          index++;
        } else {
          clearInterval(interval);
          setIsRunning(false);
        }
      }, 100); 

      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <div className={styles.helloTaskContainer}>
      {messages.map((text, index) => (
        <div key={index} className={styles.message}>{text}</div>
      ))}
    </div>
  );
};

export default HelloTask;
