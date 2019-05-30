import React from 'react';
import { connect } from 'react-redux';
import { guessed, addValue } from "../actions";

import Difficulties from './Difficulties';

const NavBar = (props) => {
    const gameStart = () => {
        props.addValue('clear');
        props.guessed(false);
    };

    if (props.guess)
        return(
            <div>
                <button
                    onClick={gameStart}>
                    Start Game
                </button>
                <br/><br/>
                <Difficulties   />
            </div>
        );

    if (!props.guess)
        return(
            <div>Good Luck!</div>
        );
};

const mapStateToProps = (state) => {
    return {
        guess : state.guess
    }
};

export default connect(mapStateToProps, { guessed, addValue }) (NavBar)