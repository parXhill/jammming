import React, {useState} from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";
import './SearchContainer.css';

//const accessToken = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;


export default function SearchContainer({selectedTrack, setSelectedTrack, playlistItems, setPlaylistItems, searchItems, setSearchItems}) {

    const [searchInput, setSearchInput] = useState("");

    function handleSearchInput(e) {
        setSearchInput(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault()
        const searchQuery = e.target.elements.query.value;
        console.log("Form submitted with input:", searchQuery);
        
        const encodedSearchQuery = `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track&market=AU&limit=10&offset=0`;

        fetch(encodedSearchQuery, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
        })
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
        })
        .then(data => {

            setSearchItems(data.tracks.items);
            
   
        })
        .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        });

    }




    return (
        <div className="search-container">
            <SearchBar className="search-bar" searchInput={searchInput} setSearchInput={setSearchInput} handleSearchInput={handleSearchInput} handleSubmit={handleSubmit} setPlaylistItems={setPlaylistItems} playlistItems={playlistItems} setSearchItems={setSearchItems} searchItems={searchItems} setSelectedTrack={setSelectedTrack} selectedTrack={selectedTrack}/>
            <Results className="results" searchInput={searchInput}  setSelectedTrack={setSelectedTrack} selectedTrack={selectedTrack} setPlaylistItems={setPlaylistItems} playlistItems={playlistItems} setSearchItems={setSearchItems} searchItems={searchItems}/>
        </div>
    )
}