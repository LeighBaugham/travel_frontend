import React from 'react';

const SearchForm = (props)=> {

    return(
        <div className="ui search">
            <input onChange={this.props.handleChange} name="search" className="prompt" type="text" placeholder="Search Trips..."/>
        </div>
    )

}

export default SearchForm;