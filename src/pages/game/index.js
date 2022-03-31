import React from 'react';
import api from '../../services/Api';
import { useEffect, useState } from 'react';
import { BackgroundGame } from '../../components/Container/telaGame';
import { Bola, Div } from '../../components/Bolas';
import { DivC } from '../../components/Cartela';
import { Tr } from '../../components/Bingo/Tr.bingo';
import { Back, Show } from '../../components/Button/selectButtons';
import { Taca, Medalha, Trofeu } from '../../components/premios';

export const Game = () => {
  const [sorteio, setSorteio] = useState([]);
  const [linha, setLinha] = useState([]);
  const [cor, setCor] = useState('');
  const [cor2, setCor2] = useState('none');
  const [bMostrar, setbMostar] = useState('Mostrar Acertos');
  const [trofeu, setTrofeu] = useState('');
  const [taca, setTaca] = useState('');
  const [medalha, setMedalha] = useState('');

  useEffect(() => {
    api.get('/partida').then((response) => {
      const tm = response.data.length - 1;
      setSorteio(response.data[tm].bolaSorteio);
      // setHits(response.data[tm].hits)
      // console.log(response.data[0].bolaSorteio + " SORTEIO ");
    });

    api.get('/cartela').then((response) => {
      const tm = response.data.length - 1;
      console.log(tm);
      setLinha(response.data[tm].linhaCartela);
      console.log(response.data.lentgh + ' CARTELA ');
    });
  }, []);

  const nLinha = JSON.stringify(linha).replace(/[\\"]/g, '');
  const linha1 = JSON.parse(nLinha);

  const nSorteio = JSON.stringify(sorteio).replace(/[\\"]/g, '');
  const sorteioInt = JSON.parse(nSorteio);

  const acertos = sorteioInt.filter((numero) => linha1.includes(numero));

  const acertosOrder = acertos.sort((a, b) => a - b);

  // const respostaMedalha = `Parabens!!! Você acertou: ${acertos.length}`;

  // const respostaTrofeu = `Parabens!!! Você acertou: ${acertos.length}`;

  // const respostaTaca = `Parabens!!! Você acertou: ${acertos.length}`;

  useEffect(() => {
    if (acertos.length == 15) {
      setTrofeu(true);
    } else if (acertos.length >= 6 && acertos.length <= 10) {
      setTaca(true);
    } else if (acertos.length <= 5) {
      setMedalha(true);
    }
  }, [acertos]);

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

      <Div>
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
          {trofeu && <Trofeu>{acertos.length}</Trofeu>}
          {taca && <Taca>{acertos.length}</Taca>}
          {medalha && <Medalha>{acertos.length}</Medalha>}
        </DivC>
        {<Tr props={linha1} />}
      </Div>

      <Show onClick={marcar}>{bMostrar}</Show>
    </BackgroundGame>
  );
};
