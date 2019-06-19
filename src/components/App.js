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
            <aside id={"right"} style={{border:'black solid 2px'}}>
                <BurnendNumbers     />
            </aside>
            <section id={'nav'}>
                <NavBar             />
            </section>
            <footer>
                &copy; 2019 This Site was designed and created by
                                                        <a href="https://github.com/CrazySession"
                                                        target="_blank"
                                                        rel="noopener noreferrer"> <b>Andreas Kochmann</b> <i style={{ color: '#8D674B', fontSize: '1.3em', marginTop : '5px'}} className="fab fa-github"></i> </a>
                Thanks for all the awesome pictures to <a href="https://unsplash.com/"
                                              target="_blank"
                                                          rel="noopener noreferrer"><b>Unsplash</b> <i style={{ color: '#8D674B', fontSize: '1.3em', marginTop : '5px'}} className="fas fa-camera"></i></a>
            </footer>
        </div>
    )
}}

const mapStateToProps = (state) => {
    return {
        rndNumber : state.randomNumber,
    }
};

export default connect(mapStateToProps, { createNumber })(App)