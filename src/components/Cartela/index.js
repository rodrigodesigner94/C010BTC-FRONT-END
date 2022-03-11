import { Dropdown} from 'react-bootstrap';
import axios from 'axios';

export const Cartela = ()=> {
  return(
   <Dropdown>
      <h5>Neste jogo vc devera escolher a quantidade de cartelas</h5>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Escolha quantas cartelas 
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/bola">1 Cartela</Dropdown.Item>
        <Dropdown.Item href="/">2 cartelas</Dropdown.Item>
        <Dropdown.Item href="/">3 cartelas</Dropdown.Item>
        <Dropdown.Item href="/">4 cartelas</Dropdown.Item>
      </Dropdown.Menu>
   </Dropdown>
  )
}