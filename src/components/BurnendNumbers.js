import React from 'react';
import { connect } from 'react-redux';

const BurnendNumbers = (props) =>{
        return (
            props.valueList.map(num => {
                return <div key={num} style={{float: 'left' ,textDecoration: 'line-through'}}>
                    {`${num}, `}
                </div>
            })
        )
    };

const mapStateToProps = (state) => {
    return {
        valueList : state.valueList
    }
};

export default connect(mapStateToProps)(BurnendNumbers)