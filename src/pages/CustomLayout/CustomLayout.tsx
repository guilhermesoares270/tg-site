import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import UploadForm from '../CreateContract/UploadFileForm';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const screens = (postition: number) => {
  switch (postition) {
    case 1:
      return <UploadForm />
    case 2:
      return <h1>Lista de arquivos</h1>
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
}


class CustomLayout extends React.Component {

    state = {
        collapsed: false,
        selected: 1
      };

    onCollapse = (collapsed: any) => {
        console.log(collapsed);
        this.setState({ collapsed });
      };

    render() {
        return (
          
            <Layout style={{ minHeight: '100vh' }}>
        <Sider style={{ background: 'white' }} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item onClick={() => this.setState({ selected: 1 }) } key="1">
              <Icon type="file" />
              <span>Novo Arquivos</span>
            </Menu.Item>
            <Menu.Item  onClick={() => this.setState({ selected: 2 }) } key="2">
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
              textAlign: 'center',
              // justifyContent: 'space-around'
            }} >
            {/* <h1>Page name</h1> */}
              { titles(this.state.selected) }
              <h2 style={{ color: 'red' }}>aaa</h2>

            
          </Header>
            <Content style={{ margin: '0 5px', display: 'flex', justifyContent: 'center', maxHeight: '300px'  }}>
                {console.log('aaa')}

                { screens(this.state.selected) }

            </Content>
          <Footer style={{ textAlign: 'center' }}>Blockchain</Footer>
        </Layout>
      </Layout>
        );
    }
}

export default CustomLayout;