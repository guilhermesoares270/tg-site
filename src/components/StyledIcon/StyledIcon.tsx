import React from 'react';
import './StyledIcon.css';
import { Icon } from 'antd';

const StyledIcon: React.FunctionComponent<{name: string }> = ({ name }) => {
    return(
        <div id="login" className="StyledIcon" >
            <Icon type={name} title="true"/>
        </div>
    );
}

export default StyledIcon;