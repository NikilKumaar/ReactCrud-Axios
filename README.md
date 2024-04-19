# CRUD-AXIOS

# React User Management App

This is a simple React application that allows users to perform CRUD (Create, Read, Update, Delete) operations on user data. It uses Axios to fetch and interact with a mock API provided by [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/users).

## Features

- Display a list of existing users from the mock API.
- Add new users with their name, email, and phone number.
- Edit existing user records.
- Delete user records.
- Clean and responsive user interface for easy navigation.

## Technologies Used

- React
- Axios
- Bootstrap (for UI styling)
- React Router DOM

## Setup

Follow these steps to set up and run the application locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/NikilKumaar/ReactCrud-Axios.git

2. Navigate to the project directory:

    ```bash
    simply open the file for the project directory
    
3. Install dependencies:

   ```bash
   npm install

4. Start the development server:

   ```bash
   npm start


#Open your web browser and access the application at http://localhost:5173.


##Usage

* To view the list of existing users, simply open the application. The user data will be fetched from the mock API and displayed on the homepage.

* To add a new user, click the "Add User" button and fill out the form with the user's name, email, and phone number. Click the "Save" button to add the user to the list.

* To edit an existing user, click the "Edit" button next to the user's information. Update the user details and click the "Save" button to save the changes.

* To delete a user, click the "Delete" button next to the user's information. Confirm the deletion when prompted.

##API Interaction

*  This application interacts with the mock API provided by jsonplaceholder.typicode.com/users to fetch, add, edit, and delete user records.
   Axios is used for making HTTP requests to the API endpoints.

##Folder Structure

src/ - Contains the application source code.
 `components/ - React components used in the application and context folder for using contextAPI.
 `App.js - The main application component.
public/ - Static assets and HTML template.
package.json - Dependencies and scripts.
README.md - This file.

# Netlify Deployed URL

https://reactcrud-axios.netlify.app
