

# Guest Room Booking Web App

This is a Guest Room Booking web application built with React and Ant Design.

## Getting Started

To get started with the development and deployment of this web app, follow the instructions below.

### Prerequisites

- Node.js: Make sure you have Node.js installed on your system. You can download it from [https://nodejs.org](https://nodejs.org).

### Installing Dependencies

1. Clone the repository to your local machine:

```bash
git clone  https://github.com/GayathriCodes2/GUEST-ROOM-APPLICATION.git
cd GUEST-ROOM-APPLICATION
```

2. Install the project dependencies:

```bash
npm install
```

### Running the Development Server

To run the app in development mode, use the following command:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Building for Production

To build the app for production, use the following command:

```bash
npm run build
```

This will create an optimized production build in the `build` directory.

### Deployment

You can deploy the app to a hosting service of your choice. For example, to deploy on GitHub Pages, you can use the `gh-pages` package:

1. Install the `gh-pages` package as a dev dependency:

```bash
npm install gh-pages --save-dev
```

2. Update the `package.json` file with the homepage and predeploy and deploy scripts:

```json
"homepage": " https://github.com/GayathriCodes2/GUEST-ROOM-APPLICATION.git",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy the app using the following command:

```bash
npm run deploy
```

The app will be deployed to the GitHub Pages URL specified in the `homepage` field.

### Accessing the Admin Page

To access the admin page, use the following credentials on the login page:

- Username: admin
- Password: admin

## Features

- Login and Registration: Users can register and login to the app.
- Hotel Listing: Users can view a list of available hotels and their details.
- Room Booking: Users can book rooms in the hotels.
- Payment: Users can make payments for their bookings.
- Admin Side: Admin users can perform actions such as adding new hotels/Rooms