import React , { Component } from 'react';
import { connect } from 'react-redux';
import { createNumber} from "../actions";

import SearchBar from './SearchBar';

class App extends Component {
    constructor(props){
        super(props);

        this.props.createNumber();

        this.state = {      value : '',
                            guessed : false,
                            answer: '',
                            hint : ''};
    }

    render(){
    const compareNum = (e) => {
        e.preventDefault();
        if (this.state.value === this.props.rndNumber) {
            this.setState({ answer: 'Perfect! This is the number we´re looking for!'});
            this.setState({ hint : ''});
            this.setState({ guessed : true });
        }else{
            this.setState({ value : ''});
            this.setState({ answer : 'Wrong guess. Try again!'})
            if(this.state.value < this.props.rndNumber){
                this.setState({ hint : 'too low.'});
            }else{
                this.setState({ hint: 'too high.'});
            }
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
            <SearchBar/>
            {this.state.hint}<br />
            {this.state.answer}
        </div>
    )
}}

const mapStateToProps = (state) => {
    return { rndNumber : state.randomNumber }
};

export default connect(mapStateToProps, { createNumber })(App)