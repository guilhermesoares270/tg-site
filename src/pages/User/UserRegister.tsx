import React, { useState, useRef, useEffect, Fragment, SyntheticEvent } from 'react';

import {
    Grid,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Button
} from '@material-ui/core';
import { CodeSharp } from '@material-ui/icons';

function UserRegister() {

    const [name, setName] = useState('aaa');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [cep, setCep] = useState('');

    return(
        <div style={{ margin: '10px'}}>
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="nome"
                    name="nome"
                    label="Name"
                    value={name}
                    fullWidth
                    autoComplete="fname"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="cidade"
                    name="cidade"
                    label="Cidade"
                    value={city}
                    fullWidth
                    autoComplete="billing address-level2"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField id="estado" name="estado" value={state} label="Estado" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="cep"
                        name="cep"
                        label="Cep"
                        value={cep}
                        fullWidth
                        autoComplete="billing postal-code"
                    />
                </Grid>
              <Grid item xs={6} sm={6}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        console.log(
                            name, city
                        );
                    }}
                >
                    Sign In
                </Button>
              </Grid>
            </Grid>
        </Fragment>
        </div>
    );
}

export default UserRegister;