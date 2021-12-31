import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    name: 'Asif Ur Rahman',
    age: 29,
    job: 'Developer',
    hobbies: ['Sports', 'Cooking']
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Starting a new journey with reach</p>
        <h1>My heading : {2+5}</h1>
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

export default App;
