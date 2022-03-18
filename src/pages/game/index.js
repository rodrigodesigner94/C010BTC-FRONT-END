import React from "react";
// import axios from 'axios';
import api from "../../services/Api";
import { useEffect, useState } from 'react';
import { BackgroundGame } from "../../components/Container/telaGame";
import { Bola, Div } from "../../components/Bolas";
import { DivC } from "../../components/Cartela";

export const Game =()=>{
  const [ linha, setLinha ] = useState([]);
  const [ sorteio, setSorteio ] = useState([]);
  // const [ cartela, setCartela ] = useState([]);

  // const getCartela = async () => {
  //   await axios.get('/cartela').then((response) => {
  //     setCartela(response.data);
  //     console.log(response.data[0].linha1cartela);  
  //   });
  // };

  // getCartela();

  useEffect(() =>{
    api.get('/cartela').then((response) =>{
      setLinha(response.data[0].linhaCartela)
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

  return (
    <BackgroundGame>
      <Div>
        {sorteioInt.map((item) => (
          <Bola key={item.id}>{item}</Bola>
        ))}
      </Div>
      <Div>
        <DivC>
          <table>
            <tbody>
              {linha1.map((item) => (
                <p key={item}> {item}</p>
                ))}
            </tbody>
          </table>
        </DivC>
      </Div>
    </BackgroundGame>
  );
};

                {/* <div className='bolas'>
                  {sorteio.map((item) => (
                    <div key={item.id}>{item.bolaSorteio}</div>
                  ))}
                </div>
                <div>
                  {cartela.map((item) => (
                    <li key={item.id}><a href='/bola'>{item.linha1cartela}</a></li>
                  ))}
                </div> */}
