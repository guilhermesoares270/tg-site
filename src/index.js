// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Main/App';
import * as serviceWorker from './serviceWorker';
import store from './State/GlobalState';
// import { performLogin } from '../../State/Actions/LoginActions';
import { performLogin } from './State/Actions/LoginActions';

// const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.subscribe(() => console.log(store.getState()));
console.log(`Initial Redux: ${JSON.stringify(store.getState())}`);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
<App />), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();