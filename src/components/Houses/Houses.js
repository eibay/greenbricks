import React from 'react';
 
import Panel from '../Panel/Panel';
import './House.css';
import House from './House'

class Houses extends React.Component {
    render(){
        const houseListings = (this.props.houses.map(house => {
            return (
                <div key={house.listingId} className="card-house">
                    <House house={house} selectHouse={this.props.selectHouse}/>
                </div>
            )
        }))
        return(
            <Panel title="Current Listing">
                {houseListings}
            </Panel>
        )
    }
}

export default Houses;