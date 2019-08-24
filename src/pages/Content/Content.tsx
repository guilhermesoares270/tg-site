import React from 'react';
import './Content.css';
import routes from '../../Router';
import { Route } from 'react-router-dom';

const Content: React.FC = () => {
    return(
        <div id="Content" >
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            ))}
        </div>
    );
}

export default Content;