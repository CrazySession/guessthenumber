import React, { Component } from 'react';
import { connect } from 'react-redux';
import { giveHint } from "../actions";

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {      value : '',
                            guessed : false
        };
    }

    render() {

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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rndNumber : state.randomNumber,
    }
};

export default connect(mapStateToProps, { giveHint }) (SearchBar)