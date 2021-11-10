import React from "react";
import Card from "react-bootstrap/Card";

export default function PieceCard({ id, Name, img,deletHandler }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}> 
        <h1> {Name}  </h1>
        <Card.Img variant="top" src={img}   style={{ width : '220px' , height : '220px' }}/>  
        
        <button onClick={(e) => deletHandler(e,id)} > x </button>
       
      </Card>
    </div>
  );
}
