import React from 'react'; // Import the 'React' object from 'react' module
import { Rate } from 'antd'; // Import the 'Rate' component from 'antd' library

// CustomRate component definition with 'rate' as a prop
const CustomRate = ({ rate }) => <Rate disabled defaultValue={rate} />;

export default CustomRate; // Export the CustomRate component
