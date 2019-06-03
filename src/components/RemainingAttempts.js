import React from 'react';
import { connect } from 'react-redux';
import {fonts} from "../data/fonts";

const RemainingAttempts = (props) => {
    return <div style={{ fontFamily: `'${fonts[props.randomFont]}'` ,fontSize: '4em'}}>Remaining Attempts: {props.counts}</div>
};

const mapStateToProps = (state) => {
    return {
        counts : state.counts,
        randomFont : state.randomFont
    }
};

export default connect(mapStateToProps)(RemainingAttempts)