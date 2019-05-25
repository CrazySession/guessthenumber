import React , { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {      rndNumber : Math.ceil(Math.random() * 10) ,
                            value : '',
                            guessed : false,
                            answer: '',
                            hint : ''};
    }

    render(){
    const compareNum = (e) => {
        e.preventDefault();
        if (this.state.value === this.state.rndNumber) {
            this.setState({ answer: 'Perfect! This is the number we´re looking for!'});
            this.setState({ hint : ''});
            this.setState({ guessed : true });
        }else{
            this.setState({ value : ''});
            this.setState({ answer : 'Wrong guess. Try again!'})
            if(this.state.value < this.state.rndNumber){
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
            {this.state.hint}<br />
            {this.state.answer}
        </div>
    )
}}

export default App