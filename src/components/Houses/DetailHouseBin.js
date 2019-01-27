import React from 'react'
import { connect } from 'react-redux';

import { actions } from '../../ducks/houses';
import DetailHouse from './DetailHouse';
import Panel from '../Panel/Panel';
import './House.css';

// NOTE: this.props.listingId comes from <Link> component and <Router>
class DetailHouseBin extends React.Component {

    componentDidMount() {
        this.props.fetchHouses();
    }

    render() {
        const house = this.props.houses.results.filter(house => (house.listingId === this.props.listingId));
        return(
            <Panel>
                <DetailHouse house={house[0]} isDetail={true} /> 
            </Panel>
        )
    }
}

const mapStateToProps = (state) => ({
    houses: state.houses,
})


const mapDispatchToProps = (dispatch) => ({
    fetchHouses: () => dispatch(actions.fetchHouses()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailHouseBin);