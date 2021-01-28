import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Head} from './components/Head'

function App() {
  return (
    <div className="App">
      <Head title ="Hello" isActive/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello <code>src/App.tsx</code> and save to reload.
        </p>
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
