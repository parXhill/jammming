import React from 'react';

export default function Playlist({createPlaylist}) {
    
    return (
    <div>
        <h3>Playlist items here</h3>
        <button onClick={createPlaylist}>Create Playlist</button>
    </div>);
}
