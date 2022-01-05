import React from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import playerData from '../../fakeData/teamFakeData.json';
import { useEffect, useState } from 'react';
const Home = () => {
    const [players, setPlayers] = useState(playerData);
    useEffect(() => {
        setPlayers(playerData);
    },[])
    console.log(players);
    return (
        <>
            <div className="container" style={{marginTop: '10px'}}>
                <div className="row">
                    <div className="col-md-9" style={{borderRight: '3px solid lightgray'}}>
                        <div className="row">
                            {
                                players.map(player => <Player key={player.id} player={player}></Player>)
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Cart></Cart>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;