import React from "react";
import api from "../../services/Api";
import { useEffect, useState } from 'react';
import { BackgroundGame } from "../../components/Container/telaGame";
import { Bola, Div } from "../../components/Bolas";
import { DivC } from "../../components/Cartela";
import  "reflect-metadata" ;


export const Game3 = () =>{
  const [ sorteio, setSorteio ] = useState([]);
  const [ linha, setLinha ] = useState([]);
  const [ linha2, setLinha2 ] = useState([]);
  const [ linha3, setLinha3 ] = useState([]);
 


  //DELETE

  // useEffect(() =>{
  //   api.delete('/partida') 
  // }, [])
  



  //POST
  useEffect(() =>{
    api.post('/partida', { 
      bolaSorteio: "string",
      premio: "string",
      inicio: "2022-03-19T20:41:28.333Z",
      fim: "2022-03-19T20:41:28.333Z",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    
  }, [])
  

  useEffect(() =>{ 
    api.get('/partida').then((response) =>{
      let tm = response.data.length
     // if(tm === 0){
        setSorteio(response.data[0].bolaSorteio);

      //}else if(tm > 0) {
        tm = response.data.length -1
       // setSorteio(response.data[tm].bolaSorteio);
      //}
     // console.log(response.data[0].bolaSorteio + " SORTEIO ");
    
    })
    


    api.get('/cartela').then((response) =>{
     
      let tm = response.data.length
      if(tm === 0){
      setLinha(response.data[0].linhaCartela)
      setLinha2(response.data[1].linhaCartela)
      setLinha3(response.data[2].linhaCartela)
     
     }else if(tm > 0) {
      tm = response.data.length -1
      setLinha(response.data[tm -1].linhaCartela)
      setLinha2(response.data[tm -2].linhaCartela)
      setLinha3(response.data[tm -3].linhaCartela)
      
      }


      console.log(tm +  " LINHA CARTELA ");
      console.log(response.data.length +  " DATA ");
    })

    

  }, []);

  const nLinha = JSON.stringify(linha).replace(/[\\"]/g, '')
  const nLinha2 = JSON.stringify(linha2).replace(/[\\"]/g, '')
  const nLinha3 = JSON.stringify(linha3).replace(/[\\"]/g, '')
  

  const linha1 = JSON.parse(nLinha)
  const novalinha2 = JSON.parse(nLinha2)
  const novalinha3 = JSON.parse(nLinha3)
 

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

      </Div>
      <button onClick={marcar}>Marcar Cartela</button>
      <button onClick={marcar}>Voltar</button>
    </BackgroundGame>
  );
};
              
