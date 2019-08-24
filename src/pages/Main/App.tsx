import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from '../Login/Login';
import state from '../../State/GlobalState';
import Main from '../Main/Main';

class App extends React.Component {

    render() {

        return(
            <BrowserRouter>
                { (state.getState().isLogged)? <Main /> : <Login /> }
            </BrowserRouter>
        );
    }
}

export default App;