import React from 'react';
import './ClickableText.css';

const ClickableText: React.FunctionComponent<{ text: string, callback: () => void }> = ({ text, callback }) => {
    return(
        <p className="ClickableText" onClick={ callback }>{ text }</p>
    );
}

export default ClickableText;