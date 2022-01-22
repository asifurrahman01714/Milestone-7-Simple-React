import React from 'react';

const Header = (props) => {
    const {count, setCount} = props;
    return (
        <div>
            <h1>Count in Header: {count}</h1>
        </div>
    );
};

export default Header;