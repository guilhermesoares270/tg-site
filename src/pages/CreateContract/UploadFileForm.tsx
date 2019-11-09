import React, { Component } from 'react';
import { DropzoneArea } from 'material-ui-dropzone'
import { Button } from 'antd';
import { ajax } from 'rxjs/ajax';
import { XMLHttpRequest } from 'xmlhttprequest-ts';

const url = `http://127.0.0.1:3333/api/v1/ganache/`;

class DropzoneAreaExample extends Component {

  constructor(props: any) {
    super(props);
    this.state = {
      files: []
    };
  }

  handleChange(files: any) {
    this.setState({
      files: files
    });
  }

  printFiles() {
    console.log(this.state);

    // const users = ajax.getJSON(url);

    // const subscribe = users.subscribe(
    //   res => console.log(res),
    //   err => console.error(err)
    // );

    ajax({
      url: 'http://localhost:8001/issue',
      crossDomain: true,
      withCredentials: false,
      method: 'PUT',
      body: {
        "signature": "aaa",
	      "identity": "bbb"
      },
      })
      .subscribe((result) => {
          console.log(result);
      })

    //   createXHR: function () {
    //     return new XMLHttpRequest();
    // },

      

  }

  render(){
    return (
        <div style={{ margin: '24px 0' }} >
            <DropzoneArea 
              filesLimit={1}
              showPreviews={false}
              dropzoneText={"Drag and drop an image file here or click"}
              onChange={this.handleChange.bind(this)}
            />
            <div style={{ margin: '13px 0' }} ></div>
            <Button onClick={this.printFiles.bind(this)} >
                Click
            </Button>
        </div>
      
    )  
  }
} 

export default DropzoneAreaExample;