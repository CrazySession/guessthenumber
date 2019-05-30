import React from 'react';
import { connect } from 'react-redux';
import { guessed } from "../actions";

import Difficulties from './Difficulties';

const NavBar = (props) => {
    if (props.guess)
        return(
            <div>
                <button
                    onClick={() => props.guessed(false)}>
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

export default connect(mapStateToProps, { guessed }) (NavBar)