import React from 'react';

const Cart = (props) => {
    console.log(props);
   const  cart = props.cart;
   let totalCost =0;
   let addedPlayers= '';
   for (let i = 0; i < cart.length; i++) {
    const player = cart[i];
    totalCost = totalCost + player.value;
    addedPlayers = addedPlayers + ',' + player.name;
    
}
    return (
        <div>
            <h4>Buying Players For Team Barcelona:</h4>
            <h3>Total Players Added: {cart.length}</h3>
            <p>Added Players: {addedPlayers}</p>
            <p>Total Cost: {totalCost}</p>
        </div>
    );
};

export default Cart;