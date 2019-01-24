import React from 'react';

import Panel from '../Panel/Panel';

class House extends React.Component {

    render(){
        const houses = (this.props.houses.map(house => {
            return (
                <div key={house.listingId}>
                    <h1>{house.listPrice}</h1>
                    <img src={`${house.images[0].small}`} alt="medium" />
                    <div>{house.listingStatus}</div>
                    <div>{house.listingType}</div>
                    <div>{house.lotArea} Sq.ft</div>
                    <div>{house.bedroomsTotal} Beds</div>
                    <div>{house.bathroomsTotal} Baths</div>
                    <div>
                        {house.streetNumber}
                        {house.streetName}
                        {house.city}
                        {house.state}
                        {house.postcode}
                    </div>
                    <p>{house.description}</p>
                </div>
            )
        }))

        return(
            <Panel title="Current Listing">
                {houses}
            </Panel>
        )
    }
}

export default House;