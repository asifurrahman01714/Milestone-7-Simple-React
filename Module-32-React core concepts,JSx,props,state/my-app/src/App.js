import './App.css';
import { useState } from 'react/cjs/react.development';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
  // Let's we use context api to pass data
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>This count is : {count}</h1>
      <Home count={count} setCount={setCount}/>
      <Header count={count} setCount={setCount}/>
      <button onClick={()=> setCount(count+1)}>Increase the count</button>
      
    </div>
  );
}

export default App;
