import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../../ducks/houses';
import Houses from "./Houses";

class HousesBin extends React.Component {

    componentDidMount = () => {
        this.props.fetchHouses();
    }
    
    render(){
        const { houses } = this.props
        return(
            <div>
                <Houses 
                    houses={houses.results}
                /> 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    houses: state.houses,
})

const mapDispatchToProps = (dispatch) => ({
    fetchHouses: () => dispatch(actions.fetchHouses()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HousesBin);