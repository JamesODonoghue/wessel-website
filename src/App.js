import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header class="header">
        <h1>Beth Wessel Kroeschell</h1>
        <div class="navbar">
          <div class="navbar__link">
            <a href="/about">About</a>
          </div>
          <div class="navbar__link">
            <a href="/about">Volunteer</a>
          </div>
          <div class="navbar__link">
            <a href="/about">Bio</a>
          </div>
          <div class="donate-button">
            <button>Donate</button>
          </div>
        </div>
      </header>
      <section>

      </section>
      <footer></footer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
