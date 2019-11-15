import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import UploadForm from '../CreateContract/UploadFileForm';
import ListFiles from '../ListFiles/ListFiles';
import LoaderContainer from '../../components/LoaderContainer/LoaderContainer';
import UserDetails, { aaa } from '../User/UserDetails';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  makeStyles,
  SwipeableDrawer,
  Button,
  Input 
} from '@material-ui/core';

import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
  AccessAlarm as AccessAlarmIcon
} from '@material-ui/icons'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const screens = (postition: number) => {
  switch (postition) {
    case 1:
      return <UploadForm />
    case 2:
      return <LoaderContainer promise={
        new Promise(function(resolve, reject){
          setTimeout(function(){
              resolve("Yeah !");
          }, 3000);
        })}
        component={<ListFiles itens={['a', 'aa', 'aaa']} />}
      />
    default:
      return <h1>Select a valid option!</h1>
  }
}

const titles = (postition: number) => {
    switch (postition) {
      case 1:
        return 'Upload a new file'
      case 2:
        return 'Lista de arquivos'
      default:
        return 'Invalid Option'
  }
};

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function CustomLayout() {

  const classes = useStyles();

  const [ state, setState ] = useState({
    collapsed: true,
    selected: 1
  });

  const [isOpened, setIsOpened] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    setState({
      collapsed: collapsed,
      selected: state.selected
    });
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => setIsOpened(true)}
      onKeyDown={() => setIsOpened(false)}
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
    <Layout style={{ minHeight: '100vh' }}>
        <Sider style={{ background: 'white' }} collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item onClick={() => setState({ collapsed: state.collapsed, selected: 1 }) } key="1">
              <Icon type="file" />
              <span>Novo Arquivos</span>
            </Menu.Item>
            <Menu.Item  onClick={() => setState({ collapsed: state.collapsed, selected: 2 }) } key="2">
              <Icon type="desktop" />
              <span>Lista de Arquivos</span>
            </Menu.Item>
            <Menu.Item  onClick={() => setIsOpened(!isOpened)} key="3">
              <Icon type="user" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header  style={{
              color: 'black',
              background: '#fff',
              padding: '0 10px ',
              textAlign: 'center'
            }} >
              { titles(state.selected) }
          </Header>
            <Content style={{ margin: '0 5px', display: 'flex', justifyContent: 'center', maxHeight: '300px'  }}>
                {console.log('aaa')}

                { screens(state.selected) }

            </Content>
          <Footer style={{ textAlign: 'center' }}>Blockchain</Footer>
        </Layout>

        <SwipeableDrawer
              anchor="right"
              open={isOpened}
              onClose={() => setIsOpened(false)}
              onOpen={() => setIsOpened(true)}
          >
            {sideList()}
        </SwipeableDrawer>

      </Layout>
  );
}

export default CustomLayout;