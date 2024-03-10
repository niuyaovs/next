'use client';
import './index.scss';
import Layout from '@/app/layout/index';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, type FormProps, Input, Upload } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
export default function Mine() {
  return (
    <Layout>
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
        style={{ marginTop: '10%' }}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="姓名"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="手机号"
          name="telephone"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="学校"
          name="school"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="学院专业"
          name="academy"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="简历"
          label="vitae"
        >
          <Upload
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            listType="picture"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary">修改</Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}
