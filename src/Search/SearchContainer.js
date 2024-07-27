import React, {useState} from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";

const accessToken = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
console.log(accessToken);


export default function SearchContainer() {

    const [searchInput, setSearchInput] = useState("");

    function handleSearchInput(e) {
        setSearchInput(e.target.value);
    }

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
            const trackNames = data.tracks.items.map(track => track.name);
            const artistNames = data.tracks.items.map(track => track.artists[0].name);
            console.log(trackNames);
            console.log(artistNames);
            //console.log(data); // Handle the response data
        })
        .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        });

    }

    return (
        <div>
            <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} handleSearchInput={handleSearchInput} handleSubmit={handleSubmit}/>
            <Results searchInput={searchInput}/>
        </div>
    )
}