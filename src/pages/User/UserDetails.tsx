import React, { useState } from 'react';

import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    makeStyles,
    SwipeableDrawer,
    Button
} from '@material-ui/core';

//Icons import
import {
    MoveToInbox as InboxIcon,
    Mail as MailIcon,
    AccessAlarm as AccessAlarmIcon
} from '@material-ui/icons'

import { Menu, Icon } from 'antd';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
});

function UserDetails() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
        // right: true
      });

    type DrawerSide = 'top' | 'left' | 'bottom' | 'right';
    const toggleDrawer = (side: DrawerSide, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
      ) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [side]: open });
      };

    const sideList = (side: DrawerSide) => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );

    return(
        <div>
            {/* <Menu.Item  onClick={() => toggleDrawer('right', true)} key="3">
              <Icon type="user" />
            </Menu.Item> */}

            <SwipeableDrawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
            >
                {sideList('right')}
            </SwipeableDrawer>
        </div>
    );
}

export function aaa(props: any) {
  const classes = useStyles();

  <SwipeableDrawer
      anchor="right"
      open={props.isOpened}
      // onClose={toggleDrawer('right', false)}
      // onOpen={toggleDrawer('right', true)}
      onClose={() => props.setIsOpened(false)}
      onOpen={() => props.setIsOpened(true)}
    >
    <div
      className={classes.list}
      role="presentation"
      onClick={() => props.setIsOpened(true)}
      onKeyDown={() => props.setIsOpened(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  </SwipeableDrawer>
}

export default UserDetails;