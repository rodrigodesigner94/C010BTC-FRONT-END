import styled from "styled-components"

export const DivC = styled.div`
  background-color: rgba(245, 245, 245, 0.8);
  padding: 0.8rem;
  margin: 0.8rem;
  border-radius: 1rem;
  width: 25rem;
  height: 15rem;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px red, 1em 1rem 0.4em #aaa742;

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

  tr{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #bac7db;
    padding: 0.5rem;
    margin: 0.2rem;
    width: 4rem;
    height: 4rem;
    border-color: black;
    border-style: solid;
    border-width: 1px;
    font-size: larger;
  }
  tr:hover{
    width: 4.5rem;
    height: 4.5rem;
    background-color: #8c9196;
  }

`;
