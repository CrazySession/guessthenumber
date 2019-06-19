import React from 'react';
import { connect } from 'react-redux';
import { guessed, addValue, setValue, chooseFont } from "../actions";

import Difficulties from './Difficulties';
import {fonts} from "../data/fonts";

const NavBar = (props) => {
    //destructering
    const { chosenDiff, addValue, guessed, chooseFont, setValue, randomFont, guess, hint  } = props;

    const gameStart = () => {
        if (chosenDiff !== 'Easy' && chosenDiff !== 'Medium' && chosenDiff !== 'Hard'){
            alert('please select a difficulty first');
        }else{
            addValue('clear');
            guessed(false);
            chooseFont(fonts.length-1);
            setValue('');
        }
    };

    // return if input field locked --- game not started yet
    if (guess)
        return(
            <div>
                <button
                    onClick={gameStart}>
                    Start Game
                </button>
                <span style={{ fontFamily: `'${fonts[randomFont]}'` ,fontSize: '1em'}}>{ chosenDiff }</span>
                <br/><br/>
                <Difficulties   />
            </div>
        );

    // return if input field open --- game started
    if (!guess)
        return(
            <div style={{ fontFamily: `'${fonts[randomFont]}'` ,fontSize: '4em'}}>{hint}</div>
        );
};

const mapStateToProps = (state) => {
    return {
        guess : state.guess,
        chosenDiff : state.chosenDiff,
        hint : state.hintList,
        randomFont : state.randomFont
    }
};

export default connect(mapStateToProps, { guessed, addValue, setValue, chooseFont }) (NavBar)