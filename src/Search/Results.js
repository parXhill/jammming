import React from 'react';
import "./Results.css";

export default function Results({setSelectedTrack, selectedTrack, playlistItems, setPlaylistItems, searchItems, setSearchItems}) {
    return (

        <div>
        {searchItems.map((track, index) => (
          <div className={`${selectedTrack.uri === track.uri ? "trackbox": "selected-box"}`} key={index}>
            <div><h5>{track.name}</h5></div>
            <h6>{track.artists[0].name}</h6>
            <button onClick={() => {
              setSelectedTrack(track)
              setPlaylistItems(prev => [track ,...prev])
              setSearchItems(prev => prev.filter(item => item !== track))
             }
            }>Add</button>
          </div>
        ))}
      </div>

    );
};

