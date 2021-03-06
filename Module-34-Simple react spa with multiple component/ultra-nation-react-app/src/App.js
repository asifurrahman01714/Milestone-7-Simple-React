import React from 'react';
import {useState,useEffect} from 'react';
import Cart from './components/Cart/Cart';
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

  
  return (
    <div>
      <div style={{border:'3px solid lightgray', textAlign:'center'}}>
        <h1>Total Countries: {countries.length}</h1>
        <Cart newCart={newCart}></Cart>
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
