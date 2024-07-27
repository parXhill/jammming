import React from 'react';

export default function SearchBar({searchInput, handleSearchInput, handleSubmit}) {
    
    return (
    <form onSubmit={handleSubmit} action="/search" method="GET">
        <input type="search" name="query" placeholder="Search..." value={searchInput} onChange={handleSearchInput}/>
        <button type="submit">Go!</button>    
    </form>);
}
