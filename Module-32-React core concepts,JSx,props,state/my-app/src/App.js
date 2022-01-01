import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react/cjs/react.development';

function App() {
  const person = {
    name: 'Asif Ur Rahman',
    age: 29,
    job: 'Developer',
    hobbies: ['Sports', 'Cooking']
  };
  
  const style = {
    backgroundColor: 'cyan',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    color: 'black'
  };
  const nayoks = ['a', 'b', 'c', 'd', 'e', 'f'];
  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);
  const products = [
    {name: 'PhotoShop', price:"$100"},
    {name: 'Illustrator', price:"$70"},
    {name: 'Debut', price:"$200"},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <User></User>
        <Counter></Counter>
        {
          nayoks.map(nayok=> console.log(nayok))
        }
        {
          products.map(product=> <li>{product.name}</li>)
        }
        {
          products.map(product =><Product singleProduct={product}></Product>)
        }
        <Person></Person>
        <Modeling nayok={nayoks[0]} nayika="Mousumi"></Modeling>
        <Modeling nayok={nayoks[1]} nayika="Shabana"></Modeling>
        <Modeling nayok={nayoks[2]} nayika="Cheka"></Modeling>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={style}>Starting a new journey with reach</p>
        <h1 style={{backgroundColor:'red'}}>My heading : {2+5}</h1>
        <h1>My Name:{person.name}</h1>
        <h1>My Name:{person.job}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Let's create a counter component$0'
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = ()=>{
    console.log('Handle clicked')
    // const newCount = count + 1;
    // setCount(newCount);
    setCount(count + 1);
  };
  const handleDecrease =()=>{
    // const newCount = count - 1;
    // newCount >=0 && setCount(newCount);
    count >=1 && setCount(count - 1);
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={()=>setCount(count + 1)}>Increase</button>
      <button onMouseMove={()=>count >=1 && setCount(count - 1)}>Decrease</button>
    </div>
  )
}
// Let's create a user component
function User() {
  const [users, setUsers] = useState([]);
  // Our json place holder user has array of length 10,,, so declaring userState with an empty array as initial value.
  useEffect(() => {
    console.log("Using useEffect");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> {
      console.log(data);
      setUsers(data)
    })
  },[]) // Avoiding auto load use the empty array in useEffect
  return(
    <h1>User Length:{users.length} </h1>
  )
}
// Let's create a person component
function Person(){
  const personStyle={
    border: '5px solid blue',
    margin:'10px'
  }
  
  return(
    <div style={personStyle}>
      <h1>My name is : Asif Ur Rahman</h1>
      <h1>My age is : 23</h1>
    </div>
  );
}
// Let's create a modeling component

function Modeling(props) {
  // console.log(props);
  const {nayok, nayika}=props;
  return(
    <div>
      <h1>Nayok: {nayok}</h1>
      <h1>Nayok: {nayika}</h1>
    </div>
  );
}
// Let's create a product component
function Product(props) {
  console.log(props.singleProduct);
  const {name, price} = props.singleProduct;
  const productStyle ={
    backgroundColor:'gray',
    border:'1px solid blue',
    borderRadius:'15px'
  }
  return(
    <div style={productStyle}>
      <h2>Product Name:{name}</h2>
      <h2>Product Price:{price}</h2>
    </div>
  );
}
export default App;
