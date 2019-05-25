import React , { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {      rndNumber : Math.ceil(Math.random() * 10) ,
                            value : '',
                            guessed : false};

        this.fieldRef = React.createRef();
    }

    render(){
    const compareNum = (e) => {
        e.preventDefault();
        console.log('Input:' + this.state.value);
        if (this.state.value === this.state.rndNumber) {
            console.log('match');
            this.setState({ guessed : true });
        }else{
            this.setState({ value : ''});
            console.log('wrong');
        }
    };

    return (
        <div>
            <form onSubmit={compareNum}>
                <label>Guess the number</label>
                <br />
                <input
                    disabled={this.state.guessed}
                    ref={this.fieldRef}
                    value={this.state.value}
                    onChange={e => this.setState({ value: parseInt(e.target.value) })} />
            </form>
            {this.state.rndNumber}
        </div>
    )
}}

export default App