import React from 'react';
import {useState,useEffect} from 'react';
function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  },[])
  return (
    <div>
      <h1>Total countries: {countries.length}</h1>
      {
        countries.map(country => <li key={country.name.common}>{country.name.common}</li>)
      }
    </div>
  );
}

export default App;
