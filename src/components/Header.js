import React, { Component } from 'react';
import { connect } from 'react-redux';

import { chooseFont } from "../actions";

import { fonts } from "../data/fonts";

class Header extends Component {
    constructor(props){
        super(props);
        this.props.chooseFont(fonts.length-1);
    }
    render(){

    return (
        <h1 style={{ fontFamily: `'${fonts[this.props.randomFont]}'` ,fontSize: '4em'}}>
            Guess the number
        </h1>
    )}
}

const mapStateToProps = (state) => {
    return{
        randomFont : state.randomFont
    }
};

export default connect(mapStateToProps, { chooseFont }) (Header)