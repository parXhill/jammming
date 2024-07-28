import './App.css';
import SearchContainer from './Search/SearchContainer';
import PlaylistContainer from './Playlist/PlaylistContainer';

function App() {
  return (
  <div className="app">
    <header className="header"><h1>Spotify Search</h1></header>
    <div className="section">
    <SearchContainer/></div>
    <div className="section2">
    <PlaylistContainer/></div>
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