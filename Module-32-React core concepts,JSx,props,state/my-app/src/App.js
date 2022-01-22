import './App.css';
import { useState, createContext, useContext } from "react";
import Home from './components/Home/Home';
import Header from './components/Header/Header';

// Let's we use context api to pass data
  // First import the context
  // Then Wrap child components in the Context Provider and supply the state value.
  // Now, all components in this tree will have access to the user Context.
const UserContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <UserContext.Provider value={count}>
      <h1>This count is : {count}</h1>
      <Home count={count}/>
      <Header/>
      <button onClick={()=> setCount(count+1)}>Increase the count</button>
    </UserContext.Provider>
  );
}

export default App;
