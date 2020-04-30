import { createStore, combineReducers } from 'redux';
import { isLoggedState } from './loginStore';
import { enterpriseStore } from './enterpriseStore';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({
  isLoggedState,
  enterpriseStore,
});

export default createStore(rootReducers, composeWithDevTools());