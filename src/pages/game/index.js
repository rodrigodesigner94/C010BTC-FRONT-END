import React from "react";
import api from "../../services/Api";
import { useEffect, useState } from 'react';
import { BackgroundGame } from "../../components/Container/telaGame";
import { Bola, Div } from "../../components/Bolas";
import { DivC } from "../../components/Cartela";
import  "reflect-metadata" ;



export const Game = () =>{
  const [ sorteio, setSorteio ] = useState([]);
  const [ linha, setLinha ] = useState([]);
  const [ deletar, setDeletar] = useState([]);

   
  //DELETE PARTIDA
// useEffect(() =>{
//   api.delete('/partida') 
// }, [])


//DELETE CARTELA
// useEffect(() =>{
// api.delete('/cartela').then((response) =>{
// setDeletar(response.data)
//})
// }, [])


  useEffect(() =>{ 
    api.get('/partida').then((response) =>{
      let tm = response.data.length -1
        setSorteio(response.data[tm].bolaSorteio);
     // console.log(response.data[0].bolaSorteio + " SORTEIO ");
    
    })
    
    api.get('/cartela').then((response) =>{
      setLinha(response.data[0].linhaCartela) 
     // console.log(response.data.lentgh + " CARTELA "); 
    })

  }, []);

  const nLinha = JSON.stringify(linha).replace(/[\\"]/g, '')
  const linha1 = JSON.parse(nLinha)
 

  const nSorteio = JSON.stringify(sorteio).replace(/[\\"]/g, '')
  const sorteioInt = JSON.parse(nSorteio)
  

  const acertos = sorteioInt.filter((numero) =>
  linha1.includes(numero) 
  );
  //console.log(linha1 + " LINHA1 " );
  console.log(nSorteio + " nSorteio " );
  console.log(sorteioInt + " sorteioInt " );
  //console.log(acertos + " ACERTOS " );
  console.log(acertos.sort((a, b) => a -b) + " ACERTOS" );
 
  

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
              
               {
              linha1.map((item, i) => (
                <tr key={i}>{item}</tr>  
                ))

                }
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
              
