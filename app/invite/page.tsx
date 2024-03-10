'use client';
import './index.scss';
import Layout from '@/app/layout/index';
import { SearchOutlined, SettingOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  ConfigProvider,
  Input,
  List,
  Select,
  Space,
} from 'antd';
import { CITYLIST } from '@/app/config/city';
import { useEffect, useState } from 'react';
import { fetchInviteList } from '@/app/lib/invite';
import { useRouter } from 'next/navigation';

const { Option } = Select;

interface City {
  city_geocode: string;
  city: string;
}

export default function Invite() {
  const [pCode, setPCode] = useState('');
  const [cityList, setCityList] = useState([] as Array<City>);
  const [inviteList, setInviteList] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    fetchInviteList().then((res) => {
      setInviteList(res);
      setLoading(false);
    });
  }, []);
  // 城市筛选器
  useEffect(() => {
    const cityList: Array<City> =
      (CITYLIST.find((item) => item.province_geocode == pCode)
        ?.children as Array<City>) || [];
    setCityList(cityList);
  }, [pCode]);
  const selectBefore = (
    <Space>
      <Select
        defaultValue="全国"
        style={{ width: '120px' }}
        onChange={(e) => setPCode(e)}
      >
        {CITYLIST.map((item) => {
          return <Option key={item.province_geocode}>{item.province}</Option>;
        })}
      </Select>
      {cityList.length !== 0 && (
        <Select style={{ width: '120px' }}>
          {cityList.map((item) => {
            return <Option key={item.city_geocode}>{item.city}</Option>;
          })}
        </Select>
      )}
    </Space>
  );
  const handleGoDetail = (id) => {
    // console.log(id)
    // router.push({path: '/invite/detail', query: {inviteId: id}})
    router.push(`/invite/detail?inviteId=${id}`);
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
        <div className="invite-wrapper">
          <Space.Compact style={{ width: '80%', marginTop: '30px' }}>
            <Input
              style={{ width: '80%', marginBottom: '20px' }}
              addonBefore={selectBefore}
              size="large"
            />
            <Button size="large" type="primary">
              搜索
            </Button>
          </Space.Compact>
          {/* <Input
            addonAfter={<Button type="primary">搜索</Button>}
            defaultValue="mysite"
            
          /> */}
          <List
            style={{ width: '90%' }}
            pagination={{ position: 'bottom', align: 'center' }}
            dataSource={inviteList}
            loading={loading}
            renderItem={(item, index) => (
              <List.Item style={{ backgroundColor: '#fff', padding: '10px' }}>
                {/* 招聘 岗位 base 薪资 学历 地区 公司 职位招聘描述 评论 hr */}
                {/* 公司 描述 官网 */}
                {/* 评论 评论人 评论 回答 时间 */}
                <List.Item.Meta
                  // avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                  title={`${item.post_name}[${item.district}]`}
                  description={`${item.prize}  最低要求：${item.education}`}
                />
                <List.Item.Meta
                  // avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                  title={item.company_name}
                  description="1000-9999人"
                />
                <Button
                  type="link"
                  onClick={() => handleGoDetail(item.company_id)}
                >
                  详情
                </Button>
              </List.Item>
            )}
          />
        </div>
      </Layout>
    </ConfigProvider>
  );
}

// fetch('https://eolink.o.apispace.com/history-weather/china-city', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-APISpace-Token': 'qy5i57gk2gmlgjhrc9p0h3dsjq7usd6y',
//   },
// }).then((res) => console.log(res));
