import React from 'react';
import api from '../../services/Api';
import { useEffect, useState } from 'react';
import { BackgroundGame } from '../../components/Container/telaGame';
import { Bola, Div } from '../../components/Bolas';
import { DivC, DivS, DivCS } from '../../components/Cartela';
import { Tr } from '../../components/Bingo/Tr.bingo';
import { Back, Show } from '../../components/Button/selectButtons';
import { Taca, Medalha, Trofeu } from '../../components/premios';

export const Game4 = () => {
  const [sorteio, setSorteio] = useState([]);
  const [linha, setLinha] = useState([]);
  const [linha2, setLinha2] = useState([]);
  const [linha3, setLinha3] = useState([]);
  const [linha4, setLinha4] = useState([]);
  const [cor, setCor] = useState('');
  const [cor2, setCor2] = useState('none');
  const [bMostrar, setbMostar] = useState('Mostrar Acertos');
  const [trofeu, setTrofeu] = useState('');
  const [taca, setTaca] = useState('');
  const [medalha, setMedalha] = useState('');
  const [trofeu2, setTrofeu2] = useState('');
  const [taca2, setTaca2] = useState('');
  const [medalha2, setMedalha2] = useState('');
  const [trofeu3, setTrofeu3] = useState('');
  const [taca3, setTaca3] = useState('');
  const [medalha3, setMedalha3] = useState('');
  const [trofeu4, setTrofeu4] = useState('');
  const [taca4, setTaca4] = useState('');
  const [medalha4, setMedalha4] = useState('');

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

  useEffect(() => {
    if (acertos.length >= 5) {
      setTrofeu(true);
      setMedalha(false);
      setTaca(false);
    } else if (acertos.length >= 19 && acertos.length <= 14) {
      setTaca(true);
      setTrofeu(false);
      setMedalha(false);
    } else if (acertos.length <= 18) {
      setMedalha(true);
      setTaca(false);
      setTrofeu(false);
    }

    if (acertos2.length == 15) {
      setTrofeu2(true);
      setMedalha2(false);
      setTaca2(false);
    } else if (acertos2.length >= 9 && acertos.length <= 14) {
      setTaca2(true);
      setTrofeu2(false);
      setMedalha2(false);
    } else if (acertos2.length <= 8) {
      setMedalha2(true);
      setTaca2(false);
      setTrofeu2(false);
    }

    if (acertos3.length == 15) {
      setTrofeu3(true);
      setMedalha3(false);
      setTaca3(false);
    } else if (acertos3.length >= 9 && acertos.length <= 14) {
      setTaca3(true);
      setTrofeu3(false);
      setMedalha3(false);
    } else if (acertos3.length <= 8) {
      setMedalha3(true);
      setTaca3(false);
      setTrofeu3(false);
    }

    if (acertos4.length == 15) {
      setTrofeu4(true);
      setMedalha4(false);
      setTaca4(false);
    } else if (acertos4.length >= 9 && acertos.length <= 14) {
      setTaca4(true);
      setTrofeu4(false);
      setMedalha4(false);
    } else if (acertos4.length <= 8) {
      setMedalha4(true);
      setTaca4(false);
      setTrofeu4(false);
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
          <DivCS>
            {trofeu && <Trofeu></Trofeu>}
            {taca && <Taca></Taca>}
            {medalha && <Medalha></Medalha>}
            <p>Parabens!! Você acertou: 15
            {/* {acertos.length} */}
            </p>
          </DivCS>
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
          <DivCS>
            {trofeu2 && <Trofeu></Trofeu>}
            {taca2 && <Taca></Taca>}
            {medalha2 && <Medalha></Medalha>}
            <p>Parabens!! Você acertou: {acertos2.length}</p>
          </DivCS>
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
          <DivCS>
            {trofeu3 && <Trofeu></Trofeu>}
            {taca3 && <Taca></Taca>}
            {medalha3 && <Medalha></Medalha>}
            <p>Parabens!! Você acertou: {acertos3.length}</p>
          </DivCS>
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
          <DivCS>
            {trofeu4 && <Trofeu></Trofeu>}
            {taca4 && <Taca></Taca>}
            {medalha4 && <Medalha></Medalha>}
            <p>Parabens!! Você acertou: {acertos4.length}</p>
          </DivCS>
        </DivC>
        {<Tr props={novalinha4} />}
      </DivS>

      <Show onClick={marcar}>{bMostrar}</Show>
    </BackgroundGame>
  );
};
