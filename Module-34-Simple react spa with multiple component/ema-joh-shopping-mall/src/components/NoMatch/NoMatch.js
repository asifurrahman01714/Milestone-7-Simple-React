import React from 'react';

const NoMatch = () => {
    const style={
        color: 'red',
        fontSize: '50px',
        textAlign: 'center'
    }
    return (
        <div style={style}>
            <h1>Error 404!</h1>
        </div>
    );
};

export default NoMatch;