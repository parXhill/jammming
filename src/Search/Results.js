import React from 'react';

export default function Results({searchInput, trackNames, artistNames}) {
    return (

        <div>
            <div><h3>{trackNames[0]}</h3></div>
            <p>{artistNames[0]}</p>
            <div><h3>{trackNames[1]}</h3></div>
            <p>{artistNames[1]}</p>
            <div><h3>{trackNames[2]}</h3></div>
            <p>{artistNames[2]}</p>
            <div><h3>{trackNames[3]}</h3></div>
            <p>{artistNames[3]}</p>
            <div><h3>{trackNames[4]}</h3></div>
            <p>{artistNames[4]}</p>
            <div><h3>{trackNames[5]}</h3></div>
            <p>{artistNames[5]}</p>
            <div><h3>{trackNames[6]}</h3></div>
            <p>{artistNames[6]}</p>
            <div><h3>{trackNames[7]}</h3></div>
            <p>{artistNames[7]}</p>
            <div><h3>{trackNames[8]}</h3></div>
            <p>{artistNames[8]}</p>
            <div><h3>{trackNames[9]}</h3></div>
            <p>{artistNames[9]}</p>
            
        </div>

    );
};