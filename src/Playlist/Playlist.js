import React from 'react';

export default function Playlist({createPlaylist, addToPlaylist, removeFromPlaylist}) {
    
    return (
    <div>
        <h3>Playlist items here</h3>
        <button onClick={createPlaylist}>Create Playlist</button>
        <button onClick={() => addToPlaylist()}>Add song to Playlist</button>
        <button onClick={() => removeFromPlaylist()}>Remove from Playlist</button>
    </div>);
}
