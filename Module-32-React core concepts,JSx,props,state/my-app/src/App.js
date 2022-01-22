import './App.css';
import { createContext, useState } from 'react/cjs/react.development';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
  // Let's we use context api to pass data
  // First import the context
  // Then Wrap child components in the Context Provider and supply the state value.
  const UserContext = createContext();
  const [count, setCount] = useState(0);
  return (
    <UserContext.Provider value={count}>
      <h1>This count is : {count}</h1>
      <Home/>
      <Header/>
      <button onClick={()=> setCount(count+1)}>Increase the count</button>
    </UserContext.Provider>
  );
}

export default App;
