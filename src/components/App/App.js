import React from 'react';

import HouseContainer from "../Houses/HouseContainer";
import { Row, Column } from '../Grid/Grid';
import '../Grid/Grid.css';
import './App.css';


class App extends React.Component{
    render() {
        return(
            <main className="app">
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