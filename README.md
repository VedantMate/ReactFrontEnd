# User Dashboard with Redux Toolkit, RTK Query, and Tailwind CSS

This project is a simple User Dashboard built with **React**, **Redux Toolkit**, **RTK Query**, and **Tailwind CSS**. It allows users to view a list of users, add new users, and update existing users. The dummy data is fetched from [reqres.in](https://reqres.in) and managed using RTK Query for API calls. The project also includes modals for adding and updating user information.

## Features

- **View Users**: Displays users in a card view fetched from the API.
- **Add User**: Opens a modal to add a new user to the list.
- **Update User**: Allows updating user information through a modal.
- **State Management**: Managed with **Redux Toolkit** and **RTK Query**.
- **UI**: Styled with **Tailwind CSS** for a clean and responsive design.

## Installation

## Usage
- **Viewing Users:** Upon loading, the app fetches and displays a list of users from the API.

- **Adding a User:** Click the "Add User" button to open the modal, fill out the form, and submit. The user will be added to the list (note: reqres.in does not persist added data, so the new user will disappear on refresh).

- **Updating a User:** Click on any user card to select and update the user details. The update modal will appear allowing you to modify the user's information.

## Key Files

- **apiSlice.js:** Defines the RTK Query API calls for fetching and adding users.

- **userSlice.js:** Redux slice for managing user state such as storing users and updating them.

- **AddUserModal.jsx:** Component with the form and functionality for adding a new user.

- **UpdateUserModal.jsx:** Component for updating an existing user's details.

## Technologies

- **React:** Frontend framework.
- **Redux Toolkit:** For managing global state.
- **RTK Query:** For handling API calls.
- **Tailwind CSS:** For styling the user interface.
- **reqres.in:** Dummy API for testing

1. Clone the repository:

   ```bash
   git clone https://github.com/VedantMate/reactfrontend.git
   cd user-dashboard

   npm install

   npm start
``` 
