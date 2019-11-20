import { combineReducers } from 'redux';

export interface IStoreState {}

const testReducer = () => null; // TODO: remove this

export default combineReducers<IStoreState>({ testReducer });
