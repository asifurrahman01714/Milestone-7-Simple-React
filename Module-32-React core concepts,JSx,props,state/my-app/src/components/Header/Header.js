import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { CountContext } from '../../App';

const Header = () => {
    const [count, setCount] = useContext(CountContext);
    return (
        <div>
            <h1>Count in Header: </h1>
        </div>
    );
};

export default Header;