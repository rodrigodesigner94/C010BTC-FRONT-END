/* eslint-disable react/prop-types */
// import React, { useState } from "react";
import styled from 'styled-components';

export const DivAre = styled.div`
  background-color: rgba(245, 245, 245, 0.8);
  padding: 0.8rem;
  margin: 0.8rem;
  border-radius: 1rem;
  width: 23rem;
  height: 17rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px red, 1em 1rem 0.4em #aaa742;

  div {
    justify-content: center;
    background-color: #bac7db;
    padding: 0.5rem;
    margin: 0.2rem;
    width: 3rem;
    height: 3rem;
    margin-left: 15px;
    border-color: black;
    border-style: solid;
    border-width: 2px;
    font-size: larger;
  }

  h1 {
    color: red;
    margin-top: -12px;
  }

  .colunaTr2 {
    display: inline-block;
    margin-bottom: 170px;
    width: 3rem;
    height: 3rem;
  }

  .linhaTr2 {
    width: 3rem;
    height: 3rem;
    margin: 10px 10px 10px -10px;
    background-color: #bac7db;
    font-size: larger;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .linhaTr2:hover {
    transform: scale(1.1);
    background-color: #8c9196;
  }
`;

export const Tr2 = ({ props }) => {
  
  //const [ display, setDispaly ] = useState('');
  // const [ display2, setDispaly2 ] = useState('');

  const linhaB = props.slice(0, 3);
  const linhaI = props.slice(3, 6);
  const linhaN = props.slice(6, 9);
  const linhaG = props.slice(9, 12);
  const linhaO = props.slice(12, 15);
  

  return (
    <>
      <DivAre className="area-cartela">
        <div className="colunaTr2 b">
          <h1>B</h1>
          {linhaB.map((item, i) => (
            <div className="linhaTr2" style={{ background: '' }} key={i}>
              {item}
            </div>
          ))}
        </div>

        <div className="colunaTr2 i">
          <h1>I</h1>
          {linhaI.map((item, i) => (
            <div className="linhaTr2" style={{ background: '' }} key={i}>
              {item}
            </div>
          ))}
        </div>

        <div className="colunaTr2 n">
          <h1>N</h1>
          {linhaN.map((item, i) => (
            <div className="linhaTr2" style={{ background: '' }} key={i}>
              {item}
            </div>
          ))}
        </div>

        <div className="colunaTr2 g">
          <h1>G</h1>
          {linhaG.map((item, i) => (
            <div className="linhaTr2" style={{ background: '' }} key={i}>
              {item}
            </div>
          ))}
        </div>

        <div className="colunaTr2 o">
          <h1>O</h1>
          {linhaO.map((item, i) => (
            <div className="linhaTr2" style={{ background: '' }} key={i}>
              {item}
            </div>
          ))}
        </div>
      </DivAre>
    </>
  );
};
