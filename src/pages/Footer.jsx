import React from 'react'; // Import the 'React' object from 'react' module
import { Row, Col, Typography } from 'antd'; // Import various components and hooks from 'antd' library

const { Title, Text } = Typography; // Destructure the 'Typography' object and get the 'Title' and 'Text' components

const Footer = () => {
    // Define the 'Footer' functional component

    const linkStyle = {
        // Define the styles for links in the footer
        display: 'block', // Links should be displayed as blocks
        textDecoration: 'none', // No text decoration (e.g., underline) for links
        color: '#888888', // Link text color
    };

    return (
        // JSX code for the footer section
        <div>
            <div
                style={{
                    backgroundImage: "url('https://th.bing.com/th/id/OIG.it.gxHyDpTsUak16fDOB?w=270&h=270&c=6&r=0&o=5&dpr=1.2&pid=ImgGn')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1%'
                }}
            >
                {/* Row containing three columns */}
                <Row style={{ padding: '4px', marginRight: '20px' }}>
                    {/* First column */}
                    <Col span={8}>
                        <div>
                            {/* Title for the first column */}
                            <Title level={4}>Company</Title>
                            <div>
                                {/* Links in the first column */}
                                <Text style={linkStyle}>
                                    <a href="#">About</a>
                                </Text>
                                <Text style={linkStyle}>
                                    <a href="#">Careers</a>
                                </Text>
                                <Text style={linkStyle}>
                                    <a href="#">Mobile</a>
                                </Text>
                                <Text style={linkStyle}>
                                    <a href="#">Blog</a>
                                </Text>
                                <Text style={linkStyle}>
                                    <a href="#">How we work</a>
                                </Text>
                            </div>
                        </div>
                    </Col>

                    {/* Second column */}
                    <Col span={8}>
                        <div>
                            {/* Title for the second column */}
                            <Title level={4}>Contact</Title>
                            <div>
                                {/* Links in the second column */}
                                <Text style={linkStyle}>
                                    <a href="#">Advertise with us</a>
                                </Text>
                                <Text style={linkStyle}>
                                    <a href="#">Hotel Owners</a>
                                </Text>
                                <Text style={linkStyle}>
                                    <a href="#">Help/Faq</a>
                                </Text>
                                <Text style={linkStyle}>
                                    <a href="#">Partners</a>
                                </Text>
                                <Text style={linkStyle}>
                                    <a href="#">Press</a>
                                </Text>
                            </div>
                        </div>
                    </Col>

                    {/* Third column */}
                    <Col span={8}>
                        <div>
                            {/* Title for the third column */}
                            <Title level={4}>More</Title>
                            <div>
                                {/* Links in the third column */}
                                <Text style={linkStyle}>
                                    <a href="#">Feedback</a>
                                </Text>
                                <Text style={linkStyle}>
                                    <a href="#">Low Fare Tips</a>
                                </Text>
                                <Text style={linkStyle}>
                                    <a href="#">Airline Fee</a>
                                </Text>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Column for privacy information */}
                <div className="column">
                    <h3>Privacy</h3>
                    <h4>Terms & Conditions</h4>
                </div>

                {/* Additional content */}
                <div>
                    <p>©2023 CARTRABBIT</p>
                    <p>
                        Savings based on price differences among booking sites searched for the same accommodation.
                    </p>
                    <p>
                        Search cheap places to stay with CARTRABBIT. Use the accommodation finder to search for lodging
                        discounts in all major destinations around the world. CARTRABBIT searches hundreds of accommodation
                        booking sites to help you find places to stay which suit you best. Since CARTRABBIT searches many
                        travel sites at once, you can find accommodation discounts quickly. Discover cheap stays now and
                        make your lodging reservation today.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer; // Export the 'Footer' component
