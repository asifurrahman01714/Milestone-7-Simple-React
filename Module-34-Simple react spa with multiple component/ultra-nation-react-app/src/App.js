import React from 'react';
import {useState,useEffect} from 'react';
import Country from './components/Country/Country';
function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  },[])
  const addCountries = (country) => {
    setCart([...cart,country]);
  }
  function removeDuplicates(cart) {
    return cart.filter((item, index) => cart.indexOf(item) === index);
    }
console.log(removeDuplicates(cart));
const newCart = removeDuplicates(cart);

  const totalPopulation = newCart.reduce((totalPopulation,country) => totalPopulation + country.population,0);
  // console.log(cart);
  const countryAdded = newCart.map(country =>country.name.common);
  // console.log(countryAdded);
  
  return (
    <div>
      <div style={{border:'3px solid lightgray', textAlign:'center'}}>
        <h1>Total countries: {countries.length}</h1>
        <h2>Add countries: {newCart.length}</h2>
        <h2>Total population: {totalPopulation}</h2>
        <h2>Country Added: {countryAdded.join(',')}</h2>
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
