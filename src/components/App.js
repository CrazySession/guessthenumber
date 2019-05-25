import React , { Component } from 'react';

class App extends Component {
    state = {   rndNumber : Math.ceil(Math.random() * 10) ,
                value : 0 };

    render(){
    const compareNum = (e) => {
        console.log(this.state.rndNumber);
        e.preventDefault();
        console.log('Input:' + this.state.value);
        if (this.state.value === this.state.rndNumber) {
            console.log('match');
        }else{
            console.log('wrong');
        }
    };
    return (
        <div>
            <form onSubmit={compareNum}>
                <label>Guess the number</label><br />
                <input onChange={e => this.setState({ value: parseInt(e.target.value) })} />
            </form>
        </div>
    )
}}

export default App