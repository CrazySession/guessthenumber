import React from 'react';
import { connect } from 'react-redux';
import { setDifficulty, createNumber } from "../actions";

import { diff } from "../data/difficultiesData";

const Difficulties = (props) => {
        const difficulty = diff.map(diff => {
            return(
                <button
                    key={diff.difficulty}
                    onClick={() => {props.setDifficulty(diff.tries); props.createNumber(diff.numbers);}}>
                    <b style={{fontSize:'1.5em'}}>{diff.difficulty}</b><br/><br/><hr/>
                    Count: {diff.numbers}<br/><br/>
                    Attempts: {diff.tries}
                </button>
            )
        });
        return (
            <div>{difficulty}</div>
        )
};

const mapStateToProps = () => {
  return {

  }
};

export default connect(mapStateToProps , { setDifficulty, createNumber }) (Difficulties)
