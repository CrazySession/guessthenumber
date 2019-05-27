import React, { Component } from 'react';
import { connect } from 'react-redux';
import { giveHint, count, setValue, guessed } from "../actions";

class SearchBar extends Component {
    render() {

        //#TODO extract function to action creater ?!
        const compareNum = (e) => {
            e.preventDefault();
            this.props.count(1);
            if (this.props.value === this.props.rndNumber) {
                this.props.giveHint(this.props.value, this.props.rndNumber);
                this.props.guessed(true);
            }else{
                if (this.props.counts === 1){
                    console.log('you lose!better luck next time.' +
                        'the number was ' + this.props.rndNumber);
                    this.props.guessed(true);
                }
                this.props.giveHint(this.props.value, this.props.rndNumber);
                this.props.setValue('');
            }
        };

        return (
            <div>
                <form onSubmit={compareNum}>
                    <label>Guess the number</label>
                    <br />
                    <input
                        disabled={this.props.guess}
                        value={this.props.value}
                        onChange={e => this.props.setValue(parseInt(e.target.value))}
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rndNumber : state.randomNumber,
        counts : state.counts,
        value : state.value,
        guess : state.guess
    }
};

export default connect(mapStateToProps, { giveHint, count, setValue, guessed }) (SearchBar)