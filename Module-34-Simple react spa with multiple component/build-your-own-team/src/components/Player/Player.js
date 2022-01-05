import React from 'react';

const Player = (props) => {
    // console.log(props);
    // console.log(props.player);
    const {name, image} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="col-md-4" style={{marginBottom:'10px'}}>
            <div className="card" style={{height:'500px'}}>
                <img src={image} style={{height: '68%'}} className="card-img-top" alt="..."/>
                <div className="card-body" style={{textAlign: 'center'}}>
                    <h2 style={{fontWeight: '700', marginBottom:'15px'}} className="card-title">{name}</h2>
                    <a href="#" className="btn btn-primary" onClick={()=>handleAddPlayer(props.player)}>Add me</a>
                </div>
            </div>
        </div>
    );
};

export default Player;