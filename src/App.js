import React from 'react';
import Button from 'react-bootstrap/Button';
import burger from './images/burger.jpeg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage:`url(${burger})` }}>
        <p>
          Welcome to Bruce's Diner
        </p>
        
        <Button variant="secondary">Login</Button>
      </header>
    </div>
  );
}

export default App;
