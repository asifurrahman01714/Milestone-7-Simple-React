import './App.css';
import { useState, createContext, useContext } from "react";
import Home from './components/Home/Home';
import Header from './components/Header/Header';

// Let's we use context api to pass data
  // First import the context
  // Then Wrap child components in the Context Provider and supply the state value.
  // Now, all components in this tree will have access to the user Context.
export const CountContext = createContext();
export const CategoryContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [category, setCategory]= useState('Laptop')
  // so pass multiple value using third bracket.
  return (
   <CategoryContext.Provider value={[category, setCategory]}>
      <CountContext.Provider value={[count, setCount]}> 
      <h1>This count is : {count}</h1>
      <h2>The catgory is :{category}</h2>
      <Home />
      <Header/>
    </CountContext.Provider>
   </CategoryContext.Provider>
  );
}

export default App;
