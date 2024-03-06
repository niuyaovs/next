'use client';
import './index.scss';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { fetchUserInfo } from '@/app/lib/user';
import { useRouter } from 'next/navigation';
import { setCookie } from '@/app/util/cookie';
// import Layout from '@/app/layout/index';
interface User {
  name?: string;
  telephone?: string;
}

export default function Login() {
  const router = useRouter();
  const [form] = Form.useForm();
  const account = Form.useWatch('account', form);
  const password = Form.useWatch('password', form);

  const handleSubmit = async () => {
    form
      .validateFields()
      .then(async (values) => {
        try {
          const res = await fetchUserInfo();
          console.log(res);
          const userMap: User = {};
          const accountList = res.map((userItem) => {
            userMap[userItem.telephone] = userItem.name;
            return userItem.telephone;
          });
          if (accountList.includes(account)) {
            const passwordList = res.map((userItem) => {
              return userItem.password;
            });
            if (passwordList.includes(password)) {
              message.success('登录成功～');
              setCookie('userInfo', userMap[account]);
              // cookie.set('userInfo', userMap[account])
              router.push('/');
            } else {
              message.info('账号或密码错误，请再次核对～');
            }
          } else {
            message.info('账号或密码错误，请再次核对～');
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  type FieldType = {
    account?: string;
    password?: string;
    remember?: string;
  };
  return (
    // <Layout>
      <div className="login-wrapper">
        <p className="system-name">高校人才交流招聘系统</p>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          form={form}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Account"
            name="account"
            key="account"
            // initialValue={'13512630772'}
            rules={[{ required: true, message: 'Please input your account!' }]}
          >
            <Input
              size="large"
              placeholder="请输入账号"
              prefix={<UserOutlined />}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            key="password"
            // initialValue={'123456'}
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              size="large"
              placeholder="请输入密码"
              autoComplete="off"
            />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    // </Layout>
  );
}
