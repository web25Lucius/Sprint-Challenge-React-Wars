import React , {useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState(); 
  const fetchData = () =>
      fetch('https://swapi.co/api/people/')
      .then(Response => Response.json())
      .then(characters =>{
        const chArray = setCharacters(characters.results); 
      })
      .catch(Response => "ERROR! ERROORRRRR!", Error); 
    
     
   
    
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>setData</div>
      <div>
        <span>{JSON.stringify.setCharacters}</span>
        {useEffect(() => {
      fetchData()
    })}
    
      </div>
    </div>

  
    
  )
}


export default App;