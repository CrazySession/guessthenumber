import React, { Component } from 'react';

import { fonts } from "../data/fonts";

class Header extends Component {
    constructor(props){
        super(props);

        this.state = { number : Math.ceil(Math.random() * (fonts.length-1))};
    }
    render(){

    return (
        <h1 style={{ fontFamily: `'${fonts[this.state.number]}'` ,fontSize: '4em'}}>
            Guess the number
        </h1>
    )}
}

export default Header