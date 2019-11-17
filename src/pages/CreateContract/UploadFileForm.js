import React, { useState, useEffect, Component } from 'react';
import { DropzoneArea } from 'material-ui-dropzone'
import { Button } from 'antd';
import { ajax } from 'rxjs/ajax';
import { map, catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import md5 from 'md5';

const useStyles = makeStyles((theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5),
    },
  }),
);

function CustomDropzoneArea(props) {
  const classes = useStyles();
  const [files, setFiles] = useState([]);
  const [open, setOpen] = React.useState(false);
  const url = 'http://127.0.0.1:3333/api/v1/ganache/';
  let userSubscription = null;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }
      setOpen(false);
  };

  const printFiles = async () => {

    let signature = '';


    const file = files[0];
    var reader = new FileReader();
    reader.onload = async function(event) {

      const md5Value = await md5(event.target.result);
      const md5Sig = await md5(`${event.target.result}random`);

      console.log(md5Value);

      signature = md5Value;

      console.log(`signature: ${signature}`);

      const ajax$ = ajax({
        url: url,
        method: 'POST',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: {
          "signature": signature,
          "identity": 'abc'
        }
      }).pipe(
        map(response => console.log('files: ', response)),
        catchError(error => {
          console.log('error: ', error);
          handleClick();
          return of(error);
        })
      );
        
  
      userSubscription = ajax$.subscribe();


    };

    await reader.readAsText(file);

    return;

    // const ajax$ = ajax({
    //   url: url,
    //   crossDomain: true,
    //   method: 'POST',
    //   body: {
    //     "signature": "aaa",
	  //     "identity": "bbb"
    //   },
    //   })
    //   .pipe(
    //     map(response => console.log('files: ', response)),
    //     catchError(error => {
    //       console.log('error: ', error);
    //       handleClick();
    //       return of(error);
    //     })
    // );

    // userSubscription = ajax$.subscribe();
  };

  const handleChange = (files) => {
    setFiles(files);
  }

  useEffect(() => {

    return () => {
      if (userSubscription != null) {
        userSubscription.unsubscribe();
      }
    }

  });

  return(
    <div style={{margin: '24px 0' }} >
      <DropzoneArea
        filesLimit={1}
        showPreviews={false}
        dropzoneText={"Drag and drop an image file here or click"}
        onChange={handleChange}
      />
      <div style={{ margin: '13px 0' }} ></div>
      <Button onClick={() => {
        console.log('clickkkkkk');
        printFiles();
      }} >
          Click
      </Button>

      <Snackbar
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        ContentProps={{
        'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Erro ao enviar o arquivo</span>}
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
}

export default CustomDropzoneArea;