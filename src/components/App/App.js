import React from 'react';
import { Router, Link } from '@reach/router';

import HousesBin from "../Houses/HousesBin";
import DetailHouseBin from "../Houses/DetailHouseBin";

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
                    
                    
                </header>

                <Row>
                    <Column size={3}>
                        
                        <Router>
                            <HousesBin path="/" />
                            <DetailHouseBin path="/house/:listingId" />
                        </Router> 
                    </Column>
                </Row>
            </main>
        )
    }
}

export default App;