import React from 'react';
import { connect } from 'react-redux';
import {fonts} from "../data/fonts";

const RemainingAttempts = (props) => {
    // destructering
    const { counts, randomFont, rndNumber, guess, value, picList } = props;

    if (value === rndNumber && guess && picList) {
        return (
            <div>
                <img src={picList[Math.ceil(Math.random()*10)-1].urls.small} alt={'random Pic'}/>
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
        value       : state.value,
        picList     : state.picList
    }
};

export default connect(mapStateToProps)(RemainingAttempts)