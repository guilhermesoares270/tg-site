import React from 'react';
import './StyledButton.css';
import { withRouter, RouteComponentProps } from 'react-router-dom';

class StyledButton extends React.Component<RouteComponentProps> {

    // constructor(props: RouteComponentProps) {
    //     super(props);
    // }

    render() {
        return(
            <div className="StyledButton" onClick={ () => this.props.history.push('/main')}>
                <section>
                    <p>aaa</p>
                </section>
            </div>
        );
    }
}

export default withRouter(StyledButton);