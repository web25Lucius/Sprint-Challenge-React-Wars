import React, { useState, useEffect } from "react";
import "./components/StarWars.css";
import './App.css';
import axios from "axios";


export default function App() {
  const [charList, setCharName] = useState([]);

  useEffect(
    () =>
      axios
        .get("https://swapi.co/api/people/")
        .then(response => setCharName(response.data.results))
        .catch(error => console.log("errorrrrr", error.message)),
    []
  );


  //return (
    //     <div className="App">
    //       <h1 className="Header">React Wars</h1>
    //     </div>
    //   );




  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <h2>Which is your favorite character?</h2>
      {charList.map(char => (
        <p>{char.name}</p>
      ))}
    </div>
  );
}















// import React from 'react';
// import './App.css';

// const App = () => {
//   // Try to think through what state you'll need for this app before starting. Then build out
//   // the state properties here.

//   // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
//   // side effect in a component, you want to think about which state and/or props it should
//   // sync up with, if any.

//   return (
//     <div className="App">
//       <h1 className="Header">React Wars</h1>
//     </div>
//   );
// }




// export default App;
