import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import MenuBar from '../components/MenuBar';
import { cyan } from '@ant-design/colors';
import { message } from 'antd';

const { Text } = Typography;

const LoginPage = () => {
  // Create a form instance using 'Form.useForm()' hook
  const [form] = Form.useForm();

  // Handle form submission when the user clicks the submit button
  const onFinish = async (values) => {
    try {
      console.log('Success:', values);
      form.resetFields(); // Reset the form fields after successful login
      message.success('Login successful'); // Display a success message using 'antd' message component

      // Redirect the user to different pages based on their login credentials
      if (values.username === 'admin' && values.password === 'admin') {
        window.location.href = '/admin'; // Navigate to the admin page if the username and password are 'admin'
      } else {
        // Navigate to the 'hotel-list' page if the username and password are not 'admin'
        window.location.href = '/hotel-list';
      }
    } catch (error) {
      console.error('Error:', error.message);
      form.resetFields(); // Reset the form fields in case of an error
      message.error('Failed to Login! Try Again!'); // Display an error message using 'antd' message component
      // Handle the error response, display an error message, etc.
    }
  };

  // Handle form submission failure
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const items = [];

  return (
    <>
      <MenuBar items={items} searchEnabled={false} /> {/* Render the MenuBar component */}
      {/* Login form */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '20px',
        }}
      >
        <div style={{ flex: 1, marginLeft: '12%' }}>
          {/* Logo */}
          <img
            src="https://th.bing.com/th/id/OIG.OFfM6wqec5DhsyGdFrHg?pid=ImgGn"
            alt="Logo"
            style={{ width: '100%', maxWidth: '500px' }}
          />
        </div>
        <div style={{ flex: 1, maxWidth: '500px', marginRight: '8%' }}>
          {/* Login form */}
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{
              boxShadow: '-4px 0 4px rgba(0, 0, 0, 0.1)',
              borderBottom: 'none',
              borderRight: 'none',
              padding: '20px',
            }}
            initialValues={{ remember: true }}
            onFinish={onFinish} // Handle form submission on 'Submit' button click
            onFinishFailed={onFinishFailed} // Handle form submission failure
            autoComplete="off"
          >
            <h1 style={{ textAlign: 'center' }}>Login Form</h1>
            {/* Username input field */}
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please enter your username!' }]}
            >
              <Input />
            </Form.Item>

            {/* Password input field */}
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ textAlign: 'right' }}>
              {/* Forgot password link */}
              <a className="login-form-forgot" href="/forgot-password">
                Forgot password
              </a>
            </Form.Item>

            {/* Submit button */}
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" style={{ background: cyan[4], width: '100%' }}>
                Submit
              </Button>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              {/* Link to the registration page */}
              <Text>
                Don't have an account? <a href="/register">Register here</a>
              </Text>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
