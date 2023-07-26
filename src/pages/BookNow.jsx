import React from 'react'; // Import the 'React' object from 'react' module
import { Button, Form, Input, DatePicker, InputNumber, Checkbox, Select } from 'antd'; // Import various components and hooks from 'antd' library
import { LoginOutlined } from '@ant-design/icons'; // Import the 'LoginOutlined' icon from 'antd icons'
import { cyan } from '@ant-design/colors'; // Import the 'cyan' color from 'ant-design/colors'
import MenuBar from '../components/MenuBar'; // Import the 'MenuBar' component from '../components/MenuBar' file

const { Option } = Select; // Destructure the 'Select' object and get the 'Option' component
const { RangePicker } = DatePicker; // Destructure the 'DatePicker' object and get the 'RangePicker' component

const onFinish = (values) => {
  // Define the 'onFinish' function which will be called on form submission
  console.log('Success:', values); // Log the form values on successful form submission
  window.location.href = '/payement'; // Redirect to the '/payement' page after form submission
};

const onFinishFailed = (errorInfo) => {
  // Define the 'onFinishFailed' function which will be called if form validation fails
  console.log('Failed:', errorInfo); // Log the error info in case of form validation failure
};

const items = [
  // An array of items for 'MenuBar' component (not provided in this code snippet)
  {
    label: 'Login', // Label for the menu item
    key: 'login', // Key for the menu item
    icon: <LoginOutlined />, // Icon for the menu item
    path: '/login', // Path to navigate when the menu item is clicked
  },
];

const BookNow = () => (
  // Define the 'BookNow' functional component
  <>
    {/* Render the 'MenuBar' component with 'items' and 'searchEnabled' props */}
    <MenuBar items={items} searchEnabled={false} />

    {/* Main content */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '20px',
      }}
    >
      <div style={{ flex: 1, marginLeft: '10%' }}>
        <img
          src="https://th.bing.com/th/id/OIG.OFfM6wqec5DhsyGdFrHg?pid=ImgGn"
          alt="Logo"
          style={{ width: '100%', maxWidth: '500px' }}
        />
      </div>
      <div style={{ flex: 1, maxWidth: '650px', marginRight: '8%' }}>
        {/* Render the form */}
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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* Form Title */}
          <h1 style={{ textAlign: 'center' }}>Book Now</h1>

          {/* Form Fields */}
          <Form.Item
            label="Destiny Location"
            name="destinyLocation"
            rules={[{ required: true, message: 'Please enter Destiny Location!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Check-in and Check-out Date"
            name="checkInDate"
            rules={[{ required: true, message: 'Please select Check-in Date!' }]}
          >
            <RangePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="Adults"
            name="adults"
            rules={[{ required: true, message: 'Please enter number of Adults!' }]}
          >
            <InputNumber min={1} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="Children"
            name="children"
            rules={[{ required: true, message: 'Please enter number of Children!' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="Number of Rooms"
            name="rooms"
            rules={[{ required: true, message: 'Please select Number of Rooms!' }]}
          >
            <InputNumber min={1} max={5} style={{ width: '100%' }} />
          </Form.Item>

          {/* Checkbox for travel reasons */}
          <Form.Item
            label="Select Room Type"
            name="RoomType"
            rules={[{ required: true, message: 'Please select your Rooms Type!' }]}
          >
            <Select>
              {/* Options for number of rooms */}
              <Option value="connecting">Connecting Rooms</Option>
              <Option value="accessible">Accessible Room</Option>
              <Option value="adjoining">Adjoining Rooms</Option>
              <Option value="executive">Executive Room</Option>
              <Option value="standard">Standard Room</Option>
              <Option value="family">Family Room</Option>
              <Option value="deluxe">Deluxe Room</Option>
              <Option value="double">Double Room</Option>
              <Option value="queen">Queen Room</Option>
              <Option value="king">King Room</Option>
              <Option value="suite">Suite</Option>
              {/* Add more options as needed */}
            </Select>
          </Form.Item>
          <Form.Item label="Travel Reason: " name="travelReason">
            <Checkbox.Group>
              <Checkbox value="work">I'm travelling for work</Checkbox>
              <Checkbox value="tour">I'm travelling for tour</Checkbox>
              <Checkbox value="personal">I'm travelling for personal reason</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{ background: cyan[4], width: '100%' }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  </>
);

export default BookNow; // Export the 'BookNow' component
