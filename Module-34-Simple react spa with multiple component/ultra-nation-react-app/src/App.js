import React from 'react';
import {useState,useEffect} from 'react';
import Country from './components/Country/Country';
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
        countries.map(country => <Country country={country} key={country.name.common}></Country>)
      }
    </div>
  );
}

export default App;
