import React from 'react';

const Cart = (props) => {
    const newPlayers = props.newPlayers;
    // console.log(newPlayers);
    let total =0;
    for (let i = 0; i < newPlayers.length; i++) {
        const element = newPlayers[i].salary;
        total = total + Number(element.replace(/[^0-9.-]+/g,""));  
    }
    
    return (
        <div>
            <h3 style={{textAlign: 'center'}}>Total Players :{newPlayers.length}</h3>
            <table className="table table-dark table-hover w-100">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newPlayers.map(player => <tr><th>{player.name}</th><th>{player.salary}</th></tr>)
                    }
                    <tr>
                        <th scope="col">Total Salary: </th>
                        <th scope="col">{0 || total}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cart;