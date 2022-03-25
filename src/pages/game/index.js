import React from "react";
import api from "../../services/Api";
import { useEffect, useState } from 'react';
import { BackgroundGame } from "../../components/Container/telaGame";
import { Bola, Div } from "../../components/Bolas";
import { DivC } from "../../components/Cartela";





export const Game = () =>{
  const [ sorteio, setSorteio ] = useState([]);
  const [ linha, setLinha ] = useState([]);
  const [ cor, setCor ] = useState('none');
  const [ cor2, setCor2 ] = useState('');
  const [bMostrar, setbMostar] = useState('Mostrar Acertos');

   
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
        //setHits(response.data[tm].hits)
     // console.log(response.data[0].bolaSorteio + " SORTEIO ");
    
    })
    
    api.get('/cartela').then((response) =>{
      let tm = response.data.length -1
      setLinha(response.data[tm].linhaCartela) 
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
  
  const acertosOrder = acertos.sort((a, b) => a -b)

  function marcar(){
  if(cor == 'none'){
    setCor('')
    setCor2('none')
    setbMostar('Mostrar Cartela')
  }else{
    setCor('none')
    setCor2('')
    setbMostar('Mostrar Acertos')
  }
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

      <DivC style={{display: cor}}>
          <table>
            <tbody>
               {
              acertosOrder.map((item, i) => (
                <tr key={i} style={{background: 'green'}}>{item}</tr>  
                ))
                }
            </tbody>
          </table>
          <h3>{`Parabens!!! Você acertou ${acertos.sort((a, b) => a -b)}`}</h3>
        </DivC>

      <DivC style={{display: cor2 }}>
          <table>
            <tbody>
              {linha1.map((item, i) => (
                <tr key={i}>{item}</tr>
                ))}
            </tbody>
          </table>
        </DivC>
      </Div>
      <button onClick={marcar}>{bMostrar}</button>
      <a href="/cartela"><button >Voltar</button></a>
    </BackgroundGame>
  );
};
              
