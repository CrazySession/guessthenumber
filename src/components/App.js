import React , { Component } from 'react';
import { connect } from 'react-redux';
import { createNumber } from "../actions";

import SearchBar from './SearchBar';
import RemainingAttempts from "./RemainingAttempts";
import BurnendNumbers from './BurnendNumbers';

class App extends Component {
    constructor(props){
        super(props);
        this.props.createNumber();
    }

    render(){

    return (
        <div>
            <SearchBar  />
            <RemainingAttempts   />
            {this.props.hint}
            <BurnendNumbers     />
        </div>
    )
}}

const mapStateToProps = (state) => {
    return {
        rndNumber : state.randomNumber,
        hint : state.hintList
    }
};

export default connect(mapStateToProps, { createNumber })(App)