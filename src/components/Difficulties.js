import React from 'react';
import { diff } from "../JSON/difficultiesData";

const Difficulties = () => {
        const difficulty = diff.map(diff => {
            return(
                <button key={diff.difficulty}>
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

export default Difficulties
