import React, { useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { ajax } from 'rxjs/ajax';
import { map, catchError, finalize, take } from 'rxjs/operators';
import { of } from 'rxjs';

import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';

import {
    Inbox as InboxIcon,
    Drafts as DraftsIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        display: 'inline-block',
        width: '100%',
    },
  }),
);

//Horizontal list
const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  };

function ListFiles(props) {
    const classes = useStyles();
    const [data, setData]  = useState(props);
    // const [list, setList] = useState([]);
    
    let subscription = null;
    let dataTemp = { itens: [] };

    const getList = () => {

        // const listDocs$ = ajax({
        //     url: 'http://127.0.0.1:3333/api/v1/ganache/index',
        //     method: 'GET',
        //     crossDomain: true,
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //     }
        // }).pipe(
        //     map(response => {
        //         const objKeys = Object.keys(response.response);

        //         for (let i = 0; i < objKeys.length; i++) {
        //             dataTemp.itens.push(response.response[i]);
        //         }
        //     }),
        //     catchError(error => {
        //       console.log('error: ', error);
        //       return of(error);
        //     }),
        //     finalize(() => {
        //         setData(dataTemp)
        //     })
        // );

        const listDocs$ = ajax({
            url: 'http://127.0.0.1:3333/api/v1/ganache/index',
            method: 'GET',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        }).pipe(
            take(1),
            map(response => {
                const objKeys = Object.keys(response.response);

                for (let i = 0; i < objKeys.length; i++) {
                    dataTemp.itens.push(response.response[i]);
                }
            }),
            catchError(error => {
              console.log('error: ', error);
              return of(error);
            }),
            finalize(() => {
                setData(dataTemp)
            })
        );

        subscription = listDocs$.subscribe(response => {
            console.log('subscription');
            const objKeys = Object.keys(response.response);

            for (let i = 0; i < objKeys.length; i++) {
                dataTemp.itens.push(response.response[i]);
            }
            setData(dataTemp);
        });
    };

    const [t, setT] = useState(getList());

    useEffect(() => {

        return () => {
            if (subscription != null) {
                subscription.unsubscribe()
            }
        }
        
    }, [data]);

    return (

        <div className={classes.root} >

            <List component="nav">
                {Array.apply(null, Array(data.itens[0].length)).map((item, count) => {
                    // console.log(`count: ${count}`);
                    return(
                        <ListItem key={count} button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText style={{ flex: '0.05', marginRight: '20px' }}
                                primary={data.itens[0][0]} secondary={data.itens[0][1]} />
                        </ListItem>
                    );
                })}
            </List>             
        </div>


        
        // <div className={classes.root} >

        //     <List component="nav">
        //         {(data.itens.map((item, count) => {
        //             const size = data.itens[0].length;

        //             console.log(`item: ${item} count: ${count}\n`);
        //             return(
        //                 <ListItem key={count} button>
        //                     <ListItemIcon>
        //                         <InboxIcon />
        //                     </ListItemIcon>
        //                     <ListItemText style={{ flex: '0.05', marginRight: '20px' }} primary={item[0]} secondary={item[1]} />
        //                 </ListItem>
        //             );
        //         }))}
        //     </List>             
        // </div>
    );
}

export default ListFiles;