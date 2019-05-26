import React, { Component } from 'react';
import { connect } from 'react-redux';
import { giveHint, count } from "../actions";

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
            this.props.count(1);
            if (this.state.value === this.props.rndNumber) {
                this.props.giveHint(this.state.value, this.props.rndNumber);
                this.setState({ guessed : true });
            }else{
                if (this.props.counts === 1){
                    console.log('lost');
                    this.setState({ guessed : true });
                }

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
        counts : state.counts
    }
};

export default connect(mapStateToProps, { giveHint, count }) (SearchBar)