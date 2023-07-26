import React from 'react'; // Import the 'React' object from 'react' module
import { Button, Form, Input, Select, Upload } from 'antd'; // Import various components and hooks from 'antd' library
import { UploadOutlined } from '@ant-design/icons'; // Import the 'UploadOutlined' icon from 'antd' icons
import MenuBar from '../components/MenuBar'; // Import the 'MenuBar' component from '../components/MenuBar' file
import { cyan } from '@ant-design/colors'; // Import the 'cyan' color from 'ant-design/colors'
import { message } from 'antd'; // Import the 'message' component from 'antd'

const { Option } = Select; // Destructure the 'Select' object and get the 'Option' component

const Admin = () => {
  // Define the 'Admin' functional component
  const [form] = Form.useForm(); // Use 'Form.useForm()' hook to initialize the form and get form instance

  const onFinish = async (values) => {
    // Define the 'onFinish' function which will be called on form submission
    try {
      console.log('Success:', values); // Log the form values on successful form submission
      form.resetFields(); // Reset the form fields after successful form submission
      message.success('Room will be added within 24 hours'); // Display a success message using 'message' component
      // Navigate to the '/hotel-list' page
      window.location.href = '/hotel-list'; // Redirect to the 'hotel-list' page
    } catch (error) {
      console.error('Error:', error.message); // Log the error message in case of form submission failure
      form.resetFields(); // Reset the form fields after form submission failure
      message.error('Failed to Add Room! Try Again!'); // Display an error message using 'message' component
      // Handle the error response, display an error message, etc.
    }
  };

  const onFinishFailed = (errorInfo) => {
    // Define the 'onFinishFailed' function which will be called if form validation fails
    console.log('Failed:', errorInfo); // Log the error info in case of form validation failure
  };

  const items = [
    // An array of items for 'MenuBar' component
  ];

  return (
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
        <div style={{ flex: 1, marginLeft: '6%' }}>
          <img
            src="https://th.bing.com/th/id/OIG.OFfM6wqec5DhsyGdFrHg?pid=ImgGn"
            alt="Logo"
            style={{ width: '100%', maxWidth: '500px' }}
          />
        </div>
        <div style={{ flex: 1, maxWidth: '750px', marginRight: '6%' }}>
          {/* Render the form */}
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
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <h1 style={{ textAlign: 'center' }}>Add New Room</h1>

                      

                        <Form.Item
                            label="Location"
                            name="location"
                            rules={[{ required: true, message: 'Please enter the location!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Room Type"
                            name="roomType"
                            rules={[{ required: true, message: 'Please select the room type!' }]}
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

                        <Form.Item
            label="Already Registered Hotel?"
            name="IsAlready"
            rules={[{ required: true, message: 'Please select an option!' }]}
          >
            <Select>
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
          </Form.Item>

          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => prevValues.IsAlready !== currentValues.IsAlready}
          >
            {({ getFieldValue }) =>
              getFieldValue('IsAlready') === 'no' ? (
                <Form.Item
                label="Add Hotel"
                name="hotelName"
                rules={[{ required: true, message: 'Please enter the hotel name!' }]}
            >
                <Input />
            </Form.Item>
            

              ) : 
              <Form.Item
                            label="Select Hotel"
                            name="hotelName"
                            rules={[{ required: true, message: 'Please select the room type!' }]}
                        >
                            <Select placeholder="Select Hotel Name">
                                <Option value="single">Single</Option>
                                <Option value="double">Double</Option>
                                <Option value="suite">Suite</Option>
                            </Select>
                        </Form.Item>
            }
          </Form.Item>
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[{ required: true, message: 'Please enter the description!' }]}
                        >
                            <Input.TextArea rows={4} />
                        </Form.Item>

                        <Form.Item
                            label="Room Image"
                            name="roomImage"
                            valuePropName="fileList"
                            getValueFromEvent={(e) => e.fileList}
                            rules={[{ required: true, message: 'Please upload the room image!' }]}
                        >
                            <Upload name="roomImage" listType="picture" multiple={false}>
                                <Button icon={<UploadOutlined />}>Upload</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" style={{ background: cyan[4], width: '100%' }}>
                                Upload
                            </Button>
                        </Form.Item>


                        
                    </Form>
        </div>
      </div>
    </>
  );
};

export default Admin; // Export the 'Admin' component
// Export the 'Admin' component to make it available for use in other parts of the application.
