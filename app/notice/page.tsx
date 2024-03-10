'use client';
import './index.scss';
import Layout from '@/app/layout/index';
import { CaretDownOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, List } from 'antd';
import { useEffect, useState } from 'react';
import { getCookie } from '../util/cookie';
import Empty from '@/app/components/Empty';

export default function Notice() {
  const [interviewList, setInterviewList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // const cookie = JSON.parse(getCookie('userInfo'));
    // fetchInterviewList(cookie.id).then((res) => {
    //   console.log('res', res);
    //   setInterviewList(res);
    //   setLoading(false);
    // });
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
        <div className="notice-wrapper">
          <div className="notice-title">
            <div className="line"></div>
            <div>
              <span>我的消息</span>
              <CaretDownOutlined />
            </div>
          </div>
          <div className="notice-list">
            <div className="list-title">系统消息</div>
            {interviewList.length !== 0 && (
              <List
                style={{ width: '80%' }}
                dataSource={interviewList}
                loading={loading}
                renderItem={(item, index) => (
                  <List.Item
                    style={{ backgroundColor: '#fff', padding: '10px' }}
                  >
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
            )}
            {interviewList.length === 0 && <Empty />}
          </div>
          <div className="notice-list">
            <div className="list-title">提醒消息</div>
            {interviewList.length !== 0 && (
              <List
                style={{ width: '80%' }}
                dataSource={interviewList}
                loading={loading}
                renderItem={(item, index) => (
                  <List.Item
                    style={{ backgroundColor: '#fff', padding: '10px' }}
                  >
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
            )}
            {interviewList.length === 0 && <Empty />}
          </div>
        </div>
      </Layout>
    </ConfigProvider>
  );
}
