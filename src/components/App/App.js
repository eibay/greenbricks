import React from 'react';

import HouseContainer from "../Houses/HouseContainer";
import { Row, Column } from '../Grid/Grid';
import '../Grid/Grid.css';
import './App.css';


class App extends React.Component{
    render() {
        return(
            <main className="app">
                <div className="logo-container">
                    <img className="logo" src="/house-logo.png" alt="House Of Joy"/>
                </div>
                <Row>
                    <Column size={3}> 
                        <HouseContainer />
                    </Column>
                </Row>
            </main>
        )
    }
}

export default App;