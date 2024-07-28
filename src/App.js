import './App.css';
import SearchContainer from './Search/SearchContainer';
import PlaylistContainer from './Playlist/PlaylistContainer';
import React, {useState} from 'react';


function App() {

  const [selectedTrack, setSelectedTrack] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState([]);

  if (!currentPlaylist.includes(selectedTrack.uri) && selectedTrack != false) {setCurrentPlaylist(prev => [selectedTrack.uri, ...prev])}
  console.log("currentPlaylist", currentPlaylist);


  return (
  <div className="app">
    <header className="header"><h1>Spotify Search</h1></header>
    <div className="section">
    <SearchContainer setSelectedTrack={setSelectedTrack} selectedTrack={selectedTrack}/></div>
    <div className="section2">
    <PlaylistContainer selectedTrack={selectedTrack}/></div>
  </div>
  );
}

export default App;
