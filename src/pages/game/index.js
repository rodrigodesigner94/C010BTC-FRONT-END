import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BackgroundGame } from "../../components/Container/telaGame";
import { Bola, Div } from "../../components/Bolas";
import { DivC } from "../../components/Cartela";

export const Game =()=>{
  const [ sorteio, setSorteios ] = useState([]);
  const [ cartela, setCartela ] = useState([]);

  

  

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
