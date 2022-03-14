import React from "react";
import bola from '../../assets/bola.png';
import { Col , Card , Row } from "react-bootstrap";
import { Background } from "../../components/Container/background";

export const Game =()=>{

return (
  <Background>
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={bola}/>
          </Card>
        </Col>
      ))}
    </Row>
  </Background>
  );
};