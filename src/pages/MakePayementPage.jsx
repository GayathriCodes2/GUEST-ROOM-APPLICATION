import React from 'react';
import { DatePicker, Button, Form, Input } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import MenuBar from '../components/MenuBar';
import { cyan } from '@ant-design/colors';

const onFinish = (values) => {
    console.log('Success:', values);
    window.location.href = '/success'; // Redirect to the '/success' page on successful payment
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

const MakePayment = () => (
    <>
        <MenuBar items={items} searchEnabled={false} />
        {/* Payment form */}
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '20px',
            }}
        >
            <div style={{ flex: 1, marginLeft: '10%' }}>
                {/* Logo */}
                <img
                    src="https://th.bing.com/th/id/OIG.OFfM6wqec5DhsyGdFrHg?pid=ImgGn"
                    alt="Logo"
                    style={{ width: '100%', maxWidth: '500px' }}
                />
            </div>
            <div style={{ flex: 1, maxWidth: '650px', marginRight: '8%' }}>
                {/* Payment form */}
                <Form
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
                    onFinish={onFinish} // Handle form submission on 'Pay Now' button click
                    onFinishFailed={onFinishFailed} // Handle form submission failure
                    autoComplete="off"
                >
                    {/* Payment details */}
                    <h2 style={{ textAlign: 'center' }}>Payment Details</h2>
                    <Form.Item
                        label="Payment Amount"
                        name="paymentAmount"
                        rules={[{ required: true, message: 'Please enter the payment amount!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Name on Card"
                        name="nameOnCard"
                        rules={[{ required: true, message: 'Please enter the name on card!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Card Number"
                        name="cardNumber"
                        rules={[{ required: true, message: 'Please enter the card number!', max: 16 }]}
                    >
                        <Input type="number" maxLength={16} />
                    </Form.Item>

                    <Form.Item
                        label="Expiry Date"
                        name="expiryDate"
                        rules={[{ required: true, message: 'Please enter the expiry date!' }]}
                    
                    >
                        <DatePicker picker="month" placeholder='yyyy-mm'  style={{width: '100%'}} />
                    </Form.Item>

                    <Form.Item
                        label="Security Code"
                        name="securityCode"
                        rules={[{ required: true, message: 'Please enter the security code!', max: 4 }]}
                    >
                        <Input type="number" maxLength={4} />
                    </Form.Item>

                    <Form.Item
                        label="ZIP/Postal Code"
                        name="zipCode"
                        rules={[{ required: true, message: 'Please enter the ZIP/Postal code!', max: 6 }]}
                    >
                        <Input type="number" maxLength={6} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        {/* Pay Now button */}
                        <Button type="primary" htmlType="submit" style={{ background: cyan[4], width: '100%' }}>
                            Pay Now
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    </>
);

export default MakePayment;
