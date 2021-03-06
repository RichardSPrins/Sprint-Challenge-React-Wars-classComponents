import React, { Component } from 'react';
import './App.css';
import {charList} from './components/StarWarsCharacters';
import Character from './components/Character'

class App extends Component {
  constructor() {
    super();
    this.state = {
      StarWarsChars: [],
      name: '',
      gender: '',
      eye_color: '',
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ StarWarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="character-list">
          {this.state.StarWarsChars.map((char)=> (
            <Character charProp={char}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
