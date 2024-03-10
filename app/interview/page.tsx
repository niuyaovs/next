'use client';
import './index.scss';
import Layout from '@/app/layout/index';
import {
  CaretDownOutlined,
  SearchOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import {
  Button,
  Cascader,
  ConfigProvider,
  Input,
  List,
  Select,
  Space,
} from 'antd';
import { useEffect, useState } from 'react';
import { fetchInterviewList } from '@/app/lib/interview';
import { getCookie } from '../util/cookie';

export default function Invite() {
  const [interviewList, setInterviewList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const cookie = JSON.parse(getCookie('userInfo'));
    fetchInterviewList(cookie.id).then((res) => {
      console.log('res', res);
      setInterviewList(res);
      setLoading(false);
    });
  }, []);
  const handleCancelInterview = (id: any) => {
    // console.log(id)
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: '#00bebd',

          // 派生变量，影响范围小
          // colorBgContainer: '#e3f2f4',
        },
      }}
    >
      <Layout>
        <div className="interview-wrapper">
          <div className="interview-title">
            <div className="line"></div>
            <div>
              <span>我的面试</span>
              <CaretDownOutlined />
            </div>
          </div>
          <div className="interview-list">
            <List
              style={{ width: '80%' }}
              dataSource={interviewList}
              loading={loading}
              renderItem={(item, index) => (
                <List.Item style={{ backgroundColor: '#fff', padding: '10px' }}>
                  <List.Item.Meta
                    title={item.company_name}
                    description={`面试时间：${item.interview_time}`}
                  />
                  <List.Item.Meta
                    title="&nbsp;"
                    description={`面试地点：${item.interview_location}`}
                  />
                  <Button
                    type="link"
                    // onClick={() => handleCancelInterview()}
                  >
                    添加提醒
                  </Button>
                  <Button
                    type="link"
                    danger
                    // onClick={() => handleCancelInterview()}
                  >
                    取消面试
                  </Button>
                </List.Item>
              )}
            />
          </div>
        </div>
      </Layout>
    </ConfigProvider>
  );
}
