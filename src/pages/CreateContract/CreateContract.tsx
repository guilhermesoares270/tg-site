import React from 'react';
import './CreateContract.css';
import { FormControl } from '@material-ui/core';
import FormTest from './FormTest';

class CreateContract extends React.Component {

    state = {
        files: []
    }

    public handleChange(files: any){
        this.setState({
            files: files
        });
    }
    
    render() {
        return(
            <FormControl>
                <FormTest />
            </FormControl>
        );
    }
}

export default CreateContract;