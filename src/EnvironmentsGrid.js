import React from 'react';
import { environmentsOne, environmentsTwo, environmentsThree } from './data.js';

function EnvironmentsGrid() {
  return (
    <div className="container">
      <EnvironmentRow environments={environmentsOne} />
      <EnvironmentRow environments={environmentsTwo} />
      <EnvironmentRow environments={environmentsThree} />
    </div>
  );
}

function EnvironmentRow(props) {
  const environments = props.environments;

  const environmentRow = environments.map((environment, index) => {
    return (
      <div className="col">
        <Environment
          cardName={environment.title}
          img={environment.img}
          audio={environment.audio}
          key={index}
        />
      </div>
    );
  });

  return (
    <div className="row">
      {environmentRow}
    </div>
  );
}

function Environment(props) {

  const playAudio = () => {
    let audio = new Audio(props.audio);
    audio.play();
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.cardName}</h5>
        <img src={props.img} className="card-img-top environment" onClick={playAudio} alt='environment' />
      </div>
    </div>
  );
}

export default EnvironmentsGrid;