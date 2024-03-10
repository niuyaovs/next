'use client';
import React from 'react';
import Layout from '@/app/layout/index';
import { Button, ConfigProvider } from 'antd';
// import { getCookie } from './util/cookie';

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: '#00bebd',

          // 派生变量，影响范围小
          colorBgContainer: '#fff',
        },
      }}
    >
      <Layout>
        <div>heello</div>
        <Button type="primary">Primary</Button>
      </Layout>
    </ConfigProvider>
  );
  // return (
  //   <Layout>
  //     <div>heello</div>
  //   </Layout>
  // );
};

export default App;
