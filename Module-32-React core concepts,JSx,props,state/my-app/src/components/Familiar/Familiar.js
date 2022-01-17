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
                {
                    greetings
                }
            </div>
            <div>
                <h1>Food</h1>
                {
                    familiar ? <h1>I will buy food for you.</h1> :  <h1>Give your own bill to take food.</h1>
                }
            </div>
        </div>
    );
};

export default Familiar;