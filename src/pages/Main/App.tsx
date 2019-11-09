import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from '../Login/Login';
import NewLogin from '../Login/newLogin';
import state from '../../State/GlobalState';
import Main from '../Main/Main';
import CustomLayout from '../CustomLayout/CustomLayout';

class App extends React.Component {

    render() {

        return(
            <BrowserRouter>
                {/* { (state.getState().isLogged)? <Main /> : <Login /> } */}
                {/* { (state.getState().isLogged)? <Main /> : <CustomLayout /> } */}
                { (state.getState().isLogged)? <Main /> : <NewLogin /> }
            </BrowserRouter>
        );
    }
}

export default App;