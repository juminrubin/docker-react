import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi There! How are you?
        </p>
        <p>
          I am fine. Thank you. How about you?
        </p>
        <a href=".">learn react</a>
      </header>
    </div>
  );
}

export default App;
