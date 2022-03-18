import styled from "styled-components"

export const DivC = styled.div`
  background-color: rgba(245, 245, 245, 0.8);
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;
  width: 25rem;
  height: 15rem;
  align-items: center;
  justify-content: center;

  table{
    display: flex;
    justify-content: center;
    align-items: center;

    tbody{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      list-style: none;
    }
  }

  p{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 0.5rem;
    margin: 0.2rem;
    width: 4rem;
    height: 4rem;
    border-color: black;
    border-style: solid;
    border-width: 1px;
    font-size: larger;
  }
`;
