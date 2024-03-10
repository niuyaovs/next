'use client'
import { observer } from 'mobx-react-lite';
import { ROUTES_LINKS } from '@/app/config/index';
import { usePathname, useRouter } from 'next/navigation';
// import Logo from '@/components/Logo'
import Link from 'next/link';
import '@/app/style/app.scss';
import { UserOutlined } from '@ant-design/icons';
import { getCookie, removeCookies } from '@/app/util/cookie';

import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';
import { useEffect, useState } from 'react';

const loginItems: MenuProps['items'] = [
  {
    label: '我的',
    key: 'mine',
  },
  {
    label: '登出',
    key: 'logout',
  }
];
const loginoutItems: MenuProps['items'] = [
  {
    label: '登录',
    key: 'login',
  }
];


export default observer(function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const items: MenuProps['items'] = username ? loginItems : loginoutItems;
  useEffect(() => {
    const userInfo: any = JSON.parse((getCookie('userInfo'))|| '{}');
    setUsername(userInfo.username);
  }, [])
  const onClick: MenuProps['onClick'] = ({ key }) => {
    switch(key) {
      case 'mine':
        router.push('/mine');
      break;
      case 'login':
        router.push('/login');
      break;
      case 'logout':
        router.push('/');
        removeCookies('userInfo');
      break;
    }
  };
  return (
    <div className="app-header shadow-md">
      <div className="app-header-navbar white shadow-4 border-bottom pc-model container">
        <div className="app-header-main">
          <div className="app-header-logo">
            <span className="app-logo">
              <UserOutlined style={{ marginRight: '8px' }} />
              <Dropdown menu={{ items, onClick }}>
                <span>
                  <Space>
                    {username || '未登录'}
                    <DownOutlined />
                  </Space>
                </span>
              </Dropdown>
            </span>
          </div>
          <div className="app-header-nav">
            {ROUTES_LINKS.map(({ title, path }: any) => {
              return (
                <Link
                  href={path}
                  key={path}
                  className={pathname === path ? 'active nav-link' : 'nav-link'}
                >
                  {' '}
                  {title}{' '}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});
