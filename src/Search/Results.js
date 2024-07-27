import React from 'react';
import "./Results.css";

export default function Results({searchInput, trackNames, artistNames}) {
    return (

        <div>
        {trackNames.map((trackName, index) => (
          <div key={index}>
            <div><h5>{trackName}</h5></div>
            <h6>{artistNames[index]}</h6>
          </div>
        ))}
      </div>

    );
};