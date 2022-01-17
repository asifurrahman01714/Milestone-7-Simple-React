import React from 'react';

const Familiar = (props) => {
    const familiar = props.familiar;
    let greetings;
    if (familiar) {
        greetings = <h1>How are you my friend?</h1>
    } else {
        greetings = <h1>Who the hell you are?</h1>
    }
    return (
        <div>
            <div>
                <h1>Greetings</h1>
                
            </div>
        </div>
    );
};

export default Familiar;