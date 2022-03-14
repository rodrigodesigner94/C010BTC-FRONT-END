import { Dropdown} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export const Cartela = ()=> {
  const [ cartela, setCartela ] = useState([]);

  const getCartela = async () => {
    await axios.get('/cartela').then((response) => {
      setCartela(response.data);
      console.log(response.data[0].linha1cartela);  
    });
  };

  useEffect(() =>{
    getCartela();
  }, []);
  
  return(
    // <Dropdown>
    //   <Dropdown.Toggle variant="success" id="dropdown-basic">
    //     Escolha quantas cartelas 
    //   </Dropdown.Toggle>
    //   <Dropdown.Menu>
    //     <Dropdown.Item href="/bola">1 Cartela</Dropdown.Item>
    //     <Dropdown.Item href="/">2 cartelas</Dropdown.Item>
    //     <Dropdown.Item href="/">3 cartelas</Dropdown.Item>
    //     <Dropdown.Item href="/">4 cartelas</Dropdown.Item>
    //   </Dropdown.Menu> 
    // </Dropdown>
    <>
      <a href='/bola'>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col"> </th>
              <th scope="col">B</th>
              <th scope="col">I</th>
              <th scope="col">N</th>
              <th scope="col">G</th>
              <th scope="col">O</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table> 
      </a>  
    </>
  )
}

//{cartela.map((item) => (
 // <li key={item.id}><a href='/bola'>{item.linha1cartela}</a></li>
 // ))}