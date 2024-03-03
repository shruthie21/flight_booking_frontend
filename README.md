# flight_booking_frontend

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### Features Implemented

Flight List:
Fetches all flight details from the Django backend and displays them in a table format.
Endpoint: /api/flights/
Method: GET

Search Flight:
Filters flights based on source city, destination city, travel date, and return date.
Sends a POST request to the /api/flights/search/ endpoint.
Displays the filtered flight details on the screen.

###  Features Unable to Implement

Search Flight Display:
Although the backend is able to filter flight details based on search criteria, the implementation to display the filtered flights on the frontend is incomplete.