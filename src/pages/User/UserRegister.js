import React, { useRef, useEffect, Fragment } from 'react';
import axios from 'axios';

import {
    Grid,
    Typography,
    TextField,
    Button
} from '@material-ui/core';

import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of, pipe } from 'rxjs';

import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5),
    },
  }),
);

function UserRegister() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const name = useRef('');
    const city = useRef('');
    const state = useRef('');
    const cep = useRef('');

    const newUser$ = ajax({
        url: 'http://127.0.0.1:3333/api/v1/users',
        method: 'POST',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: {
            "username": "Pedrão5",
            "email": "pedrao5.pedrao5@gmail.com",
            "password": "pedrao123"
        }
    }).pipe(
        map(response => console.log('user: ', response)),
        catchError(error => {
          console.log('error: ', error);
          handleClick();
          return of(error);
        })
    );

    let userSubscription = null;

    const createNewUser = () => {

        const url = 'http://127.0.0.1:3333/api/v1/users';
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
        };


        // axios.post(url, {
        //     username: "Pedrão",
        //     email: "pedrao.pedrao@gmail.com",
        //     password: "pedrao123"
        // },
        // config);

        userSubscription = newUser$.subscribe();

    };

    useEffect(() => {
        return () => {

            if (userSubscription != null) {
                userSubscription.unsubscribe();
                console.log('unsubscribe');
            }
        };
    });

    const userRegister = () => (
        <div style={{ margin: '10px'}}>
            <Fragment>
                <div onClick={() => {history.push('/')}}>
                    <h2>Voltar</h2>
                </div>
                <Typography variant="h6" gutterBottom>
                    Cadastro de Usuários
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        inputRef={name}
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
                        inputRef={city}
                        fullWidth
                        autoComplete="billing address-level2"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField id="estado" name="estado" inputRef={state} label="Estado" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="cep"
                            name="cep"
                            label="Cep"
                            inputRef={cep}
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
                        // onClick={() => {
                        //     console.log(
                        //         name.current.value,
                        //         city.current.value,
                        //         state.current.value,
                        //         cep.current.value
                        //     );
                        // }}
                        onClick={createNewUser}
                    >
                        Sign In
                    </Button>
                </Grid>
                </Grid>
            </Fragment>

            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                ContentProps={{
                'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Erro ao criar usuário</span>}
                action={[
                <IconButton
                    key="close"
                    aria-label="close"
                    color="inherit"
                    className={classes.close}
                    onClick={handleClose}
                >
                    <CloseIcon />
                </IconButton>,
                ]}
            />
        </div>
    );
 
    return(
        userRegister()
    );
}

export default UserRegister;