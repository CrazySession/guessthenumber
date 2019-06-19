import React, {Component} from 'react';
import { connect } from 'react-redux';

import {    giveHint,
            count,
            setValue,
            guessed,
            addValue,
            setDifficulty,
            storePics} from "../actions";
import unsplash from '../api/unsplash'

import './css/searchBar.css';
import {fonts} from "../data/fonts";

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { rndPic : Math.ceil(Math.random()*4)-1 , pics : ['cats', 'cat', 'dogs', 'dog']};
    }

    componentDidUpdate(){
        this.nameInput.focus();
    }

    getUser = async () => {
        try {
            const response = await unsplash.get('/search/photos', {
                params: {query : this.state.pics[this.state.rndPic]}
            });
            this.props.storePics(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    //#TODO extract function to action creater !? or helper function ?!

    // #### Main Function ####

    compareNum = (e) => {
        e.preventDefault();

        // Reducing Reaming Attempts by one
        this.props.count(1);

        // Case --- Win Game
        if (this.props.value === this.props.rndNumber) {
            this.props.giveHint(this.props.value, this.props.rndNumber);
            this.props.guessed(true);
            this.props.setDifficulty('');
            this.setState( {rndPic : Math.ceil(Math.random()*4)-1 } );
            this.getUser();
        }else{

            // Case -- - Lose Game
            if (this.props.counts === 1){
                console.log('you lose!better luck next time.' +
                    'the number was ' + this.props.rndNumber);
                this.props.guessed(true);
                this.props.setDifficulty('');

                // Case --- Guessed Wrong but remaining attempts
            }else {
                this.props.giveHint(this.props.value, this.props.rndNumber);
                this.props.addValue(this.props.value);
            }

            this.props.setValue('');
        }
    };
    render() {
        // destructering
        const { value, rndNumber, guess, randomFont } = this.props;


        return (
            <div>
                <form onSubmit={this.compareNum}>
                    <input
                        style={value === rndNumber && guess === true ? {border: 'green solid 8px'} : {
                            border: 'black solid 8px',
                            fontFamily: `'${fonts[randomFont]}'`
                        }}
                        type={'number'}
                        ref={(input) => { this.nameInput = input; }}
                        /*ref={(ip) => this.myInp = ip}*/
                        disabled={guess}
                        value={value}
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
        counts :    state.counts,
        value :     state.value,
        guess :     state.guess,
        valueList : state.valueList,
        randomFont :state.randomFont,
        picList :   state.picList
    }
};

export default connect(mapStateToProps, {   giveHint,
                                            count,
                                            setValue,
                                            guessed,
                                            addValue,
                                            setDifficulty,
                                            storePics
                                        }) (SearchBar)