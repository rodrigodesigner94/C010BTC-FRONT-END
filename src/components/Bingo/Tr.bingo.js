import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const DivAre = styled.div`
    background-color: rgba(245,245,245,0.8);
    padding: 0.8rem;
    margin: 0.8rem;
    border-radius: 1rem;
    width: 23rem;
    height: 17rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 3px red, 1em 1rem 0.4em #aaa742;

    div{
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

    h1{
        color: red;
        margin-top: -12px;
        
    }
    .coluna{
        display: inline-block;
        margin-bottom: 170px;
        width: 3rem;
        height: 3rem;
    }
    .linha{
        width: 3rem;
        height: 3rem;
        margin: 10px 10px 10px -10px;
        background-color: #bac7db;
        font-size: larger;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .linha:hover{
        width: 3.2rem;
        height: 3.2rem;
        background-color: #8c9196;
    }

    @media screen and (min-width: 350px ) {
      width: 16rem;
      height: 18rem;
      .linha{
        margin: 3px 3px 3px -9px;
        width: 2rem;
        height: 2rem;
      }
      .coluna{
        margin: -150px 10px 10px  ;

        width: 2rem;
        height: 2rem;
      }
     
    }
    
`

export const Tr = ({props, props2}) => {
  props2 = '';

    const [ display, setDispaly ] = useState('');
    const [ display2, setDispaly2 ] = useState('');

    
    const linhaB = props.slice(0,3)
    const linhaI = props.slice(3,6)
    const linhaN = props.slice(6,9)
    const linhaG = props.slice(9,12)
    const linhaO = props.slice(12,15)


return(
    <>
    <DivAre  className="area-cartela">
      <div className="coluna b">
          <h1>B</h1>
        { 
            linhaB.map((item, i) => (
            <div  className="linha" style={{background: '' }}  key={i}>{item}</div>             
        ))}
      </div>

      <div className="coluna i">
      <h1>I</h1>
      { 
        linhaI.map((item, i) => (
        <div  className="linha" style={{background: '' }}  key={i}>{item}</div>              
        ))}
      </div>

      <div className="coluna n">
      <h1>N</h1>        
      { 
        linhaN.map((item, i) => (
        <div  className="linha" style={{background: '' }}  key={i}>{item}</div>              
        ))}
      </div>

      <div className="coluna g"> 
      <h1>G</h1>
      { 
        linhaG.map((item, i) => (
        <div  className="linha" style={{background: '' }}  key={i}>{item}</div>             
        ))}
      </div>

      <div className="coluna o">
      <h1>O</h1>
      { 
        linhaO.map((item, i) => (
        <div  className="linha" style={{background: '' }}  key={i}>{item}</div>              
        ))}
      </div> 
      </DivAre>
    </>
)
}