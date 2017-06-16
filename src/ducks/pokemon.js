import axios from 'axios';

const initialState = {
    error: false,
    loading: false,
    pokemon: {}
};

const SET_POKEMON = 'SET_POKEMON';

//reducer
export default function pokemon( state = initialState, action ) {
    switch( action.type ) {
        case SET_POKEMON + "_FULFILLED": 
            return {
                error: false,
                loading: false,
                search: false,
                pokemon: action.payload
            }
        case SET_POKEMON + "_PENDING": 
            return {
                error: false,
                loading: true,
                search: false,
                pokemon: {}
            }
        case SET_POKEMON + "_REJECTED": 
            return {
                error: true,
                loading: false,
                search: false,
                pokemon: {}
            }
        default: 
            return state;
    }
}


//actions
export function setPokemon() {
    var url = "http://pokeapi.co/api/v2/pokemon/";
    const promise  = axios.get( url ).then( response => response.data );
    return {
        type: SET_POKEMON,
        payload: promise
    }
}