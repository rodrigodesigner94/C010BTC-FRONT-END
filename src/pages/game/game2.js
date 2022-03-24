import React from "react";
import api from "../../services/Api";
import { useEffect, useState } from 'react';
import { BackgroundGame } from "../../components/Container/telaGame";
import { Bola, Div } from "../../components/Bolas";
import { DivC } from "../../components/Cartela";



export const Game2 = () =>{
  const [ sorteio, setSorteio ] = useState([]);
  const [ linha, setLinha ] = useState([]);
  const [ linha2, setLinha2 ] = useState([]);
 

  //DELETE PARTIDA
// useEffect(() =>{
//   api.delete('/partida') 
// }, [])


//DELETE CARTELA
// useEffect(() =>{
// api.delete('/cartela')
// }, [])

  useEffect(() =>{ 
    api.get('/partida').then((response) =>{
    let tm = response.data.length -1   
   setSorteio(response.data[tm].bolaSorteio);
    })
    


    api.get('/cartela').then((response) =>{
      setLinha(response.data[0].linhaCartela)
      setLinha2(response.data[1].linhaCartela) 

    })
  }, []);

  const nLinha = JSON.stringify(linha).replace(/[\\"]/g, '')
  const nLinha2 = JSON.stringify(linha2).replace(/[\\"]/g, '')
 

  const linha1 = JSON.parse(nLinha)
  const novalinha2 = JSON.parse(nLinha2)


  const nSorteio = JSON.stringify(sorteio).replace(/[\\"]/g, '')
  const sorteioInt = JSON.parse(nSorteio)
  
  


  const acertos = sorteioInt.filter((numero) =>
  `${linha1} ${novalinha2}`.includes(numero)
  );
 //console.log(acertos + " ACERTOS");


  
  return (
    <BackgroundGame>
      <Div>
{
    sorteioInt.map((item, i) => ( 
      <Bola key={i}>{item}</Bola>
    ))
 }
      </Div>
      
      <Div>
        
        <DivC>
          <table>
            <tbody>
              {linha1.map((item, i) => (
                <tr key={i}>{item}</tr>
                ))}
            </tbody>
          </table>
        </DivC>

        <DivC>
          <table>
            <tbody>
              {novalinha2.map((item, i) => (
                <tr key={i}>{item}</tr>
                ))}
            </tbody>
          </table>
        </DivC>
        <h3>{`Parabens Você acertou ${acertos.sort((a, b) => a -b)}`}</h3>
      </Div>
      <button >Marcar Cartela</button>
      <a href="/cartela"><button >Voltar</button></a>
    </BackgroundGame>
  );
};
              
