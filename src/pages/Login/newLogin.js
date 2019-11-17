import React, { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  CssBaseline,
  TextField,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  SwipeableDrawer
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import state from '../../State/GlobalState';
import { performLogin } from '../../State/Actions/LoginActions';
import Main from '../Main/App';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import UserRegister from '../User/UserRegister';

import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
  AccessAlarm as AccessAlarmIcon
} from '@material-ui/icons'

import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of, pipe } from 'rxjs';

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
  warning: {
    background: 'red'
  },
  list: {
    width: 600,
  },
  fullList: {
    width: 'auto',
  },
}));

// interface State extends SnackbarOrigin {
//   open: boolean;
// }

export default function SignInSide() {

    const classes = useStyles();
    const [location, setLocation] = useState('login');
    const [isOpened, setIsOpened] = useState(false);
    let userSubscription = null;

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [internalState, setInternalState] = React.useState({
      open: false,
      vertical: 'top',
      horizontal: 'center',
    });
    const { vertical, horizontal, open } = internalState;
    const { email, password } = values;

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };
    
    const handleClose = () => {
      setInternalState({ ...internalState, open: false });
    };

    const verifyLogin = () => {
      const url = 'http://127.0.0.1:3333/api/v1/sessions';

      const a$ = ajax({
        url: url,
        method: 'POST',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: {
            "email": email,
            "password": password
        }
      }).pipe(
          map(response => {
              console.log('user: ', response);

              if (response.status == 200) {
                state.dispatch(performLogin());
                setLocation('main');
              } else {
                setInternalState({ open: true, vertical: 'top', horizontal: 'center' });
              }
             
          }),
          catchError(error => {
            console.log('error: ', error);
            setInternalState({ open: true, vertical: 'top', horizontal: 'center' });
            return of(error);
      }))

      userSubscription = a$.subscribe();
    }

    useEffect(() => {

      return () => {

        if (userSubscription != null) {
          userSubscription.unsubscribe();
        }
        
      }
    });

    const page = (location, isLogged) => {
      if (location == 'main' && isLogged) {
        return <Main />;
      } else if (location == 'user') {
        return <UserRegister />;
      } else {
        return login();
      }
    };

    const Copyright = () => {
      return (
        <Typography variant="body2" color="textSecondary" align="center">
          <Link color="inherit" >
            Blockchain
          </Link>{' '}
          {/* <Link onClick={() => { 
            setLocation('user');
          }} variant="body2">
            {"Não tem um conta?"}
          </Link> */}
          <br />

          <Link onClick={() => setIsOpened(true)} >
            Não tem um conta?
          </Link>
        </Typography>
      );
    }

    const login = () => {
      console.log('rendered Login')
        
      return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Cadastrar
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
                    // onClick={() => {
                    //   if (email === 'guilherme@gmail.com' && password === '123') {
                        // state.dispatch(performLogin());
                        //   setLocation('main');
                    //   } else {
                    //     setInternalState({ open: true, vertical: 'top', horizontal: 'center' });
                    //   }
                    // }}
                    onClick={() => {
                      if (userSubscription != null) {
                        userSubscription.unsubscribe();
                      }
                      verifyLogin();
                    }}
                >
                    Entrar
                </Button>
                <Box mt={5}>
                    <Copyright />
                </Box>
                </form>
                <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  key={`${vertical},${horizontal}`}
                  open={open}
                  onClose={handleClose}
                  ContentProps={{
                    classes: {
                      root: classes.warning
                    },
                    'aria-describedby': 'message-id',
                  }}
                  message={<span id="message-id">Email ou senha incorretos</span>}
                />
            </div>
            </Grid>


          
            <SwipeableDrawer
              anchor="right"
              open={isOpened}
              onClose={() => setIsOpened(false)}
              onOpen={() => setIsOpened(true)}
              >
                <UserRegister />
            </SwipeableDrawer>


        </Grid>
        );
    };    

  return (
    page(location, state.getState().isLogged)
  );
}