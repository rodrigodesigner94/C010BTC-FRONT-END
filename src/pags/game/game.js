import React from "react";
import {Col , Card , Row  }from "react-bootstrap";
import bola from "../../components/img/bola.png"


export const Game =()=>{

return (
    <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 4 }).map((_, idx) => (
      <Col>
        <Card>
          <Card.Img variant="top" src={bola}/>
        </Card>
      </Col>
    ))}
  </Row>
    
);

};