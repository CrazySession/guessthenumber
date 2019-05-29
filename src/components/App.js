import React , { Component } from 'react';
import { connect } from 'react-redux';
import { createNumber } from "../actions";

import SearchBar from './SearchBar';
import RemainingAttempts from "./RemainingAttempts";
import BurnendNumbers from './BurnendNumbers';
import NavBar from './NavBar';

class App extends Component {
    constructor(props){
        super(props);
        this.props.createNumber();
    }

    render(){

    return (
        <div>
            <SearchBar          />
            <RemainingAttempts  />
            <BurnendNumbers     />
            <br                 />
            {this.props.hint}
            <NavBar             />
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