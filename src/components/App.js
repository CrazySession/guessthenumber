import React , { Component } from 'react';
import { connect } from 'react-redux';
import { createNumber, giveHint } from "../actions";

import SearchBar from './SearchBar';

class App extends Component {
    constructor(props){
        super(props);

        this.props.createNumber();

        this.state = {      value : '',
                            guessed : false
        };
    }

    render(){
    const compareNum = (e) => {
        e.preventDefault();
        if (this.state.value === this.props.rndNumber) {
            this.props.giveHint(this.state.value, this.props.rndNumber);
            this.setState({ guessed : true });
        }else{
            this.props.giveHint(this.state.value, this.props.rndNumber);
            this.setState({ value : ''});
        }
    };

    return (
        <div>
            <form onSubmit={compareNum}>
                <label>Guess the number</label>
                <br />
                <input
                    disabled={this.state.guessed}
                    value={this.state.value}
                    onChange={e => this.setState({ value: parseInt(e.target.value) })} />
            </form>
            <SearchBar  />
            {this.props.hint}
        </div>
    )
}}

const mapStateToProps = (state) => {
    return {
        rndNumber : state.randomNumber,
        hint : state.hintList
    }
};

export default connect(mapStateToProps, {
                                            createNumber,
                                            giveHint
})(App)