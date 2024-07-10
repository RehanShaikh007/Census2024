# Census 2024

This project is a React application designed to manage a list of people. Users can add new individuals, save their information in local storage, and retrieve their information based on their Aadhar number. The application is responsive and works seamlessly on mobile, tablet, and desktop devices.

## Features

- **Add New Person:** Allows users to add new people with details such as Name, Date of Birth, Aadhar Number, Mobile Number, and Age (calculated automatically from DOB).
- **Retrieve Information:** Users can retrieve the details of a person by entering their Aadhar Number.
- **Local Storage:** The app uses the browser's local storage to save and retrieve data, ensuring persistence even after page refreshes.
- **Responsive Design:** The app is designed to be responsive and works well on mobile, tablet, and desktop devices.

## Usage
### Add New Person
- Navigate to the "Add New Person" tab.
- Click the "Add New Person" button to add a new row to the table.
- Fill in the details (Name, Date of Birth, Aadhar Number, Mobile Number).
- Click "Save" to save the person's details. The Age will be calculated automatically from the Date of Birth.
- Click "Delete" to remove a person's details. If the row is unsaved, it will be removed from the table. If it is saved, it will be removed from local storage first, then from the table.

### Retrieve Information
- Navigate to the "Retrieve Information" tab.
- Enter the Aadhar Number.
- Click "Retrieve" to fetch the person's details from local storage.
- If a match is found, the person's details will be displayed in a table. Otherwise, a "No match found" message will be shown.

## Contributing
### Contributions are welcome! Please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -m 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Open a Pull Request.

## Acknowledgements
- React
- Create React App

## Prerequisites

- Node.js (version 12 or later)
- npm (version 6 or later)

## License
This project is licensed under the MIT License.

