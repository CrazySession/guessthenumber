import React from 'react';
import { diff } from "../JSON/difficultiesData";

const Difficulties = () => {
        const difficulty = diff.map(diff => {
            return(
                <button key={diff.difficulty}>
                    {diff.difficulty}
                </button>
            )
        });
        return (
            <div>{difficulty}</div>
        )
};

export default Difficulties


/*
Object.keys(myObject).map(function(key, index) {
    myObject[key] *= 2;
});*/
