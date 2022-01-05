import React from 'react';

const Cart = (props) => {
    const newPlayers = props.newPlayers;
    // console.log(newPlayers);
    return (
        <div>
            <h3 style={{textAlign: 'center'}}>Total Players :{newPlayers.length}</h3>
            {
                newPlayers.map(player => <p>{player.name} : {player.salary}</p>)
            }
        </div>
    );
};

export default Cart;