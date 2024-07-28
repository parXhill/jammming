import './App.css';
import SearchContainer from './Search/SearchContainer';
import PlaylistContainer from './Playlist/PlaylistContainer';
import React, {useState} from 'react';


function App() {

  const [selectedTrack, setSelectedTrack] = useState();

  return (
  <div className="app">
    <header className="header"><h1>Spotify Search</h1></header>
    <div className="section">
    <SearchContainer setSelectedTrack={setSelectedTrack}/></div>
    <div className="section2">
    <PlaylistContainer selectedTrack={selectedTrack}/></div>
  </div>
  );
}

export default App;


// App
//SearchBar
//SearchResults
//Playlist
//Tracklist
//Track