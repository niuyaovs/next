'use client';
import './index.scss';
import Layout from '@/app/layout/index';
import {
  AimOutlined,
  HeartFilled,
  HeartOutlined,
  HomeOutlined,
  PlusOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, Space } from 'antd';
import { usePathname, useSearchParams } from 'next/navigation';
import { fetchInviteDetail } from '@/app/lib/invite';
import { useEffect, useState } from 'react';

export default function Invite() {
  const params = useSearchParams();
  const [detail, setDetail] = useState({});
  const [dutyList, setDutyList] = useState([]);
  const [requireList, setRequireList] = useState([]);
  const [moreList, setMoreList] = useState([]);
  useEffect(() => {
    const id = params.get('inviteId');
    fetchInviteDetail(id).then(async (res) => {
      console.log(res);
      await setDetail(res);
      await setDutyList(res.post_duty.split(';'));
      await setRequireList(res.post_require.split(';'));
      await setMoreList(res.more.split(';'));
    });
  }, []);
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
        <div className="abstract-container">
          <div className="title-text">
            <span style={{ marginRight: '30px' }}>{detail.post_name}</span>
            <span style={{ color: '#f26d49' }}>{detail.prize}</span>
          </div>
          <div className="icon-container">
            <div className="icon-box">
              <AimOutlined className="icon-item" />
              <span className="text">{detail.district}</span>
            </div>
            <div className="icon-box">
              <UsergroupDeleteOutlined className="icon-item" />
              <span className="text">{detail.education}</span>
            </div>
          </div>
          <Button
            style={{ marginRight: '24px' }}
            icon={<HeartFilled />}
            type="primary"
            ghost
            size="large"
          >
            感兴趣
          </Button>
          <Button type="primary" size="large">
            投递简历
          </Button>
        </div>
        <div className="discription-container">
          <div className="title-box">职位描述</div>
          <div>
            <Space direction='vertical'>
              <div>一、岗位名称：</div>
              <div>{detail.post_name}</div>
              <div>二、岗位概述：</div>
              <div>{detail.post_abstract}</div>
              <div>三、岗位职责：</div>
              {dutyList.map((item) => {
                return <div key={item}>{item}</div>;
              })}
              <div>四、任职要求：</div>
              {requireList.map((item) => {
                return <div key={item}>{item}</div>;
              })}
              <div>五、加分项：</div>
              {moreList.map((item) => {
                return <div key={item}>{item}</div>;
              })}
            </Space>
          </div>
        </div>
        <div className="discription-container">
          <div className="title-box">公司介绍</div>
          <Space direction='vertical' className='discription-box'>
            {detail.discription}
            <p>公司官网：</p>
          </Space>
        </div>
        <div className="discription-container">
          <div className="title-box">评论区</div>
        </div>
      </Layout>
    </ConfigProvider>
  );
}
