'use client';
import Layout from '@/app/layout/index';
import { SearchOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Cascader, Input, List, Select, Space } from 'antd';
import { CITYLIST } from '@/app/config/city';
import { useEffect, useState } from 'react';

const { Option } = Select;

interface City {
  city_geocode: string;
  city: string;
}

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
export default function Invite() {
  const [pCode, setPCode] = useState('');
  const [cityList, setCityList] = useState([] as Array<City>);
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
  return (
    <Layout>
      <div style={{ width: '80%' }}>
        <Input
          addonBefore={selectBefore}
          addonAfter={<SearchOutlined />}
          defaultValue="mysite"
        />
        <List
          pagination={{ position: 'bottom', align: 'center' }}
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                // avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </div>
    </Layout>
  );
}

// fetch('https://eolink.o.apispace.com/history-weather/china-city', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-APISpace-Token': 'qy5i57gk2gmlgjhrc9p0h3dsjq7usd6y',
//   },
// }).then((res) => console.log(res));
