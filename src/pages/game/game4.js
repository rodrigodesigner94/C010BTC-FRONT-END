import React from "react";
import api from "../../services/Api";
import { useEffect, useState } from 'react';
import { BackgroundGame } from "../../components/Container/telaGame";
import { Bola, Div } from "../../components/Bolas";
import { DivC, DivS } from "../../components/Cartela";
import { Tr } from "../../components/Bingo/Tr.bingo";
import { Back } from "../../components/Button/voltar";

export const Game4 = () =>{
  const [ sorteio, setSorteio ] = useState([]);
  const [ linha, setLinha ] = useState([]);
  const [ linha2, setLinha2 ] = useState([]);
  const [ linha3, setLinha3 ] = useState([]);
  const [ linha4, setLinha4 ] = useState([]);
  const [ cor, setCor ] = useState('');
  const [ cor2, setCor2 ] = useState('none');
  const [bMostrar, setbMostar] = useState('Mostrar Acertos');

  useEffect(() =>{ 
    api.get('/partida').then((response) =>{
      let tm = response.data.length -1
      setSorteio(response.data[tm].bolaSorteio);
     // console.log(response.data[0].bolaSorteio + " SORTEIO ");
    })
    
    api.get('/cartela').then((response) =>{
      let tm = response.data.length -1
      setLinha(response.data[tm].linhaCartela)
      setLinha2(response.data[tm -1].linhaCartela)
      setLinha3(response.data[tm -2].linhaCartela)
      setLinha4(response.data[tm -3].linhaCartela)
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
  
  const acertos = sorteioInt.filter((numero) =>
    `${linha1}`.includes(numero)
  );

  const acertos2 = sorteioInt.filter((numero) =>
    `${novalinha2}`.includes(numero)
  );

  const acertos3 = sorteioInt.filter((numero) =>
    `${novalinha3}`.includes(numero)
  );

  const acertos4 = sorteioInt.filter((numero) =>
    `${novalinha4}`.includes(numero)
  );

  const acertosOrder = acertos.sort((a, b) => a -b)
  const acertosOrder2 = acertos2.sort((a, b) => a -b)
  const acertosOrder3 = acertos3.sort((a, b) => a -b)
  const acertosOrder4 = acertos4.sort((a, b) => a -b)

  const marcar = () => {
    if(cor === ''){
      setCor('none')
      setCor2('')
      setbMostar('Mostrar Cartela')
    }else{
      setCor('')
      setCor2('none')
      setbMostar('Mostrar Acertos')
    }
  }
  
  return (
    <BackgroundGame>
      <a href="/cartela"><Back /></a>
      <Div>
        {sorteioInt.map((item, i) => ( 
          <Bola key={i}>{item}</Bola>
        ))}
      </Div>

      <DivS>
        <DivC style={{display: cor2}}>
          <table>
            <tbody>
              {acertosOrder.map((item, i) => (
                <tr key={i} style={{background: 'green'}} >{item}</tr> 
              ))}  
            </tbody> 
          </table>
          <h4>{`Parabens!!! Você acertou: ${acertos.length} Numeros => ${acertos.sort((a, b) => a -b)}`}</h4>
        </DivC>
        {<Tr props={linha1} />}

        <DivC style={{display: cor2}}>
          <table>
            <tbody>
              {acertosOrder2.map((item, i) => (
                <tr key={i} style={{background: 'green'}} >{item}</tr> 
              ))}  
            </tbody> 
          </table>
          <h4>{`Parabens!!! Você acertou: ${acertos2.length} numeros => ${acertos2.sort((a, b) => a -b)}`}</h4>
        </DivC>  
        {<Tr props={novalinha2} />}

        <DivC style={{display: cor2}}>
          <table>
            <tbody>
              {acertosOrder3.map((item, i) => (
                <tr key={i} style={{background: 'green'}} >{item}</tr> 
              ))}  
            </tbody> 
          </table>
          <h4>{`Parabens!!! Você acertou: ${acertos3.length} numeros => ${acertos3.sort((a, b) => a -b)}`}</h4>
        </DivC>  
        {<Tr props={novalinha3} />}

        <DivC style={{display: cor2}}>
          <table>
            <tbody>
              {acertosOrder4.map((item, i) => (
                <tr key={i} style={{background: 'green'}} >{item}</tr> 
              ))}  
            </tbody> 
          </table>
          <h4>{`Parabens!!! Você acertou: ${acertos4.length} numeros => ${acertos4.sort((a, b) => a -b)}`}</h4>
        </DivC>  
        {<Tr props={novalinha4} />}
      </DivS>

      <button onClick={marcar}>{bMostrar}</button>
    </BackgroundGame>
  );
};
              
