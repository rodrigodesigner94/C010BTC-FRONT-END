import React, { useState, useEffect } from 'react';
import { Figure, Card } from 'react-bootstrap';
import bola from '../../assets/bola.png';
import styled from 'styled-components';
import api from '../../services/Api';

export const Bola = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bola});
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: contain;
  width: 3rem;
  height: 3rem;
  border: none;
  margin: 0.2rem;
`;

// const Div = styled.div`
//   flex-wrap: wrap;
//   display: flex;
//   margin: 2rem;
//   align-items: center;
//   justify-content: center;
// `;

const Div = styled.div`
display: flex;
padding: 3px;
margin: 1px;
text-align: center;
font-weight: bold;
width: 900px;
border-radius: 10px;
background-color: red;

`

export const Bolas = () => {
  const [sorteio, setSorteio] = useState([]);

  useEffect(() =>{
    api.get('/partida').then((response) =>{
      setSorteio(response.data[0].bolaSorteio);
     // console.log(response.data[0].bolaSorteio);
    })
    
  }, []);

  

  const nSorteio = JSON.stringify(sorteio)
  const sorteioInt = nSorteio.split(',').map((item) => parseInt(item));

  //console.log(sorteio + " SORTEIO");
  //React child (found: object with keys {id, cartela, linhacartela, bolaSorteio})
  return( 
    <Figure >
      <Div >
        {/* {Array.from({ length: 30 }).map((_, idx) => (
          <Bola />
        ))} */}

{
 
 sorteioInt.map((item) => {
    return <Div key={item.id}>{item}</Div>
  })
}

      </Div>
    </Figure>
  )
}
