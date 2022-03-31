import React from 'react';
import api from '../../services/Api';
import { useEffect, useState } from 'react';
import { BackgroundGame } from '../../components/Container/telaGame';
import { Bola, Div } from '../../components/Bolas';
import { DivC, DivS, DivCS } from '../../components/Cartela';
import { Tr } from '../../components/Bingo/Tr.bingo';
import { Back, Show } from '../../components/Button/selectButtons';
import { Taca, Medalha, Trofeu } from '../../components/premios';

export const Game2 = () => {
  const [sorteio, setSorteio] = useState([]);
  const [linha, setLinha] = useState([]);
  const [linha2, setLinha2] = useState([]);
  const [cor, setCor] = useState('');
  const [cor2, setCor2] = useState('none');
  const [bMostrar, setbMostar] = useState('Mostrar Acertos');
  const [trofeu, setTrofeu] = useState('');
  const [taca, setTaca] = useState('');
  const [medalha, setMedalha] = useState('');
  const [trofeu2, setTrofeu2] = useState('');
  const [taca2, setTaca2] = useState('');
  const [medalha2, setMedalha2] = useState('');

  useEffect(() => {
    api.get('/partida').then((response) => {
      const tm = response.data.length - 1;
      setSorteio(response.data[tm].bolaSorteio);
    });

    api.get('/cartela').then((response) => {
      const tm = response.data.length - 1;
      console.log(tm);
      setLinha(response.data[tm].linhaCartela);
      setLinha2(response.data[tm - 1].linhaCartela);
    });
  }, []);

  const nLinha = JSON.stringify(linha).replace(/[\\"]/g, '');
  const nLinha2 = JSON.stringify(linha2).replace(/[\\"]/g, '');

  const linha1 = JSON.parse(nLinha);
  const novalinha2 = JSON.parse(nLinha2);

  const nSorteio = JSON.stringify(sorteio).replace(/[\\"]/g, '');
  const sorteioInt = JSON.parse(nSorteio);

  const acertos = sorteioInt.filter((numero) => linha1.includes(numero));

  const acertos2 = sorteioInt.filter((numero) => novalinha2.includes(numero));

  const acertosOrder = acertos.sort((a, b) => a - b);
  const acertosOrder2 = acertos2.sort((a, b) => a - b);

  useEffect(() => {
    if (acertos.length == 15) {
      setTrofeu(true);
      setMedalha(false);
      setTaca(false);
    } else if (acertos.length >= 6 && acertos.length <= 14) {
      setTaca(true);
      setTrofeu(false);
      setMedalha(false);
    } else if (acertos.length <= 5) {
      setMedalha(true);
      setTaca(false);
      setTrofeu(false);
    }

    if (acertos2.length == 15) {
      setTrofeu2(true);
      setMedalha2(false);
      setTaca2(false);
    } else if (acertos.length >= 6 && acertos.length <= 14) {
      setTaca2(true);
      setTrofeu2(false);
      setMedalha2(false);
    } else if (acertos.length <= 5) {
      setMedalha2(true);
      setTaca2(false);
      setTrofeu2(false);
    }
  }, [acertos, acertos2]);

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
            <p>Parabens!! Você acertou: {acertos.length}</p>
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
      </DivS>

      <Show onClick={marcar}>{bMostrar}</Show>
    </BackgroundGame>
  );
};
