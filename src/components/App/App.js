import React from 'react';
import { Router, Link } from '@reach/router';

import HousesBin from "../Houses/HousesBin";
import DetailHouse from "../Houses/DetailHouse";

import { Row, Column } from '../Grid/Grid';
import '../Grid/Grid.css';
import './App.css';


class App extends React.Component{
    render() {
        return(
            <main className="app">
                <header>
                    <Link to="/">
                        <div className="logo-container">
                            <img className="logo" src="/house-logo.png" alt="House Of Joy"/>
                        </div>
                    </Link>
                    <Link to="/search-params">
                        <span aria-label="search" role="img">
                            🔍
                        </span>
                    </Link>
                </header>

                <Row>
                    <Column size={3}>
                        <Router>
                            <HousesBin path="/" />
                            <DetailHouse path="/house/:listingId" />
                        </Router> 
                    </Column>
                </Row>
            </main>
        )
    }
}

export default App;