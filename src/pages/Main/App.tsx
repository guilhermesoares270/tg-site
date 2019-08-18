import React from 'react';
import './App.css';
// import Sidebar from '../../components/Sidebar/Sidebar';
// import Content from '../Content/Content';
import { BrowserRouter } from 'react-router-dom';
import Login from '../Login/Login';
import state from '../../State/GlobalState';
import routes from '../../Router';
import Main from '../Main/Main';

class App extends React.Component {

    render() {

        return(
            <BrowserRouter>
                { (state.getState().isLogged)? <Main /> : <Login /> }
            </BrowserRouter>
        );
        // return (this.state.isLogged)?
        //     <BrowserRouter>
        //         <div id="Main">

        //             <Sidebar />
        //             <Content />

        //         </div>
        //     </BrowserRouter>
        // :
        //     <Login />
    }
}

export default App;