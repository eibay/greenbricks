import React from 'react';

import Panel from '../Panel/Panel';
import './House.css';

class House extends React.Component {

    render(){
        const houses = (this.props.houses.map(house => {
            const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(house.listPrice)
            return (
                <div key={house.listingId} className="card-house">
                    <div className="card-house__inner">
                    <img src={`${house.images[0].small}`} alt="medium" width="100%"/>
                    <div className="card-house__body">
                        <div className="listing-status"><p>{house.listingStatus}</p></div>
                        <h2>{price}</h2>
                        <div>
                            {`${house.streetNumber} ${house.streetName}`}
                        </div>
                        <div>
                            {`${house.city} ${house.state} ${house.postcode}`}
                        </div>
                        <br />
                        <hr></hr>
                        <br />
                        <div>{`${house.bedroomsTotal} Beds  | ${house.bathroomsTotal} Baths  |  ${house.lotArea} Sq.ft `}</div>
                        <div>{house.listingType}</div>
                    </div>
                    </div>
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