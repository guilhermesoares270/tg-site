import React from 'react';
import './StyledButton.css';

class StyledButton extends React.Component<{ text: string, callback: () => void }> {

    render() {
        return(
            <div className="StyledButton" onClick={ this.props.callback }>
                <section>
                    <p>Login</p>
                </section>
            </div>
        );
    }
}

export default StyledButton;