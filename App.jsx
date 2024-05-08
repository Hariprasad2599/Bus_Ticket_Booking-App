
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BusSearch from './components/BusSearch';
import { locations, Buses } from '../utils';
import SeatsAvailable from './components/SeatsAvailable'; // Ensure correct import path

function App() {
  const [searchState, setSearchState] = useState({
    from: locations[0],
    to: locations[2],
    date: '',
  });

  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<BusSearch searchState={searchState} setSearchState={setSearchState} />}
          />
          <Route path="/bus/:id/seats" element={<SeatsAvailable />} /> 
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
