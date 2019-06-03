import React from 'react';
import { connect } from 'react-redux';
import {fonts} from "../data/fonts";

const BurnendNumbers = (props) =>{
        return (
            props.valueList.map(num => {
                return <div key={num} style={{float: 'left' ,textDecoration: 'line-through', color:'red', fontFamily: `'${fonts[props.randomFont]}'`, fontSize:'4em'}}>
                    {`${num}, `}
                </div>
            })
        )
    };

const mapStateToProps = (state) => {
    return {
        valueList : state.valueList,
        randomFont: state.randomFont
    }
};

export default connect(mapStateToProps)(BurnendNumbers)