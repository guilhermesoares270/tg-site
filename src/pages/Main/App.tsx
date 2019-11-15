import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NewLogin from '../Login/newLogin';
import state from '../../State/GlobalState';
import Main from '../Main/Main';
import UserRegister from '../User/UserRegister';

class App extends React.Component {

    render() {

        return(
            <BrowserRouter>
                {/* { (state.getState().isLogged)? <Main /> : <NewLogin /> } */}
                <UserRegister />
            </BrowserRouter>
        );
    }
}

export default App;