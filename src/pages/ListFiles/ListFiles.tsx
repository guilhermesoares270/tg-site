import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme: Theme) =>
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

function ListFiles(props: any) {
    const classes = useStyles();
    const [ data, setData]  = useState(props);

    return (
        
        <div className={classes.root} >

            <List component="nav">
                {data.itens.map((item: any) => (
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText style={{ flex: '0.05', marginRight: '20px' }} primary="Identity" />
                        <ListItemText primary="Signature"/>
                    </ListItem>
                ))}
            </List>             
        </div>
    );
}

export default ListFiles;