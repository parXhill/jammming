import './App.css';
import SearchContainer from './Search/SearchContainer';
import SearchBar from './Search/SearchBar';
import Results from './Search/Results';


function App() {
  return (
  <div className="app">
    <header className="header"><h1>Spotify Search</h1></header>
    <SearchContainer className="search-container"/>
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