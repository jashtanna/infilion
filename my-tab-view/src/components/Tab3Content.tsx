import React, { useState } from 'react';
import HelloTask from './HelloTask';
import UserCard from './UserCard';
import styles from '../styles/Tab3Content.module.css'; 
interface Tab3ContentProps {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }[];
}

const Tab3Content: React.FC<Tab3ContentProps> = ({ data }) => {
  const [number, setNumber] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value));
  };

  return (
    <div className={styles.tab3Container}>
      {/* Hello Task Section */}
      <div className={styles.helloTaskSection}>
        <h3>Hello Task</h3>
        <form>
          <div className="form-group">
            <label htmlFor="numberInput">Enter a number:</label>
            <input
              type="number"
              id="numberInput"
              className="form-control"
              value={number}
              onChange={handleChange}
              placeholder="Enter a number"
              min="1"
            />
          </div>
        </form>
        <HelloTask count={number} />
      </div>
      {/* API Data Section */}
      <div className={styles.apiDataSection}>
        <h2>Data from API:</h2>
        <div className={styles.userCards}>
          {data.length > 0 ? (
            data.map((user) => (
              <div className={styles.userCard} key={user.id}>
                <UserCard user={user} />
              </div>
            ))
          ) : (
            <p className={styles.noData}>No data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tab3Content;
