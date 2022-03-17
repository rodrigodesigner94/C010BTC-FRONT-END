import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BackgroundGame } from "../../components/Container/telaGame";
import { Bolas } from "../../components/Bolas";
import { Cartela } from "../../components/Cartela";

export const Game =()=>{
  const [ sorteio, setSorteios ] = useState([]);
  const [ cartela, setCartela ] = useState([]);

  const getCartela = async () => {
    await axios.get('/cartela').then((response) => {
      setCartela(response.data);
      console.log(response.data[0].linha1cartela);  
    });
  };

  const getSorteio = async () => {
    await axios.get('/bola').then((response) => {
      setSorteios(response.data);
      console.log(response.data[0]);  
    });
  };

  useEffect(() =>{
    getSorteio();
    getCartela();
  }, []);

return (
    <BackgroundGame>
      <Bolas />
      <div className='bolas'>
        {sorteio.map((item) => (
          <div key={item.id}>{item.bolaSorteio}</div>
        ))}
      </div>
      <div>
        {cartela.map((item) => (
          <li key={item.id}><a href='/bola'>{item.linha1cartela}</a></li>
        ))}
      </div>
      <Cartela />
    </BackgroundGame>
  );
};
