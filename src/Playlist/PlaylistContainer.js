import React from 'react';
import Playlist from './Playlist';

const accessToken = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
let newPlaylistId;

export default function PlaylistContainer({}) {

    const userUrl = "https://api.spotify.com/v1/users/parkhilla/playlists";

    const newPlaylistData = {
    name: "Jammming Project1",
    description: "Test1",
    public: false
    };

    function createPlaylist() {

        fetch(userUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPlaylistData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data.id)
            newPlaylistId = data.id
            })
        .catch((error) => console.error('Error:', error));
    }

    function addToPlaylist(trackUri) {

        const playlistUrl = `https://api.spotify.com/v1/playlists/${newPlaylistId}/tracks?uris=${encodeURIComponent(trackUri)}`;
        
        fetch(playlistUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch((error) => console.error('Error:', error));
    }
        
    return (

    <Playlist createPlaylist={createPlaylist} addToPlaylist={addToPlaylist}/>);
}
