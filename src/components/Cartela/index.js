import styled from 'styled-components';

export const DivS = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 60rem;
`;

export const DivCS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  p {
    padding: 1rem;
  }
`;

export const DivC = styled.div`
  background-color: rgba(245, 245, 245, 0.8);
  padding: 1rem;
  margin: 0.8rem;
  border-radius: 1rem;
  width: 23rem;
  height: 17rem;
  box-shadow: 3px 3px red, 1em 1rem 0.4em #aaa742;

  table {
    display: flex;
    justify-content: center;
    align-items: center;

    tbody {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      list-style: none;
    }

    .bingo {
      font-weight: bold;
      color: red;
    }
  }

  tr {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #bac7db;
    padding: 0.5rem;
    margin: 0.2rem;
    width: 3rem;
    height: 3rem;
    border-color: black;
    border-style: solid;
    border-width: 1px;
    font-size: larger;
  }

  tr:hover {
    background-color: #8c9196;
  }
`;
