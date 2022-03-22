import React from "react";
import styled from "styled-components";
import api from "../../services/Api";
import { useState, useEffect } from "react";


const Div = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: center;
  padding: 12rem;
  select{
  }
  a{
    margin: 2rem;
  }
`;

const ButtonJ = styled.button`

  border-color: #550000;
  background-color: #ffffff;
  border-width: 0.8rem;
  border-radius: 1rem;
`;

const DivD = styled.div`
  background-color: rgba(245, 245, 245, 0.8);
  padding: 1rem;
  margin: 0.5rem;
  margin-bottom: 100px;
  margin-right: 60px;
  border-radius: 1rem;
  width: 20rem;
  height: 15rem;
  
  h1{
    margin-left: 75px;
    font-family: Arial, Helvetica, sans-serif;
    text-shadow: #669cf2 2px 2px 2px;
  }

  a{
    margin-top: 100px;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1:hover{
    text-shadow: #2770e6 2px 2px 2px;
  }
  `

export const Selecionar = () => {
const [cartela1, setCartela1] = useState([]);



//DELETE PARTIDA
// useEffect(() =>{
//   api.delete('/partida') 
// }, [])


//DELETE CARTELA
// useEffect(() =>{
// api.delete('/cartela')
// }, [])

//POST PARTIDA
useEffect(() =>{
  api.post('/partida', { 
    bolaSorteio: "string",
    premio: "string",
    inicio: "2022-03-22T00:29:51.261Z",
    fim: "2022-03-22T00:29:51.261Z",
    headers: {
      'Content-Type': 'application/json'
    },
  }) 
}, [])

//POST Cartela 1
useEffect(() =>{
  api.post('/cartela', { 
      cartela: 1,
      linhaCartela: "string",
    headers: {
      'Content-Type': 'application/json'
    },
  })
  
}, [])

//POST Cartela 2
useEffect(() =>{
  api.post('/cartela', { 
      cartela: 2,
      linhaCartela: "string",
    headers: {
      'Content-Type': 'application/json'
    },
  })
  
}, [])

//POST Cartela 3
useEffect(() =>{
  api.post('/cartela', { 
      cartela: 3,
      linhaCartela: "string",
    headers: {
      'Content-Type': 'application/json'
    },
  })
  
}, [])


//POST Cartela 4
useEffect(() =>{
  api.post('/cartela', { 
      cartela: 4,
      linhaCartela: "string",
    headers: {
      'Content-Type': 'application/json'
    },
  })
  
}, [])


//GET 1
useEffect(() =>{
  api.get('/cartela').then((response) =>{
    setCartela1(response.data[0].linhaCartela)
    console.log(response.data.length + " Length ");
  })
}, [])


const linhaCartela1 = JSON.stringify(cartela1).replace(/[\\"]/g, '')
const linha1 = JSON.parse(linhaCartela1)
console.log(linha1);



  return(
    <>
    
  <DivD>
    <h1>1 Cartela</h1>
    <a href="/Game" >
        <ButtonJ>Iniciar</ButtonJ>
      </a>
  </DivD>

  <DivD>
  <h1>2 Cartela</h1>
  <a href="/Game2">
        <ButtonJ>Iniciar</ButtonJ>
      </a>
  </DivD>

  <DivD>
  <h1>3 Cartela</h1>
  <a href="/Game3">
        <ButtonJ>Iniciar</ButtonJ>
      </a>
  </DivD>

  <DivD>
  <h1>4 Cartela</h1>
  <a href="/Game4">
        <ButtonJ>Iniciar</ButtonJ>
      </a>
  </DivD>
  
    {/* <Div className="input-group"> 
      <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
        <option selected>Quantidade de cartelas</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <span className="input-group-text">$</span>
      <span className="input-group-text">0.00</span>  
    </Div> */}
 
    </>
  )
}
