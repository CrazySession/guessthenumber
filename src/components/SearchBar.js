import React from 'react';
import { connect } from 'react-redux';
import { giveHint, count, setValue, guessed, addValue, setDifficulty } from "../actions";

const SearchBar = (props) => {

        //#TODO extract function to action creater !? or helper function ?!

        // #### Main Function ####

        const compareNum = (e) => {
            e.preventDefault();

            // Reducing Reaming Attempts by one
            props.count(1);

            // Case --- Win Game
            if (props.value === props.rndNumber) {
                props.giveHint(props.value, props.rndNumber);
                props.guessed(true);
                props.setValue('');
                props.setDifficulty('');
            }else{

                // Case -- - Lose Game
                if (props.counts === 1){
                    console.log('you lose!better luck next time.' +
                        'the number was ' + props.rndNumber);
                    props.guessed(true);
                    props.setDifficulty('');

                    // Case --- Guessed Wrong but remaining attempts
                }else {
                    props.giveHint(props.value, props.rndNumber);
                    props.addValue(props.value);
                }
                
                props.setValue('');
            }
        };
        //#TODO INPUT-TODO set redux var for input ref to set autofocus on input field after clicking "Start Game" at Navbar.js
        return (
            <div>
                <form onSubmit={compareNum}>
                    <input
                        /*ref={(ip) => this.myInp = ip}*/
                        disabled={props.guess}
                        value={props.value}
                        onChange={e => props.setValue(parseInt(e.target.value))}
                    />
                </form>
            </div>
        )

};

const mapStateToProps = (state) => {
    return {
        rndNumber : state.randomNumber,
        counts :    state.counts,
        value :     state.value,
        guess :     state.guess,
        valueList : state.valueList
    }
};

export default connect(mapStateToProps, {   giveHint,
                                            count,
                                            setValue,
                                            guessed,
                                            addValue,
                                            setDifficulty
                                        }) (SearchBar)