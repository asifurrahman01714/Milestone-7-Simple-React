import logo from './logo.svg';
import './App.css';

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
  const products = [
    {name: 'PhotoShop', price:"$100"},
    {name: 'Illustrator', price:"$70"},
    {name: 'Debut', price:"$200"},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Product singleProduct={products[0]}></Product>
        <Product singleProduct={products[1]}></Product>
        <Product singleProduct={products[2]}></Product>
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
