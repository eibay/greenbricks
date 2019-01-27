import React from 'react';
import { Link } from '@reach/router';

import './House.css';

const House = ({house}) => {
    const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(house.listPrice);
    const status = house.listingStatus === "ComingSoon" ? "Coming Soon" : house.listingStatus;
    return(
        <div className="card-house__inner">
            <Link to={`/house/${house.listingId}`}> 
                <img src={`${house.images[0].small}`} alt="medium" width="100%"/>
            </Link>
            <div className="card-house__body">
                <div className="listing-status"><p>{status}</p></div>
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
    )
}

export default House;