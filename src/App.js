import React, { Component } from 'react';
import PokemonList from './components/PokemonList/PokemonList.js';
import PokeSearch from './components/PokeSearch/PokeSearch.js';
import PokemonData from './components/PokemonData/PokemonData.js';

import { connect } from 'react-redux';
import { setPokemon } from './ducks/pokemon';


import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <input type="text"/>
        <button onClick={ () => this.props.setPokemon }>Search for pokemon</button>
        <p>{ this.props.pokemon }</p>
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return state;
}

export default connect( mapStateToProps, { setPokemon } )( App );
