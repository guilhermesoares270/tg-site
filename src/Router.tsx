import React from 'react';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function BasicRouter() {
    return(
        <Router>
            {/* <div>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
                <ul>

                    <li>
                        <Link to="/main">Main</Link>
                    </li>
                </ul>
            </div> */}

            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/main" component={Main} />

        </Router>
    );
}

export default BasicRouter;