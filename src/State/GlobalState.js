import { createStore } from 'redux';
import authenticate from './Reducers/LoginReducer';

const store = createStore(authenticate);
console.log('store created');
// export default createStore(authenticate);
export default store;