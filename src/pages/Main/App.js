import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, useLocation } from 'react-router-dom';
import NewLogin from '../Login/newLogin';
import state from '../../State/GlobalState';
import Main from '../Main/Main';
import UserRegister from '../User/UserRegister';

// function App() {


//     return(
//         <BrowserRouter>

//             <PrivateRoute path="/">
//                 <Main />
//             </PrivateRoute>
//                 <Route path="/login">
//                     <NewLogin />
//                 </Route>
//         </BrowserRouter>
//     );
// }


const PrivateRoute = ({ children, rest }) => {

    const isAuthenticated = state.getState().isLogged;
    console.log('aaa ' + isAuthenticated);

    return(
        <Route>
            {isAuthenticated? (children) : (
                <Redirect
                to={{
                  pathname: "/login"
                }}
              />
            )}
        </Route>
    );
};

class App extends React.Component {

    render() {
        console.log('App is here');
        return(
            <BrowserRouter>
                { (state.getState().isLogged)? <Main /> : <NewLogin /> }
                {/* <UserRegister /> */}
                {/* <Route exact path="/">
                    <NewLogin />
                </Route>
                <Route path="/login">
                    <NewLogin />
                </Route> */}
            </BrowserRouter>
        );
    }
}

export default App;