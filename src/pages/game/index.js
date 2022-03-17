import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BackgroundGame } from "../../components/Container/telaGame";
import { Bola, Div } from "../../components/Bolas";
import { DivC } from "../../components/Cartela";

export const Game =()=>{
  // const [ sorteio, setSorteios ] = useState([]);
  // const [ cartela, setCartela ] = useState([]);

  // const getCartela = async () => {
  //   await axios.get('/cartela').then((response) => {
  //     setCartela(response);
  //     console.log(response.data[0].linha1cartela);  
  //   });
  // };

  // const getSorteio = async () => {
  //   await axios.get('/bola').then((response) => {
  //     setSorteios(response);
  //     console.log(response.data[0]);  
  //   });
  // };

  // useEffect(() =>{
  //   getSorteio();
  //   getCartela();
  // }, []);

return (
    <BackgroundGame>
      <Div>
        {Array.from({ length: 30 }).map((_, idx) => (
          <Bola>a</Bola>
        ))}
      </Div>
      <div className='bolas'>
        
      </div>
      <div>
        
      </div>
      <Div>
        <DivC>
          <table>
            <tbody>
              {sorteio.map((item) => (
                <p key={item}> {item}</p>
              ))}
            </tbody>
          </table>
        </DivC>
      </Div>
    </BackgroundGame>
  );
};
