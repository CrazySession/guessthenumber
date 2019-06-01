import React from 'react';
import { connect } from 'react-redux';
import { giveHint, count, setValue, guessed, addValue, setDifficulty } from "../actions";

const SearchBar = (props) => {

        //#TODO extract function to action creater !? or helper function ?!
        const compareNum = (e) => {
            e.preventDefault();
            props.count(1);
            if (props.value === props.rndNumber) {
                props.giveHint(props.value, props.rndNumber);
                props.guessed(true);
                props.setValue('');
                props.setDifficulty('');
            }else{
                if (props.counts === 1){
                    console.log('you lose!better luck next time.' +
                        'the number was ' + props.rndNumber);
                    props.guessed(true);
                    props.setDifficulty('');
                }else {
                    props.giveHint(props.value, props.rndNumber);
                    props.addValue(props.value);
                }
                props.setValue('');
            }
        };

        return (
            <div>
                <form onSubmit={compareNum}>
                    <input
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