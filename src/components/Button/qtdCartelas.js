import styled from "styled-components";

const Div = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: center;
  padding: 12rem;

  select{
  }

  a{
    margin: 2rem;
  }
`;

const ButtonJ = styled.button`
  border-color: #550000;
  background-color: #ffffff;
  border-width: 0.8rem;
  border-radius: 1rem;
`;

export const Selecionar = () => {
  return(
    <Div class="input-group">
      <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
        <option selected>Quantidade de cartelas</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <span class="input-group-text">$</span>
      <span class="input-group-text">0.00</span>
      <a href="/Game">
        <ButtonJ>Iniciar</ButtonJ>
      </a>
    </Div>
  )
}
