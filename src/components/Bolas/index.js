import { Card, Figure } from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://blue-ctb.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const Sorteio = ()=> {

  const [ sorteio, setSorteio ] = useState([]);

const getSorteio = async () => {

  await axios.get('/bola').then((response) => {
    console.log(response.data + " RESPONSE");
    setSorteio(response.data)
  })

}

    return( 
      <Figure>
      <Figure.Image
        width={200}
        height={350}
        alt="171x180"
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8sKkLo4NarWau9bXf5MWvFq74tdKqufDEA&usqp=CAU"
      />
      <Figure.Caption>
        Cada cartela custa 50 moedas.
      </Figure.Caption>
      <Card>
        {sorteio}
      </Card>
    </Figure>
    )
}