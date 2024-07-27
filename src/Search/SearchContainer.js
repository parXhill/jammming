import React, {useState} from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";

const accessToken = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

export default function SearchContainer() {

    const [searchInput, setSearchInput] = useState("");

    function handleSearchInput(e) {
        setSearchInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        const searchQuery = e.target.elements.query.value;
        console.log("Form submitted with input:", searchQuery);

        fetch('https://api.spotify.com/v1/search?q=gaga&type=track&market=AU&limit=10&offset=0', {
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
        console.log(data); // Handle the response data
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