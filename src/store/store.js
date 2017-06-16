import promiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';
import pokemon from './../ducks/pokemon';

export default createStore( pokemon, undefined, applyMiddleware( promiseMiddleware() ) );