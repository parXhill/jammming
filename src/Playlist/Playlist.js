import React from 'react';

export default function Playlist({createPlaylist, addToPlaylist}) {
    
    return (
    <div>
        <h3>Playlist items here</h3>
        <button onClick={createPlaylist}>Create Playlist</button>
        <button onClick={() => addToPlaylist("spotify:track:16mWm9eOeEeUQku9OLp29t")}>Add song to Playlist</button>

    </div>);
}
