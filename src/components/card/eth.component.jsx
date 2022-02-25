import React, { useState } from 'react';
import './card.component.css';

function Etherium({eth}){
    // console.log(props);
    const[quantity,setQuantity]=useState();
    
    function newQuantity(event){
        setQuantity(event.target.value);
    }
    return(
        <>
        <div className='coin-container'>
            <div className="coin-row">
                <div className="coin">
                    <h1>Symbol:{eth.s} </h1>
                </div>
                <div className="coin-data">
                    <h1>Bid Price:{eth.b}</h1> 
                    <h1>Ask Price:{eth.a}</h1>
                </div>
                <div className="quantity">
                    <input type='text' value={quantity} placeholder='quantity' onChange={newQuantity}/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Etherium;