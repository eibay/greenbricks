import React from 'react'
import { connect } from 'react-redux';

import { actions } from '../../ducks/houses';
import House from './House';

import './House.css';
import Panel from '../Panel/Panel';

// NOTE: this.props.listingId comes from <Link> component and <Router>
class DetailHouse extends React.Component {

    componentDidMount() {
        this.props.fetchHouses();
    }

    render() {
        const { isSingle } = this.props
        const house = this.props.houses.results.filter(house => (house.listingId === this.props.listingId));
        return(
            <Panel>
                <House house={house[0]} isSingle={isSingle} /> 
            </Panel>
        )
    }
}

const mapStateToProps = (state) => ({
    houses: state.houses,
    isSingle: state.isSingle,
})


const mapDispatchToProps = (dispatch) => ({
    fetchHouses: () => dispatch(actions.fetchHouses()),
    selectHouse: (house) => dispatch(actions.selectHouse(house)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailHouse);