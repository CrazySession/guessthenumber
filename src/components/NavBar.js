import React from 'react';
import { connect } from 'react-redux';
import { guessed, addValue, setValue, chooseFont } from "../actions";

import Difficulties from './Difficulties';
import {fonts} from "../data/fonts";

const NavBar = (props) => {

    //#TODO onClick={() => {this.myInp.focus()} ----- further infos see SearchBar INPUT-TODO
    const gameStart = () => {
        if (props.chosenDiff !== 'Easy' && props.chosenDiff !== 'Medium' && props.chosenDiff !== 'Hard'){
            alert('please select a difficulty first');
        }else{
            props.addValue('clear');
            props.guessed(false);
            props.chooseFont(fonts.length-1);
            props.setValue('');
        }
    };

    // return if input field locked --- game not started yet
    if (props.guess)
        return(
            <div>
                <button
                    onClick={gameStart}>
                    Start Game
                </button>
                <span style={{ fontFamily: `'${fonts[props.randomFont]}'` ,fontSize: '1em'}}>{ props.chosenDiff }</span>
                <br/><br/>
                <Difficulties   />
            </div>
        );

    // return if input field open --- game started
    if (!props.guess)
        return(
            <div style={{ fontFamily: `'${fonts[props.randomFont]}'` ,fontSize: '4em'}}>{props.hint}</div>
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