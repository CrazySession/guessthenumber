import React , { Component } from 'react';
import { connect } from 'react-redux';
import { createNumber } from "../actions";

import Header from './Header';
import SearchBar from './SearchBar';
import RemainingAttempts from "./RemainingAttempts";
import BurnendNumbers from './BurnendNumbers';
import NavBar from './NavBar';

import './css/grid.css';

class App extends Component {
    render(){
    console.log(this.props.rndNumber);
    return (
        <div className={'container'}>
            <header>
                <Header             />
            </header>
            <main>
                <SearchBar          />
            </main>
            <aside id={"left"}>
                <RemainingAttempts  />
            </aside>
            <aside id={"right"}>
                <BurnendNumbers     />
            </aside>
            <br                 />
            {this.props.hint}
            <section id={'nav'}>
                <NavBar             />
            </section>
            <footer>

            </footer>
        </div>
    )
}}

const mapStateToProps = (state) => {
    return {
        rndNumber : state.randomNumber,
        hint : state.hintList
    }
};

export default connect(mapStateToProps, { createNumber })(App)