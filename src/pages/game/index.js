import React from "react";
import api from "../../services/Api";
import { useEffect, useState } from 'react';
import { BackgroundGame } from "../../components/Container/telaGame";
import { Bola, Div } from "../../components/Bolas";
import { DivC } from "../../components/Cartela";
import  styled  from 'styled-components';




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
        setSorteio(response.data[0].bolaSorteio);
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
  console.log(linha1 + " LINHA1" );
  //console.log(acertos.sort((a, b) => a -b) + " ACERTOS" );
 
  const pe = styled.p`
  background-color: green;
  `
  
  

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
                
                <p className="map"  key={i}>{item}
                {

                   linha1.map((it,indi) =>{
                    sorteioInt.map((subItem, subIndice) =>{
                      if(it === subItem){ 
                        <p style={{'background': 'green'}}>{i}</p>         
                        console.log(it + " " + indi + " O " + subItem);
                      }

                      })
                    })    
                 }

{/* "                <li className='todo-list__item'
                 style={(item.complete) ? styles.complete : {}} />" */}
               
                </p>
                
                ))

                }
            </tbody>
          </table>
        </DivC>
                <h1>{`Parabens Você acertou ${acertos.sort((a, b) => a -b)}`}</h1>
      </Div>
      <button >Marcar Cartela</button>
      <button >Voltar</button>
    </BackgroundGame>
  );
};
              
