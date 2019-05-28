import React, { Component } from 'react';
import { connect } from 'react-redux';

class BurnendNumbers extends Component{
    render() {
        return (
            this.props.valueList.map(num => {
                return <div key={num} style={{float: 'left' ,textDecoration: 'line-through'}}>
                    {`${num}, `}
                </div>
            })
        )
    }
}

const mapStateToProps = (state) => {
    return {
        valueList : state.valueList
    }
};

export default connect(mapStateToProps)(BurnendNumbers)