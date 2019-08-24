import React from 'react';
import './CreateContract.css';
import StyledInput from '../../components/StyledInput/Styledinput';

class CreateContract extends React.Component {
    
    render() {
        return(
            <div className="CreateContract">
                <form>
                    <StyledInput name="Nome" type="text" />
                </form>
            </div>
        );
    }
}

export default CreateContract;