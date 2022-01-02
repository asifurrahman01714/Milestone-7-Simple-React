import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react/cjs/react.development';



// Let's create a counter component$0'
const Counter = () => {
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
    <div>
      <h1>User Length:{users.length} </h1>
    {
      users.map(user =><li>{user.name}</li>)
    }
    </div>
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
