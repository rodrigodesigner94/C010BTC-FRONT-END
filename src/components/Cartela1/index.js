import { Dropdown} from 'react-bootstrap'

export const Cartela1 = ()=> {
    return(
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Escolha quantas cartelas 
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">1 Cartela</Dropdown.Item>
    <Dropdown.Item href="#/action-2">2 cartelas</Dropdown.Item>
    <Dropdown.Item href="#/action-3">3 cartelas</Dropdown.Item>
    <Dropdown.Item href="#/action-3">4 cartelas</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

        
    )
}