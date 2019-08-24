import React from 'react';
import './Sidebar.css';
import StyledIcon from '../StyledIcon/StyledIcon';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return(
        <div id="SidebarContainer">
            <div id="Sidebar">
                <Link className="StyledIcon" to='/login'>
                    <StyledIcon name='caret-up'/>
                </Link>

                <Link className="StyledIcon" to='/shoelaces'>
                    <StyledIcon name='logout'/>
                </Link>

                <Link className="StyledIcon" to='/bubblegum'>
                    <StyledIcon name='plus'/>
                </Link>

                <Link className="StyledIcon" to='/shoelaces'>
                    <StyledIcon name='edit'/>
                </Link>

                <Link className="StyledIcon" to='/shoelaces'>
                    <StyledIcon name='undo'/>
                </Link>
            </div>
        </div>
        
    );
}

export default Sidebar;