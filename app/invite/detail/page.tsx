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
import { Button, ConfigProvider } from 'antd';

export default function Invite() {
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
            <span style={{ marginRight: '30px' }}>{'前端开发工程师'}</span>
            <span style={{ color: '#f26d49' }}>{'19k'}</span>
          </div>
          <div className="icon-container">
            <div className="icon-box">
              <AimOutlined className="icon-item" />
              <span className="text">{'北京'}</span>
            </div>
            <div className="icon-box">
              <UsergroupDeleteOutlined className="icon-item" />
              <span className="text">{'本科'}</span>
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
            <div>{'一、岗位名称: 安卓开发工程师（统招本科，学信网可查）'}</div>
            <div>二、岗位概述：</div>
            <div>
              作为一名安卓开发工程师，您将负责开发和维护安卓手机应用客户端程序，确保其高效、稳定地运行。您需要与团队合作，进行项目管理和系统设计，同时与合作伙伴沟通并进行定制化移植。
            </div>
            <div>三、岗位职责：</div>
            <div>
              基于Android平台，负责Android手机应用客户端程序的开发和维护；
            </div>
            <div>协助主管进行项目管理和系统设计；</div>
            <div>负责与合作伙伴沟通，并进行定制化移植（针对Android平台）；</div>
            <div>对Android应用进行性能优化和问题调试。 </div>
            <div>四、任职要求：</div>
            <div>本科及以上学历，计算机相关专业优先；</div>
            <div>
              2年以上Android开发经验，深入理解Java语言，扎实的编码基础；
            </div>
            <div>熟练使用Git、Android</div>
            <div>Studio及性能调优工具，能够发现和优化App性能问题；</div>
            <div>精通Java多线程开发、Android</div>
            <div>UI开发、动画开发，有良好的代码习惯和面向对象编程思想；</div>
            <div>积极主动，有良好的团队合作精神和强烈的责任心。 </div>
            <div>五、加分项：</div>
            <div>有丰富的Android应用性能优化经验； </div>
            <div>熟悉Android系统的底层机制；</div>
            <div>有良好的英语沟通能力。</div>
          </div>
        </div>
        <div className="discription-container">
          <div className="title-box">公司介绍</div>
        </div>
        <div className="discription-container">
          <div className="title-box">评论区</div>
        </div>
      </Layout>
    </ConfigProvider>
  );
}
