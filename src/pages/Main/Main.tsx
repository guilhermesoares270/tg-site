import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../Content/Content';

const Main: React.FC<any> = () => {
    return(
        // <div id="Main">

        //     <Sidebar />
        //     <Content />

        // </div>
        <div id="Main">
            {/* <p>aabbcc</p> */}
            <Sidebar />
            {/* <Content /> */}
        </div>
    );
}

export default Main;