import React from 'react';

const UserCard = ({ user, onClick }) => {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-100 transition duration-300 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={user.avatar}
        alt={user.first_name}
        className="w-16 h-16 rounded-full mx-auto mb-3"
      />
      <h2 className="text-lg font-semibold text-center text-gray-800">
        {user.first_name} {user.last_name}
      </h2>
      <p className="text-center text-gray-500">{user.email}</p>
    </div>
  );
};

export default UserCard;
