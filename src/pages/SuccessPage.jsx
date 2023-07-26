import React from 'react';
import { Result } from 'antd';

const Success = () => (
  // Success component to display a success message after booking a room
  <Result
    status="success" // Status of the result (success, error, warning, info)
    title="Successfully Booked your Room!" // Main title of the success message
    subTitle="Your Order number: 2017182818828182881 server configuration takes 1-5 minutes, please wait." // Subtitle providing additional information
  />
);

export default Success;