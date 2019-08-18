import React from 'react';
import './Sidebar.css';
import StyledIcon from '../StyledIcon/StyledIcon';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return(
        <div id="Sidebar">
            <Link className="StyledIcon" to='/login'>
                <StyledIcon name='login'/>
            </Link>

            <Link className="StyledIcon" to='/shoelaces'>
                <StyledIcon name='logout'/>
            </Link>

            <Link className="StyledIcon" to='/shoelaces'>
                <StyledIcon name='plus'/>
            </Link>

            <Link className="StyledIcon" to='/shoelaces'>
                <StyledIcon name='edit'/>
            </Link>
        </div>
    );
}

export default Sidebar;