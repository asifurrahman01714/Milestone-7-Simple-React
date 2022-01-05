import React from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';

const Home = () => {
    return (
        <div style={{marginTop: '10px'}}>
            <div>
                <Player></Player>
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;