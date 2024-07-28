import React, {useState} from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";
import './SearchContainer.css';

const accessToken = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;


export default function SearchContainer({setSelectedTrack}) {

    const [searchInput, setSearchInput] = useState("");
    const [trackNames, setTrackNames] = useState([]);
    const [artistNames, setArtistNames] = useState([]);
    const [trackUris, setTrackUris] = useState([]);
    const [currentSearchItems, setCurrentSearchItems] = useState([]);

    function selectTrack({target}) {
        setSelectedTrack(target.uri);
    };

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
            

            const tracks = data.tracks.items.map(track => track.name);
            const artists = data.tracks.items.map(track => track.artists[0].name);
            const uris = data.tracks.items.map(track => track.uri);


            console.log(data.tracks.items[0].name)
            console.log(data.tracks.items[0].uri)

            setTrackNames(tracks);
            setArtistNames(artists);
            setTrackUris(uris);
            setCurrentSearchItems(data.tracks.items);
            
   
        })
        .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        });

    }




    return (
        <div className="search-container">
            <SearchBar className="search-bar" searchInput={searchInput} setSearchInput={setSearchInput} handleSearchInput={handleSearchInput} handleSubmit={handleSubmit}/>
            <Results className="results" searchInput={searchInput} trackNames={trackNames} artistNames={artistNames} trackUris={trackUris} setSelectedTrack={setSelectedTrack} currentSearchItems={currentSearchItems}/>
            <div>Other Panel</div>
        </div>
    )
}