import React from 'react';
import { tracks } from './data.js';

function Playlist() {
  const trackComponents = tracks.map((track, index) => (
    <MusicPack title={track.title} audio={track.audio} />
  ));

  return (
    <div className="card bg-dark p-3">
      {trackComponents}
    </div>
  );
}

function MusicPack(props) {

  const playMusic = () => {
    let song1 = new Audio(props.audio[0]);
    let song2 = new Audio(props.audio[1]);
    song1.play();

    song1.addEventListener('ended', () => {
      song2.play();
    });
  }

  return (
    <div className="card m-2 track" onClick={playMusic}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
      </div>
    </div>
  );
}

export default Playlist;