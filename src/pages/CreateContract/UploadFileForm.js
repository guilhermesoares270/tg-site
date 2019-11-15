import React, { useState, Component } from 'react';
import { DropzoneArea } from 'material-ui-dropzone'
import { Button } from 'antd';
import { ajax } from 'rxjs/ajax';
import { map, catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, createStyles } from '@material-ui/core/styles';

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

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }
      setOpen(false);
  };

  const printFiles = () => {
    const ajax$ = ajax({
      url: url,
      crossDomain: true,
      method: 'POST',
      body: {
        "signature": "aaa",
	      "identity": "bbb"
      },
      })
      .pipe(
        map(response => console.log('files: ', response)),
        catchError(error => {
          console.log('error: ', error);
          handleClick();
          return of(error);
        })
    );
      // .subscribe((result) => {
      //     console.log(result);
      // });

      ajax$.subscribe();
  };

  const handleChange = (files) => {
    setFiles(files);
  }

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

// class DropzoneAreaExample extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       files: []
//     };
//   }

  // handleChange(files) {
  //   this.setState({
  //     files: files
  //   });
  // }

//   printFiles() {

    // ajax({
    //   url: 'http://localhost:8001/issue',
    //   crossDomain: true,
    //   withCredentials: false,
    //   method: 'PUT',
    //   body: {
    //     "signature": "aaa",
	  //     "identity": "bbb"
    //   },
    //   })
    //   .subscribe((result) => {
    //       console.log(result);
    //   })
//   }

//   render(){
//     return (
        // <div style={{margin: '24px 0' }} >
        //     <DropzoneArea
        //       filesLimit={1}
        //       showPreviews={false}
        //       dropzoneText={"Drag and drop an image file here or click"}
        //       onChange={this.handleChange.bind(this)}
        //     />
        //     <div style={{ margin: '13px 0' }} ></div>
        //     <Button onClick={this.printFiles.bind(this)} >
        //         Click
        //     </Button>
        // </div>
      
//     )  
//   }
// } 

export default CustomDropzoneArea;