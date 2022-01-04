import React from 'react';
import {useState,useEffect} from 'react';
import Country from './components/Country/Country';
function App() {
  const [countries, setCountries] = useState([]);
  let [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  },[])
  const addCountries = (country) => {
    cart = [...cart,country]
    setCart(cart);
  }
  const totalPopulation = cart.reduce((totalPopulation,country) => totalPopulation + country.population,0);
  console.log(cart);
  return (
    <div>
      <div style={{border:'3px solid lightgray', textAlign:'center'}}>
        <h1>Total countries: {countries.length}</h1>
        <h2>Add countries: {cart.length}</h2>
        <h2>Total population: {totalPopulation}</h2>
      </div>
      <div style={{display:'grid', gridTemplateColumns: 'auto auto'}}>
        {
          countries.map(country => <Country addCountries={addCountries} country={country} key={country.name.common}></Country>)
        }
      </div>
    </div>
  );
}

export default App;
