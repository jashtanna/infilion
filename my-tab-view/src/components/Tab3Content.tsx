import React, { useState } from 'react';
import HelloTask from './HelloTask';
import UserCard from './UserCard';

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
    <div className="container mt-4">
      {/* Hello Task Section */}
      <div className="mb-4">
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
      <div>
        <h2>Data from API:</h2>
        <div className="row">
          {data.length > 0 ? (
            data.map((user) => (
              <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={user.id}>
                <UserCard user={user} />
              </div>
            ))
          ) : (
            <p>No data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tab3Content;
