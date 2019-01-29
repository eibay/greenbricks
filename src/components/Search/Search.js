import React from 'react';

import './Search.css';

class Search extends React.Component {
    render(){
        const { onSearch } = this.props
        return(
            <div className="search">
                <input className="search-input"
                    placeholder='🔍 ( ex. california | 3-bed | tulare | visalia )' 
                    onChange={onSearch}
                />
            </div>
        )
    }
}

export default Search;