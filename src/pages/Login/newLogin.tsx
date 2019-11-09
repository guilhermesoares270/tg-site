import React, { useState } from 'react';
import {
    Button,
    CssBaseline,
    TextField,
    Link,
    Paper,
    Box,
    Grid,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import state from '../../State/GlobalState';
import { performLogin } from '../../State/Actions/LoginActions';
import Main from '../Main/App';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="https://material-ui.com/">
        Blockchain
      </Link>{' '}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(/1267580.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
    const classes = useStyles();

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleChange = (name: any) => (event: any) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const page = () => {
        console.log('page');
        switch (state.getState().isLogged) {
            case false:
                return login();
            default:
                return <Main />
        }
    }

    const login = () => (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <form className={classes.form} noValidate>
                <TextField
                    value={values.email}
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handleChange('email')}
                />
                <TextField
                    value={values.password}
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange('password')}
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => {
    
                        const { email, password } = values;
    
                        if (email === 'guilherme@gmail.com' && password === '123') {
                            state.dispatch(performLogin());
                            setValues({ ...values });
                        }
                    }}
                >
                    Sign In
                </Button>
                <Box mt={5}>
                    <Copyright />
                </Box>
                </form>
            </div>
            </Grid>
        </Grid>
      );    

  return (
    page()
  );
}