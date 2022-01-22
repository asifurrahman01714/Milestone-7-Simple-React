import './App.css';
import { useState,useEffect } from 'react/cjs/react.development';
import fakeDataJson from './fakeData/data.json';
import fakeDataJs from './fakeData/data.js';
import Familiar from './components/Familiar/Familiar';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
  const [fakePerson, setFakePerson] = useState([]);
  useEffect(() => {
    setFakePerson(fakeDataJs);
  },[])
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
  const products = [
    {name: 'PhotoShop', price:"$100"},
    {name: 'Illustrator', price:"$70"},
    {name: 'Debut', price:"$200"},
  ]
  const [familiar, setFamiliar] = useState(false);
  return (
    <div className="App">
      <Home/>
      <Header/>
      <header className="App-header">
        <h1>The man is familiar to you : {familiar.toString()}</h1>
        {/* {
          familiar === true? <h2>Hi! How are you friend?</h2>: <h2>Hey, who are you?</h2>
        } */}
        <button onClick={() =>setFamiliar(!familiar)}>Toggle</button>
        <Familiar familiar={familiar}/>
        <h2>FakePerson : {fakePerson.length}</h2>
        {
          fakePerson.map(person => <li>{`${person.first_name} ${person.first_name}`}</li>)
        }
        <RandomUser></RandomUser>
        <MovieCounter />
        <User></User>
        <Counter></Counter>
        {
          // nayoks.map(nayok=> console.log(nayok))
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
        
      </header>
    </div>
  );
}
// Let's create a counter component named randomUser'
const RandomUser = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
  const timer = setInterval(() => {
    // console.log('This will run after 1 second!')
    fetch('https://randomuser.me/api/')
      .then(res=> res.json())
      .then(data=> {
        // console.log(data.results[0].name);
        setUser(data.results[0].name);
      })
  }, 1000);
  return () => clearInterval(timer);

  },[])
  return(
    <div>
      <h1>My Name is :{`${user.title} ${user.first} ${user.last}`}</h1>
    </div>
  )
  }
 
// Let's create a counter component named movieCounter'
function MovieCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Total movies: {count}</h1>
      <button onClick={handleClick}>Add Movie</button>
      <button onClick={()=> {count >=1 && setCount(count-1)}}>Decrement</button>
      <MovieDisplay count={count}></MovieDisplay>
      <MovieDisplay count={count+5}></MovieDisplay>
      <MovieDisplay count={count+10}></MovieDisplay>
    </div>
  );
}
const MovieDisplay = (props) => {
  return (
    <div>
      <h1>Movie Display:{props.count}</h1>
    </div>
  );
}


// Let's create a counter component$0'
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = ()=>{
    // console.log('Handle clicked')
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
    // console.log("Using useEffect");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> {
      // console.log(data);
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
  // console.log(props.singleProduct);
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
