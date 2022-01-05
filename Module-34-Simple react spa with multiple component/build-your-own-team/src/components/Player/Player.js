import React from 'react';

const Player = (props) => {
    // console.log(props);
    // console.log(props.player);
    const {name, image, salary} = props.player;
    return (
        <div>
            <h1>Player</h1>
        </div>
    );
};

export default Player;