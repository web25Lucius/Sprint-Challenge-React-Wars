import React , {useState, useEffect} from 'react';
import './App.css';


function Characters () {
const [data, setData] = useState (); 
const [Error, setError] = useState (); 

  useEffect (() => {
    fetch('http https://swapi.co/api/people/names/')
    // console.log(Response);
    .then (Response => setData(Response.data))
    .catch(Error => setError(Error.Response))
  }, []);  

}

const App = () => {
 


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>setData</div>
    </div>
    
  );
}

export default App;
