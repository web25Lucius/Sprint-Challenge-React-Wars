import React from 'react';
import StarWars from './components/StarWars';
// import bootstrap from 'bootstrap';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarWars />
    </div>
  );
}

export default App;
