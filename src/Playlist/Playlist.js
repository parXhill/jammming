import React, {useState} from 'react';
import "./Playlist.css";

export default function Playlist({createPlaylist, addToPlaylist, removeFromPlaylist, selectedTrack, setSelectedTrack, playlistItems, setPlaylistItems, searchItems, setSearchItems}) {
    
    const [nameInput, setNameInput] = useState("");
    const [isPlaylistActive, setIsPlaylistActive] = useState(false);

    return (
    <div><div id="playlistEntryBox" style={isPlaylistActive ? {display: 'none'} : {display: 'block'}}>
         <h2>Create a new playlist</h2>
         <input placeholder="Playlist name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
        <button id="playlistButton" onClick={() => {
            createPlaylist(nameInput);
            setIsPlaylistActive(true);
            }}>Create Playlist</button>
        </div>
        <div id="playlistEntryBox" style={isPlaylistActive ? {display: 'block'} : {display: 'none'}}>
          <h2>{nameInput}</h2>
        <div id="playlistResults" className='resultsBox'>
        {playlistItems.map((track, index) => (
          <div className="trackbox" key={index}>
            <div><h5>{track.name}</h5></div>
            <h6>{track.artists[0].name}</h6>
            <button onClick={() => {
              setSelectedTrack(track)
              setPlaylistItems(prev => prev.filter(item => item !== track))
            }
        }>-</button>
          </div>
        ))}
      </div>

        <button id="playlistButton" onClick={() => {addToPlaylist()
          setNameInput("");
        }}>Add songs to Playlist</button>
    </div></div>);
}
