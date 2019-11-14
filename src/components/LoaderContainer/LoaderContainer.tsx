import React, { useState, useEffect, ReactNode } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

/**
 * @param {string} promise promisse
 * @param {boolean} loading state
 */
interface LoaderContainerProps {
    promise: Promise<any>;
    component: ReactNode;
}

const defalutStyle = {
    margin: '10px 0 0 0',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent'
};

function LoaderContainer(props: LoaderContainerProps) {

    const [promise, setPromise] = useState(props.promise);
    const [isPending, setIsPending] = useState(
        (props.promise instanceof Promise)? true : false
    );

    useEffect(() => {
        promise.then(data => {
            setIsPending(false);
        });
    }, [isPending]);

    function render() {
        let comp: any = <h1>aaa</h1>;
        isPending? comp = <div style={defalutStyle}>
                            <CircularProgress />
                        </div> : comp = props.component;
        return comp;
    }

    return(render());
}

export default LoaderContainer;