import { Card, Figure } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';


export const Sorteio = ()=> {

const [ sorteio, setSorteio ] = useState([]);

const getSorteio = async () => {
  await axios.get('/bola').then((response) => {
    setSorteio(response.data);
    console.log(response.data);  
  });
};
useEffect(() =>{
  getSorteio();
}, []);
const msg = 'Gerando ...'


    return( 
      <Figure>
        <h1>{`${msg}`}</h1>
      <Figure.Image
        width={200}
        height={350}
        alt="171x180"
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8sKkLo4NarWau9bXf5MWvFq74tdKqufDEA&usqp=CAU"
      />
      
        
      
      
      <Figure.Caption>
        Cada cartela custa 50 moedas.
      </Figure.Caption>
      <Card >
  
        </Card> 
        
    </Figure>
    
    )
}