// this is like the contract agency

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categories from './categories.js';
// import products from './products.js';

const reducers = combineReducers({
  categories,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();
