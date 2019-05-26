import React from 'react';
import { connect } from 'react-redux';

const RemainingAttempts = (props) => {
    return <div>Remaining Attempts: {props.counts}</div>
};

const mapStateToProps = (state) => {
    return {
        counts : state.counts
    }
};

export default connect(mapStateToProps)(RemainingAttempts)