import React from 'react';
import Difficulties from './Difficulties';

const NavBar = () => {
    return(
        <div>
            <button>New Game</button>
            <button>Start Game</button>
            <br/><br/>
            <Difficulties   />
        </div>
    )
};

export default NavBar