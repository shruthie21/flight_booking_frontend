import React from 'react';
import FlightSearch from './FlightSearch';

const App = () => {
  return (
    <div>
      <div style={styles.center}>
        <h1>Flight Booking Application</h1>
        <FlightSearch />
      </div>
    </div>
  );
};

const styles = {  
  center: {
    textAlign: 'center',
  },
};

export default App;