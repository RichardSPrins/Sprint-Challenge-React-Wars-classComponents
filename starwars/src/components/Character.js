import React from 'react';
import './StarWars.css';

class Character extends React.Component {
  render (){
    return (
      <div className="character-card">
      <h2>{this.props.charProp.name}</h2>
      <p>Gender: {this.props.charProp.gender}</p>
      <p>Eye Color: {this.props.charProp.eye_color}</p>
    </div>
    )
  }
}

export default Character;