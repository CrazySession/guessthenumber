import React from 'react';
import { connect } from 'react-redux';
import { guessed, addValue, setValue } from "../actions";

import Difficulties from './Difficulties';

const NavBar = (props) => {

    //#TODO onClick={() => {this.myInp.focus()} ----- further infos see SearchBar INPUT-TODO
    const gameStart = () => {
        if (props.chosenDiff !== 'Easy' && props.chosenDiff !== 'Medium' && props.chosenDiff !== 'Hard'){
            alert('please select a difficulty first');
        }else{
            props.addValue('clear');
            props.guessed(false);
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
                { props.chosenDiff }
                <br/><br/>
                <Difficulties   />
            </div>
        );

    // return if input field open --- game started
    if (!props.guess)
        return(
            <div>{props.hint}</div>
        );
};

const mapStateToProps = (state) => {
    return {
        guess : state.guess,
        chosenDiff : state.chosenDiff,
        hint : state.hintList
    }
};

export default connect(mapStateToProps, { guessed, addValue, setValue }) (NavBar)