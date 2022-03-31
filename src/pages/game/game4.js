import React from 'react';
import api from '../../services/Api';
import { useEffect, useState } from 'react';
import { BackgroundGame } from '../../components/Container/telaGame';
import { Bola, Div } from '../../components/Bolas';
import { DivC, DivS } from '../../components/Cartela';
import { Tr } from '../../components/Bingo/Tr.bingo';
import { Back, Show } from '../../components/Button/selectButtons';

export const Game4 = () => {
  const [sorteio, setSorteio] = useState([]);
  const [linha, setLinha] = useState([]);
  const [linha2, setLinha2] = useState([]);
  const [linha3, setLinha3] = useState([]);
  const [linha4, setLinha4] = useState([]);
  const [cor, setCor] = useState('');
  const [cor2, setCor2] = useState('none');
  const [bMostrar, setbMostar] = useState('Mostrar Acertos');
  const [premio, setPremio] = useState('');
  const [premio2, setPremio2] = useState('');
  const [premio3, setPremio3] = useState('');
  const [premio4, setPremio4] = useState('');

  useEffect(() => {
    api.get('/partida').then((response) => {
      const tm = response.data.length - 1;
      setSorteio(response.data[tm].bolaSorteio);
      // console.log(response.data[0].bolaSorteio + " SORTEIO ");
    });

    api.get('/cartela').then((response) => {
      const tm = response.data.length - 1;
      setLinha(response.data[tm].linhaCartela);
      setLinha2(response.data[tm - 1].linhaCartela);
      setLinha3(response.data[tm - 2].linhaCartela);
      setLinha4(response.data[tm - 3].linhaCartela);
      // console.log(response.data.length +  " DATA ");
    });
  }, []);

  const nLinha = JSON.stringify(linha).replace(/[\\"]/g, '');
  const nLinha2 = JSON.stringify(linha2).replace(/[\\"]/g, '');
  const nLinha3 = JSON.stringify(linha3).replace(/[\\"]/g, '');
  const nLinha4 = JSON.stringify(linha4).replace(/[\\"]/g, '');

  const linha1 = JSON.parse(nLinha);
  const novalinha2 = JSON.parse(nLinha2);
  const novalinha3 = JSON.parse(nLinha3);
  const novalinha4 = JSON.parse(nLinha4);

  const nSorteio = JSON.stringify(sorteio).replace(/[\\"]/g, '');
  const sorteioInt = JSON.parse(nSorteio);

  const acertos = sorteioInt.filter((numero) => linha1.includes(numero));

  const acertos2 = sorteioInt.filter((numero) => novalinha2.includes(numero));

  const acertos3 = sorteioInt.filter((numero) => novalinha3.includes(numero));

  const acertos4 = sorteioInt.filter((numero) => novalinha4.includes(numero));

  const acertosOrder = acertos.sort((a, b) => a - b);
  const acertosOrder2 = acertos2.sort((a, b) => a - b);
  const acertosOrder3 = acertos3.sort((a, b) => a - b);
  const acertosOrder4 = acertos4.sort((a, b) => a - b);

  const resposta = `Parabens!!! Você acertou: ${acertos.length} Numeros => ${acertos.sort(
    (a, b) => a - b
  )}`;
  const resposta2 = `Parabens!!! Você acertou: ${acertos2.length} Numeros => ${acertos2.sort(
    (a, b) => a - b
  )}`;
  const resposta3 = `Parabens!!! Você acertou: ${acertos3.length} Numeros => ${acertos3.sort(
    (a, b) => a - b
  )}`;
  const resposta4 = `Parabens!!! Você acertou: ${acertos4.length} Numeros => ${acertos4.sort(
    (a, b) => a - b
  )}`;
  const tentativa = ' Que pena Quantidade insificiente ';

  useEffect(() => {
    if (acertos.length >= 8) {
      setPremio(resposta);
    } else {
      setPremio(tentativa);
    }

    if (acertos2.length >= 8) {
      setPremio2(resposta2);
    } else {
      setPremio2(tentativa);
    }

    if (acertos3.length >= 8) {
      setPremio3(resposta3);
    } else {
      setPremio3(tentativa);
    }

    if (acertos4.length >= 8) {
      setPremio4(resposta4);
    } else {
      setPremio4(tentativa);
    }
  }, [acertos, acertos2, acertos3, acertos4]);

  const marcar = () => {
    if (cor === '') {
      setCor('none');
      setCor2('');
      setbMostar('Mostrar Cartela');
    } else {
      setCor('');
      setCor2('none');
      setbMostar('Mostrar Acertos');
    }
  };

  return (
    <BackgroundGame>
      <a href="/cartela">
        <Back />
      </a>
      <Div>
        {sorteioInt.map((item, i) => (
          <Bola key={i}>{item}</Bola>
        ))}
      </Div>

      <DivS>
        <DivC style={{ display: cor2 }}>
          <table>
            <tbody>
              {acertosOrder.map((item, i) => (
                <tr key={i} style={{ background: 'green' }}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>{premio}</h4>
        </DivC>
        {<Tr props={linha1} />}

        <DivC style={{ display: cor2 }}>
          <table>
            <tbody>
              {acertosOrder2.map((item, i) => (
                <tr key={i} style={{ background: 'green' }}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>{premio2}</h4>
        </DivC>
        {<Tr props={novalinha2} />}

        <DivC style={{ display: cor2 }}>
          <table>
            <tbody>
              {acertosOrder3.map((item, i) => (
                <tr key={i} style={{ background: 'green' }}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>{premio3}</h4>
        </DivC>
        {<Tr props={novalinha3} />}

        <DivC style={{ display: cor2 }}>
          <table>
            <tbody>
              {acertosOrder4.map((item, i) => (
                <tr key={i} style={{ background: 'green' }}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>{premio4}</h4>
        </DivC>
        {<Tr props={novalinha4} />}
      </DivS>

      <Show onClick={marcar}>{bMostrar}</Show>
    </BackgroundGame>
  );
};
