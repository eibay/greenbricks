import React from 'react';
import { connect } from 'react-redux';
import escapeRegExp from 'escape-string-regexp'

import { actions } from '../../ducks/houses';
import Houses from "./Houses";
import Search from "../Search/Search";

class HousesBin extends React.Component {

    componentDidMount = () => {
        this.props.fetchHouses();
    }
    
    render(){
        const { loading, houses, searchField, onSearchChange } = this.props;
        let filteredHouses = [];
        if (houses.length > 1) {
            const match = new RegExp(escapeRegExp(searchField.toLowerCase()), 'i');
            filteredHouses = houses.filter(house => {
                const criteria = house.semanticUrlComponent;
                return match.test(criteria);
            });
        }
        filteredHouses.map(h => {
            console.log(h.semanticUrlComponent);
        })
        return(
            <div> 
                {loading ? <h1>Loading</h1> :
                    <div>
                        <Search onSearch={onSearchChange}/>
                        <Houses 
                            houses={filteredHouses}
                        /> 
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    houses: state.houses.results,
    searchField: state.houses.searchField,
    loading: state.houses.loading,
    isDetail: state.houses.isDetail,
})

const mapDispatchToProps = (dispatch) => ({
    fetchHouses: () => dispatch(actions.fetchHouses()),
    onSearchChange: (e) => dispatch(actions.searchHouse(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(HousesBin);