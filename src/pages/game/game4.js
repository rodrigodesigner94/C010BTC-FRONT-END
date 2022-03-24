import React from "react";
import api from "../../services/Api";
import { useEffect, useState } from 'react';
import { BackgroundGame } from "../../components/Container/telaGame";
import { Bola, Div } from "../../components/Bolas";
import { DivC } from "../../components/Cartela";



export const Game4 = () =>{
  const [ sorteio, setSorteio ] = useState([]);
  const [ linha, setLinha ] = useState([]);
  const [ linha2, setLinha2 ] = useState([]);
  const [ linha3, setLinha3 ] = useState([]);
  const [ linha4, setLinha4 ] = useState([]);


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
     
      setSorteio(response.data[3].bolaSorteio);
     // console.log(response.data[0].bolaSorteio + " SORTEIO ");
    })
    
    api.get('/cartela').then((response) =>{
     
      setLinha(response.data[0].linhaCartela)
      setLinha2(response.data[1].linhaCartela)
      setLinha3(response.data[2].linhaCartela)
      setLinha4(response.data[3].linhaCartela)
    
      //console.log(response.data.length +  " DATA ");
    })

  }, []);

  const nLinha = JSON.stringify(linha).replace(/[\\"]/g, '')
  const nLinha2 = JSON.stringify(linha2).replace(/[\\"]/g, '')
  const nLinha3 = JSON.stringify(linha3).replace(/[\\"]/g, '')
  const nLinha4 = JSON.stringify(linha4).replace(/[\\"]/g, '')

  const linha1 = JSON.parse(nLinha)
  const novalinha2 = JSON.parse(nLinha2)
  const novalinha3 = JSON.parse(nLinha3)
  const novalinha4 = JSON.parse(nLinha4)

  const nSorteio = JSON.stringify(sorteio).replace(/[\\"]/g, '')
  const sorteioInt = JSON.parse(nSorteio)
  
  

const marcar = () => {
  const acertos = sorteioInt.filter((numero) =>
  linha1.includes(numero)
  );
 //console.log(acertos + " ACERTOS");
}

  
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
                <p style={{background: "red"}} key={i}> {item}</p>
                ))}
            </tbody>
          </table>
        </DivC>

        <DivC>
          <table>
            <tbody>
              {novalinha2.map((item, i) => (
                <p key={i}> {item}</p>
                ))}
            </tbody>
          </table>
        </DivC>

        <DivC>
          <table>
            <tbody>
              {novalinha3.map((item, i) => (
                <p key={i}> {item}</p>
                ))}
            </tbody>
          </table>
        </DivC>

        <DivC>
          <table>
            <tbody>
              {novalinha4.map((item, i) => (
                
                <p key={i}> {item}</p>
                
                ))}
            </tbody>
          </table>
        </DivC>
      </Div>
      <button onClick={marcar}>Marcar Cartela</button>
      <button onClick={marcar}>Voltar</button>
    </BackgroundGame>
  );
};
              
