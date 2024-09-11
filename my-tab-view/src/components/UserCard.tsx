import React from 'react';

interface UserCardProps {
  user: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="card mb-4" style={{ width: '18rem' }}>
      <img src={user.avatar} className="card-img-top" alt={`${user.first_name} ${user.last_name}`} />
      <div className="card-body">
        <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
        <p className="card-text">Email: {user.email}</p>
        <p className="card-text">ID: {user.id}</p>
      </div>
    </div>
  );
};

export default UserCard;
