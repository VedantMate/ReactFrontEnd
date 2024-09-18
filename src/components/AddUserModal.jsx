import React from 'react';
import { useForm } from 'react-hook-form';
import { useAddUserMutation } from '../features/apiSlice';

const AddUserModal = ({ closeModal }) => {
  const { register, handleSubmit } = useForm();
  const [addUser] = useAddUserMutation();

  const onSubmit = (data) => {
    addUser(data);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-transform transform scale-95 hover:scale-100 duration-200">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Add New User</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register('first_name')}
            placeholder="First Name"
            className="border p-3 rounded w-full outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            {...register('last_name')}
            placeholder="Last Name"
            className="border p-3 rounded w-full outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            {...register('email')}
            placeholder="Email"
            className="border p-3 rounded w-full outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            required
          />
          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
            >
              Add User
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 py-2 px-6 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
