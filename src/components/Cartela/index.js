import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import api from "../../services/Api";

const DivC = styled.div`
  background-color: rgba(245, 245, 245, 0.6);
  padding: 1rem;
  border-radius: 1rem;
`;

export const Cartela = (item)=> {

  const [linha, setLinha] = useState([]);

  useEffect(() =>{
    api.get('/partida').then((response) =>{
      setLinha(response.data[0].linhacartela)
      console.log(response.data[0].bolaSorteio);
    })
    
  }, []);
 // console.log(linha);
  //React child (found: object with keys {id, cartela, linhacartela, bolaSorteio})



  //console.log(linha + " PADRAO");
  const nLinha = JSON.stringify(linha)
 // console.log(nLinha + " nLinha");
  const linha1 = nLinha.split(',').map(function(item){
    return parseInt(item)
  });
  

  
 //console.log(linha1 + " LINHAaaaa");
 //console.log(linha1.slice(1,6));

  return(
    <DivC>
      <a href='/bola'>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">B</th>
              <th scope="col">I</th>
              <th scope="col">N</th>
              <th scope="col">G</th>
              <th scope="col">O</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{linha1.slice(0,1)}</td>
              
              <td>{linha1.slice(1,2)}</td>
              <td>{linha1.slice(2,3)}</td>
              <td>{linha1.slice(3,4)}</td>
              <td>{linha1.slice(4,5)}</td>
            </tr>
            <tr>
              <td>{linha1.slice(5,6)}</td>
              <td>{linha1.slice(6,7)}</td>
              <td>{linha1.slice(7,8)}</td>
              <td>{linha1.slice(8,9)}</td>
              <td>{linha1.slice(9,10)}</td>
            </tr>
            <tr>
            <td>{linha1.slice(10,11)}</td>
              <td>{linha1.slice(11,12)}</td>
              <td>{linha1.slice(12,13)}</td>
              <td>{linha1.slice(13,14)}</td>
              <td>{linha1.slice(14,15)}</td>
            </tr>
          </tbody>
        </table> 
      </a>  
    </DivC>
  )
}
