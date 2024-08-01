import React from 'react';
import Playlist from './Playlist';

const accessToken = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
let newPlaylistId;

export default function PlaylistContainer({selectedTrack, setSelectedTrack, playlistItems, setPlaylistItems, searchItems, setSearchItems}) {

    const userUrl = "https://api.spotify.com/v1/users/parkhilla/playlists";


    function createPlaylist(playlistName) {

        const newPlaylistData = {
            name: playlistName,
            description: "Test1",
            public: false
            };

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

    function addToPlaylist() {

        let playlistUris = ""

        for (let i = 0; i < playlistItems.length; i++){
            playlistUris += playlistItems[i].uri;
            if (i !== playlistItems.length - 1){
                playlistUris += ","
            } 
        }

        console.log(playlistUris)

        const playlistUrl = `https://api.spotify.com/v1/playlists/${newPlaylistId}/tracks?uris=${encodeURIComponent(playlistUris)}`;
        
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
    
    function removeFromPlaylist() {
  

    fetch(`https://api.spotify.com/v1/playlists/${newPlaylistId}/tracks`, {
    method: 'DELETE',
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        tracks: [
        {
            uri: selectedTrack.uri
        }
        ]
    })
    })
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Track removed successfully:', data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
        }
    return (

    <Playlist setPlaylistItems={setPlaylistItems} playlistItems={playlistItems} setSearchItems={setSearchItems} searchItems={searchItems} setSelectedTrack={setSelectedTrack} selectedTrack={selectedTrack} createPlaylist={createPlaylist} addToPlaylist={addToPlaylist} removeFromPlaylist={removeFromPlaylist}/>);
}
