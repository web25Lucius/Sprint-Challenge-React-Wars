import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SWCard from './swCard'



const  StarWars = () => {
  const [charList, setCharList] = useState([]);
  
   useEffect(
      () =>
        axios
          .get("https://swapi.py4e.com/api/people/")
          .then(response => setCharList(response.data.results))
          .catch(error => console.log("errorrrrr, this is not the droid you're looking for", error.message)),
      []
    );
    
    return (
      <div className="card">
        {charList.map(char => (
         <SWCard name={char.name} birth_year={char.birth_year} hair_color={char.hair_color} eye_color={char.eye_color}/>
        
      )
      )};
      </div>
    );
        }
  
  
  export default StarWars


















// const  Card = () => {
// const [charList, setCharName] = useState([]);

//  useEffect(
//     () =>
//       axios
//         .get("https://swapi.co/api/people/")
//         .then(response => setCharName(response.data.results))
//         .catch(error => console.log("errorrrrr", error.message)),
//     []
//   );
  
//   return (
//     <div className="card">
//       {charList.map(char => (
//         <StyledCard style={{...StyleCard}}>{char.name}</StyledCard>
//       ))}
//     </div>
//   );
//       }


// export default Card











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