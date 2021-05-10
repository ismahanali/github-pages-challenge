import React from 'react';

const SearchForm =  (props) => {
    return (
        <div className="search-form">
            <input type="text" 
            className="search-input"
            value={props.value}
            onChange= {(e) => props.setSearchValue(e.target.value)}
            placeholder="Search for nomination"/>

        </div>
    ) 

}

export default SearchForm;