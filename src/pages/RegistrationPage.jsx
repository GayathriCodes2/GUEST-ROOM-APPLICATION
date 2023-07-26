import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import MenuBar from '../components/MenuBar';
import { LoginOutlined } from '@ant-design/icons';
import { cyan } from '@ant-design/colors';
import { message } from 'antd';

const { Text } = Typography;

const RegistrationPage = () => {
  const [form] = Form.useForm();

  
  // Handle form submission when the user clicks the submit button
  const onFinish = async (values) => {
    try {
      console.log('Success:', values);
      form.resetFields();
      message.success('Registration successful');
    } catch (error) {
      console.error('Error:', error.message);
      form.resetFields();
      message.error('Failed to Register! Try Again!');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const items = [
    {
      label: 'Login',
      key: 'login',
      icon: <LoginOutlined />,
      path: '/login',
    },
  ];

  return (
    <>
      <MenuBar items={items} searchEnabled={false} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div style={{ flex: 1, marginLeft: '12%' }}>
          <img
            src="https://th.bing.com/th/id/OIG.OFfM6wqec5DhsyGdFrHg?pid=ImgGn"
            alt="Logo"
            style={{ width: '100%', maxWidth: '500px' }}
          />
        </div>
        <div style={{ flex: 1, maxWidth: '500px', marginRight: '8%' }}>
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{
              boxShadow: '-4px 0 4px rgba(0, 0, 0, 0.1)',
              padding: '20px',
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h1 style={{ textAlign: 'center' }}>Registration Form</h1>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please enter your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Full Name"
              name="firstName"
              rules={[{ required: true, message: 'Please enter your First Name!' }]}
            >
              <Input type="text" />
            </Form.Item>

            
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please enter your email!' }]}
            >
              <Input type="email" />
            </Form.Item>

            <Form.Item
              label="Date of Birth"
              name="dateOfBirth"
              rules={[{ required: true, message: 'Please enter your date of birth!' }]}
            >
              <Input type="date" />
            </Form.Item>
          
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            {/* Address Line 1 */}
            <Form.Item
              label="Address Line"
              name="addressLine"
              rules={[{ required: true, message: 'Please enter your address line 1!' }]}
            >
              <Input />
            </Form.Item>

            {/* Address Line 2 */}
            <Form.Item label="Aadhar Number" name="AadharNumber" rules={[{ required: true, message: 'Please enter valid Aadhar Number!',  max: 12 }]}
            >
              <Input />
            </Form.Item>

            {/* City */}
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: 'Please enter your city!' }]}
            >
              <Input />
            </Form.Item>

            {/* State */}
            <Form.Item
              label="State"
              name="state"
              rules={[{ required: true, message: 'Please enter your state!' }]}
            >
              <Input />
            </Form.Item>

            {/* Country */}
            <Form.Item
              label="Country"
              name="country"
              rules={[{ required: true, message: 'Please enter your country!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Postal Code"
              name="postalCode"
              rules={[{ required: true, message: 'Please enter your valid postalCode!', max: 6 }]}
            >
              <Input type="number" maxLength={6} />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[{ required: true, message: 'Please enter your phone number!', max: 10 }]}
            >
              <Input type="number" maxLength={10} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" style={{ background: cyan[4], width: '100%' }}>
                Submit
              </Button>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Text>
                Already have an account? <a href="/login">Login here</a>
              </Text>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
