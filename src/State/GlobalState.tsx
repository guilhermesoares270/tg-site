import { createStore } from 'redux';
import authenticate from './Reducers/LoginReducer';

// const store = createStore(authenticate);
export default createStore(authenticate);