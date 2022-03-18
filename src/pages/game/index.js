import React from "react";
import api from "../../services/Api";
import { useEffect, useState } from 'react';
import { BackgroundGame } from "../../components/Container/telaGame";
import { Bola, Div } from "../../components/Bolas";
import { DivC } from "../../components/Cartela";
import styled from "styled-components";

export const Game =()=>{
  const [ linha, setLinha ] = useState([]);
  const [ sorteio, setSorteio ] = useState([]);
  

  useEffect(() =>{
    api.get('/cartela').then((response) =>{
      setLinha(response.data[1].linhaCartela)
    })

    api.get('/partida').then((response) =>{
      setSorteio(response.data[0].bolaSorteio);
    })

  }, []);

  const nLinha = JSON.stringify(linha)
  const linha1 = nLinha.split(',').map(function(item){
    return parseInt(item)
  });

  const nSorteio = JSON.stringify(sorteio)
  const sorteioInt = nSorteio.split(',').map((item) => parseInt(item));


  

const marcar = () => {
  const acertos = sorteioInt.filter((numero) =>
  linha1.includes(numero)
  );

 console.log(acertos + " ACERTOS");
}
  


  return (
    <BackgroundGame>
      <Div onChange={marcar()}>
        {sorteioInt.map((item) => (
          <Bola key={item.id}>{item}</Bola>
        ))}
      </Div>
      <Div>
        <DivC>
          <table>
            <tbody>
              {linha1.map((item) => (
                <p key={item.id}> {item}</p>
                ))}
            </tbody>
          </table>
        </DivC>
      </Div>
      <button onClick={marcar}>Resultado</button>
    </BackgroundGame>
  );
};
              
