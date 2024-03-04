'use client';
import React from 'react';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import cookie from 'react-cookies'

const { Header, Content, Sider } = Layout;
const menuList = [
  {
    icon: UserOutlined,
    label: '招聘信息',
  },
  {
    icon: UserOutlined,
    label: '面试管理',
  },
  {
    icon: UserOutlined,
    label: '订阅管理',
  },
  {
    icon: UserOutlined,
    label: '就业数据分析',
  },
];
const items2: MenuProps['items'] = menuList.map(({ icon, label }, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: label,

    // children: new Array(4).fill(null).map((_, j) => {
    //   const subKey = index * 4 + j + 1;
    //   return {
    //     key: subKey,
    //     label: `option${subKey}`,
    //   };
    // }),
  };
});

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // cookie.load('userInfo')
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <UserOutlined />
        </div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
