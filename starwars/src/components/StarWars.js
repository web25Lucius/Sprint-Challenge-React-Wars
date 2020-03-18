import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from 'styled-components'
import {Card as StyledCard} from '@material-ui/core'

const StyleCard = {
  color: 'palevioletred',
  fontWeight: 'bold',
  padding: 15, 
  backgroundColor: 'white' 
}



const  Card = () => {
const [charList, setCharName] = useState([]);

 useEffect(
    () =>
      axios
        .get("https://swapi.co/api/people/")
        .then(response => setCharName(response.data.results))
        .catch(error => console.log("errorrrrr", error.message)),
    []
  );
  
  return (
    <div className="card">
      {charList.map(char => (
        <StyledCard style={{...StyleCard}}>{char.name}</StyledCard>
      ))}
    </div>
  );
      }


export default Card











// This could be react-router-dom's Link for example
// const Link = ({ className, children }) => (
//   <a className={className}>
//     {children}
//   </a>
// );
// const StyledLink = styled(Link)`
//   color: palevioletred;
//   font-weight: bold;
// `;
// render(
//   <div>
//     <Link>Unstyled, boring Link</Link>
//     <br />
//     <StyledLink>Styled, exciting Link</StyledLink>
//   </div>
// );





// <div className="App">
//       <h1>React Wars</h1>
//       <h2>Which is your favorite character?</h2>
//       {charList.map(char => (
//         <Card>{char.name}</Card>
//       ))}
//     </div>