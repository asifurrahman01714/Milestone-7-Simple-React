import React from 'react';
import { useState } from 'react/cjs/react.development';

const Player = (props) => {
    // console.log(props);
    // console.log(props.player);
    const {name, image, salary} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    const [playerSalary, updateSalary] = useState('');
    // const displaySalary = (playerSalary)=>{
    //     updateSalary(playerSalary)
    // }
    const displaySalary = ()=>updateSalary(salary);
    return (
        <div className="col-md-4" style={{marginBottom:'10px'}}>
            <div className="card" style={{height:'500px'}}>
                <img src={image} style={{height: '68%'}} className="card-img-top" alt="..."/>
                <div className="card-body" style={{textAlign: 'center'}}>
                    <h2 style={{fontWeight: '700', marginBottom:'15px'}} className="card-title">{name}</h2>
                    <h5 style={{fontWeight: '700', marginBottom:'15px'}} className="card-title">Salary: {playerSalary}</h5>
                    <button className="btn btn-primary me-2" onClick={()=>handleAddPlayer(props.player)}>Add me</button>
                    <button className="btn btn-primary" onClick={displaySalary}>DisplaySalary</button>
                </div>
            </div>
        </div>
    );
};

export default Player;