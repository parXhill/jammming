import React from 'react';
import "./Results.css";

export default function Results({setSelectedTrack, selectedTrack, playlistItems, setPlaylistItems, searchItems, setSearchItems}) {
    return (

        <div className='resultsBox'>
        {searchItems.map((track, index) => (
          <div id="boxes" className="trackbox" key={index}>
            <h5>{track.name}</h5>
            <h6>{track.artists[0].name}</h6>
            <button onClick={() => {
              setSelectedTrack(track)
              setPlaylistItems(prev => [track ,...prev])
              setSearchItems(prev => prev.filter(item => item !== track))
             }
            }>+</button>
          </div>
        ))}
      </div>

    );
};

