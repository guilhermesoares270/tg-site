import React, { useState, useRef, useEffect, Fragment } from 'react';

import {
    Grid,
    Typography,
    TextField,
    Button,
    Link
} from '@material-ui/core';

import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of, pipe } from 'rxjs';

import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5),
    },
  }),
);

function UserRegister() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [snack, setSnack] = useState('');

    const handleClick = (text) => {
        setSnack(text);
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
    const email = useRef('');
    const password = useRef('');

    let userSubscription = null;

    const createNewUser = () => {

        const a$ = ajax({

            url: 'http://127.0.0.1:3333/api/v1/users',
            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            
            body: {
                "username": name.current.value,
                "email": email.current.value,
                "password": password.current.value
            }
        }).pipe(
            map(response => {
                console.log('user: ', response);
                handleClick('Usuário Criado com sucesso');
            }),
            catchError(error => {
              console.log('error: ', error);
              handleClick('Erro ao criar usuário');
              return of(error);
            }))

        userSubscription = a$.subscribe();

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
                        id="email"
                        name="email"
                        label="Email"
                        inputRef={email}
                        fullWidth
                        autoComplete="femail"
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

                    
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            inputRef={password}
                            fullWidth
                            autoComplete="billing address-level2"
                        />
                    </Grid>

                <Grid item xs={6} sm={6}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={createNewUser}
                    >
                        Cadastrar
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
                message={<span id="message-id">{snack}</span>}
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