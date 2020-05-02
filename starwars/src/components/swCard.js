import React from 'react';
import {Card, CardTitle, CardText} from 'reactstrap';

const  SWCard = (props) => {

      
      return (
        <div className="card">
         <Card>
             <CardTitle tag="h3">{props.name}</CardTitle>
             <CardText>
                 <p>DOB:  {props.birth_year}</p>
                 <p>Hair: {props.hair_color}</p>
                 Eye: {props.eye_color}
             </CardText>
        </Card>
        </div>
      );
          }
    
    
    export default SWCard
  