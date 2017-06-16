import React, { Component } from 'react';
import PokemonList from './components/PokemonList/PokemonList.js';
import PokeSearch from './components/PokeSearch/PokeSearch.js';
import PokemonData from './components/PokemonData/PokemonData.js';

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <input type="text"/><button>Search for pokemon</button>
      </div>
    );
  }
}

export default App;
