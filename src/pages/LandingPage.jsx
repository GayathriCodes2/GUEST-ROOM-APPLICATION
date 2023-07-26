import React, { useState } from 'react'; // Import the 'React' object and 'useState' hook from 'react' module
import { Form, Input, DatePicker, InputNumber, Checkbox, Select, Button, Row, Col } from 'antd'; // Import various components from 'antd' library
import { DynamicLabelWithButton } from '../components/Label'; // Import 'DynamicLabel' and 'DynamicLabelWithButton' components from '../components/Label' file
import MenuBar from '../components/MenuBar'; // Import 'MenuBar' component from '../components/MenuBar' file
import { LoginOutlined, } from '@ant-design/icons'; // Import various icons from '@ant-design/icons' library
import { cyan } from '@ant-design/colors'; // Import 'cyan' color from '@ant-design/colors' library
import AboutUsPage from './AboutUsPage'; // Import 'AboutUsPage' component from './AboutUsPage' file
import OurGallery from './OurGallery'; // Import 'OurGallery' component from './OurGallery' file
import Footer from './Footer'; // Import 'Footer' component from './Footer' file

const { Option } = Select; // Destructure 'Option' component from 'Select' object
const { RangePicker } = DatePicker; // Destructure 'RangePicker' component from 'DatePicker' object

const LandingPage = () => {
    // Define the 'LandingPage' functional component

    // State variables using the 'useState' hook
    const [formData, setFormData] = useState({}); // 'formData' stores the form data, 'setFormData' is used to update the form data
    const [isButtonClicked, setIsButtonClicked] = useState(false); // 'isButtonClicked' is a boolean flag to check if the submit button is clicked or not

    // Function to handle form submission
    const onFinish = (values) => {
        setFormData(values); // Set the form data to the state variable
        setIsButtonClicked(true); // Set 'isButtonClicked' to true to indicate that the submit button is clicked
        window.location.href = '/hotel-list'; // Redirect to '/hotel-list' page after form submission
    };

    // Function to handle click on "Our Rooms" button
    const handleOurRoomsClick = () => {
        const ourRoomsElement = document.getElementById('our-room'); // Get the element with id 'our-room'
        if (ourRoomsElement) {
            const { offsetTop } = ourRoomsElement;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' }); // Scroll to the 'our-room' section smoothly when the button is clicked
        }
    };

    // Array of menu items for the MenuBar component
    const items = [
        {
            label: 'Login',
            key: 'login',
            icon: <LoginOutlined />,
            path: '/login',
        },
        // Add more menu items as needed
    ];

    return (
        // JSX code for the 'LandingPage' component
        <div>
            <MenuBar items={items} searchEnabled={true} /> {/* Render the MenuBar component with menu items */}
            <DynamicLabelWithButton text="Find Your Stay" path="/hotel-list" ButtonContent="Our Rooms" onClick={handleOurRoomsClick} />
            {/* Render the DynamicLabelWithButton component with "Find Your Stay" text, path, button content, and onClick event */}
            <div style={{ display: 'flex', justifyContent: 'center', padding: '2%', backgroundImage: "url('https://th.bing.com/th/id/OIG.it.gxHyDpTsUak16fDOB?w=270&h=270&c=6&r=0&o=5&dpr=1.2&pid=ImgGn')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: '100%' }}>

                <Form name="form" layout="vertical" onFinish={onFinish} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '2%', borderRadius: '2px', border: '1px solid rgba(0, 0, 0, 0.2)', boxShadow: '-4px 0 4px rgba(0, 0, 0, 0.1)', }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <h2 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '1px', }}>Search Hotels and Rooms at Affordable Prices</h2>
                    </div>
                    <Form.Item label="Destination" name="destinyLocation" rules={[{ required: true, message: 'Please enter Destiny Location!' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="Select Check-in and Check-out Date" name="checkInDate" rules={[{ required: true, message: 'Please select Check-in Date!' }]}>
                        <RangePicker style={{ width: '100%' }} />
                    </Form.Item>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Adults" name="adults" rules={[{ required: true, message: 'Please enter number of Adults!' }]}>
                                <InputNumber min={1} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Children" name="children" rules={[{ required: true, message: 'Please enter number of Children!' }]}>
                                <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>

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

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ background: cyan[4], width: '100%' }}>
                            Submit</Button>
                    </Form.Item>
                </Form>
            </div>
            {isButtonClicked && (
                console.log(formData) // Log the form data if the submit button is clicked
            )}

            <AboutUsPage /> {/* Render the 'AboutUsPage' component */}
            <OurGallery /> {/* Render the 'OurGallery' component */}

            <div>
                <Footer /> {/* Render the 'Footer' component */}
            </div>


        </div>
    );
};

export default LandingPage; // Export the 'LandingPage' component
