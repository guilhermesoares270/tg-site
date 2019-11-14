import React, { useState, Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

/**
 * @param {string} promise promessag
 * @param {boolean} loading state
 */
interface LoaderContainerProps {
    promise: Promise<any>;
    loading: true;
    component: Component
}

/**
 * Receives a promise and when it ends
 * 
 * @param props 
 */
function LoaderContainer(props: any) {



    return(
        <div style={{
            margin: '20px 0 0 0',
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            background: 'grey'
        }} >
            <CircularProgress />
        </div>
    );
}

export default LoaderContainer;