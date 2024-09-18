import React, { useState } from 'react';
import { useGetUsersQuery } from './features/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './components/UserCard';
import AddUserModal from './components/AddUserModal';
import UpdateUserModal from './components/UpdateUserModal';
import { setSelectedUser } from './features/userSlice';

const App = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.user.selectedUser);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  const handleCardClick = (user) => {
    dispatch(setSelectedUser(user));
    setShowUpdateModal(true);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => setShowAddModal(true)}
      >
        Add User
      </button>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {data?.data.map((user) => (
          <UserCard key={user.id} user={user} onClick={() => handleCardClick(user)} />
        ))}
      </div>

      {showAddModal && <AddUserModal closeModal={() => setShowAddModal(false)} />}
      {showUpdateModal && <UpdateUserModal closeModal={() => setShowUpdateModal(false)} />}
    </div>
  );
};

export default App;
