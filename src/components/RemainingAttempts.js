import React from 'react';
import { connect } from 'react-redux';
import {fonts} from "../data/fonts";

const RemainingAttempts = (props) => {
    // destructering
    const { counts, randomFont, rndNumber, guess, value } = props;

    if (value === rndNumber && guess === true) {
        return (
            <div>
                {/*<img src={this.state.pic} alt={'random Pic'}/>*/}
                <p style={{ textAlign:'center', fontFamily: `'${fonts[randomFont]}'` }}>Victory! You did it! Great! Try again?!</p>
            </div>
        )
    }

    return <div style={{ fontFamily: `'${fonts[randomFont]}'` ,fontSize: '4em'}}>Remaining Attempts: {counts}</div>
};

const mapStateToProps = (state) => {
    return {
        counts      : state.counts,
        randomFont  : state.randomFont,
        rndNumber   : state.randomNumber,
        guess       : state.guess,
        value       : state.value
    }
};

export default connect(mapStateToProps)(RemainingAttempts)