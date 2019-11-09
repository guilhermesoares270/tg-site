import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import UploadForm from '../CreateContract/UploadFileForm';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const screens = (postition: number) => {
  switch (postition) {
    case 1:
      return <UploadForm />
    default:
      // return <UploadForm />
      return <h1>aaa</h1>
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
          {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"> */}
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Enviados</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Novos Arquivos</span>
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
            {/* <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout>
          <Header title={'aaa'} style={{ background: '#fff', padding: 0 }} />
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