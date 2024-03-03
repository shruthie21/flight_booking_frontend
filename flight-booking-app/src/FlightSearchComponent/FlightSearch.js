import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FlightSearch.css'; 

const FlightSearch = () => {
  const [flights, setFlights] = useState([]);
  const [sourceCity, setSourceCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/flights/');
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/flights/search/', {
        sourceCity,
        destinationCity,
        travelDate,
        returnDate,
      });
      setFlights(response.data);
    } catch (error) {
      console.error('Error searching flights:', error);
    }
  };

  return (
    <div>
      <h1>Flight Search</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div>
          <label>Source City:</label>
          <input
            type="text"
            value={sourceCity}
            onChange={(e) => setSourceCity(e.target.value)}
          />
        </div>
        <div>
          <label>Destination City:</label>
          <input
            type="text"
            value={destinationCity}
            onChange={(e) => setDestinationCity(e.target.value)}
          />
        </div>
        <div>
          <label>Travel Date:</label>
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
          />
        </div>
        <div>
          <label>Return Date:</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
      <br />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>Airline Name</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
              <th>Duration</th>
              <th>No. of Stops</th>
              <th>Price</th>
              <th>Source City</th>
              <th>Destination City</th>
              <th>Travel Date</th>
              <th>Return Date</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => (
              <tr key={index}>
                <td>{flight.flight_number}</td>
                <td>{flight.airline_name}</td>
                <td>{flight.departure_time}</td>
                <td>{flight.arrival_time}</td>
                <td>{flight.duration}</td>
                <td>{flight.no_of_stops}</td>
                <td>{flight.price}</td>
                <td>{flight.source_city}</td>
                <td>{flight.destination_city}</td>
                <td>{flight.travel_date}</td>
                <td>{flight.return_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlightSearch;