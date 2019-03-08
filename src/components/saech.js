import React from 'react';

const Search = (props) => {
    return (
        <div className="search">
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" onChange={(event) => props.onChange(event.target.value)} />
        </div>
    )
};

export default Search;