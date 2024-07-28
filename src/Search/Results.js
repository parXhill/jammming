import React from 'react';
import "./Results.css";

export default function Results({trackUris, trackNames, artistNames, setSelectedTrack, currentSearchItems, selectedTrack}) {
    return (

        <div>
        {currentSearchItems.map((track, index) => (
          <div className={`${selectedTrack.uri === track.uri ? "trackbox": "selected-box"}`} key={index}>
            <div><h5>{track.name}</h5></div>
            <h6>{track.artists[0].name}</h6>
            <button onClick={() => setSelectedTrack(track)}>Add</button>
          </div>
        ))}
      </div>

    );
};

