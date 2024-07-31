import React, {useState} from 'react';

export default function Playlist({createPlaylist, addToPlaylist, removeFromPlaylist, selectedTrack, setSelectedTrack, playlistItems, setPlaylistItems, searchItems, setSearchItems}) {
    
    const [nameInput, setNameInput] = useState("");

    return (
    <div>
        
        <div>
        {playlistItems.map((track, index) => (
          <div className={`${selectedTrack.uri === track.uri ? "trackbox": "selected-box"}`} key={index}>
            <div><h5>{track.name}</h5></div>
            <h6>{track.artists[0].name}</h6>
            <button onClick={() => {
              setSelectedTrack(track)
              setPlaylistItems(prev => prev.filter(item => item !== track))
            }
        }>Remove</button>
          </div>
        ))}
      </div>

        <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} />

        <button onClick={() => {
            createPlaylist(nameInput)
            setNameInput("")
            }}>Create Playlist</button>

        <button onClick={() => addToPlaylist()}>Add song to Playlist</button>
        <button onClick={() => removeFromPlaylist()}>Remove from Playlist</button>
    </div>);
}
