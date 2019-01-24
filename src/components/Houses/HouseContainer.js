import React from 'react';
import { connect } from 'react-redux';

import { actions as housesActions } from '../../ducks/houses';
import House from "../Houses/House";

class HouseContainer extends React.Component {

    componentDidMount() {
        this.props.fetchHouses();
      }
    
    render(){
        return(
            <House houses={this.props.houses.results} />

        )
    }

}

const mapStateToProps = (state) => ({
    houses: state.houses
})

const mapDispatchToProps = (dispatch) => ({
    fetchHouses: () => dispatch(housesActions.fetchHouses())
})

export default connect(mapStateToProps, mapDispatchToProps)(HouseContainer);