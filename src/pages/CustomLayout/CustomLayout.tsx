import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import UploadForm from '../CreateContract/UploadFileForm';
import ListFiles from '../ListFiles/ListFiles';
import LoaderContainer from '../../components/LoaderContainer/LoaderContainer';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const screens = (postition: number) => {
  switch (postition) {
    case 1:
      return <UploadForm />
    case 2:
      // return <ListFiles itens={['a', 'aa']} />
      return <LoaderContainer />
    default:
      // return <h1>Select a valid option!</h1>
      return <LoaderContainer />
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
}

function CustomLayout() {

  const [ state, setState ] = useState({
    collapsed: true,
    selected: 1
  });

  const onCollapse = (collapsed: boolean) => {
    setState({
      collapsed: collapsed,
      selected: state.selected
    });
  };

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
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Usuário</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
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
      </Layout>
  );
}

export default CustomLayout;