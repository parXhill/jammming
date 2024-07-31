import './App.css';
import SearchContainer from './Search/SearchContainer';
import PlaylistContainer from './Playlist/PlaylistContainer';
import React, {useState} from 'react';


function App() {

  const [selectedTrack, setSelectedTrack] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const [playlistItems, setPlaylistItems] = useState([]);


  return (
  <div className="app">
    <header className="header"><h1>Spotify Search</h1></header>
    <div className="section">
    <SearchContainer setPlaylistItems={setPlaylistItems} playlistItems={playlistItems} setSearchItems={setSearchItems} searchItems={searchItems} setSelectedTrack={setSelectedTrack} selectedTrack={selectedTrack}/></div>
    <div className="section2">
    <PlaylistContainer setPlaylistItems={setPlaylistItems} playlistItems={playlistItems} setSearchItems={setSearchItems} searchItems={searchItems} setSelectedTrack={setSelectedTrack} selectedTrack={selectedTrack}/></div>
  </div>
  );
}

export default App;
