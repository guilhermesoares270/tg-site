import React from 'react';
import './Main.css';
import { Icon } from 'antd';

class Main extends React.Component {

    render() {
        return(
            <div className="Main">
                <Sidebar />
                {/* <h1>Teste</h1> */}
            </div>
        );
    }
}

const Sidebar: React.FunctionComponent = () => {
    return(
        <div className="Sidebar">
            <StyledIcon name="pause"/>
            <p>T</p>
            <p>A</p>
        </div>
    );
}

const StyledIcon: React.FunctionComponent<{name: string}> = ({ name }) => {
    return(
        <div className="StyledIcon">
            <Icon type={name} spin={true} />
        </div>
    );
}

export default Main;