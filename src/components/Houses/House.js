import React from 'react'

class House extends React.Component {


    render(){
        return(
            <div>
                {this.props.houses.map(house => {
                    return <div key={house.listingId}>
                        <h1>{house.listingId}</h1>
                    </div>
                })}
            </div>
        )}
}

export default House;