// Import necessary dependencies from 'react' and 'antd' library
import React from 'react';
import { Avatar, Card } from 'antd';

// Import the CustomRate component
import CustomRate from './Rate'; 

// Destructure Meta component from 'antd' Card
const { Meta } = Card; 

// CustomCard component with props imageUrl, avatarUrl, cardTitle, cardDescription, actions
export const CustomCard = ({ imageUrl, avatarUrl, cardTitle, cardDescription, actions }) => (
    // Ant Design Card component with custom styling and props
    <Card
        style={{
            width: 300,
            justifyContent: 'space-around',
            margin: '30px',
            padding: '20px',
            display: 'inline-block',
            transition: 'box-shadow 0.3s',
            boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
        }}
        cover={<img alt="example" src={imageUrl} />} // Cover image for the card
        actions={actions} // Custom actions (buttons) for the card
    >
        {/* Meta component to display title, avatar, and description inside the card */}
        <Meta
            avatar={<Avatar src={avatarUrl} />} // Avatar (small image) at the top-right corner
            title={cardTitle} // Title of the card
            description={cardDescription} // Description of the card
        />
    </Card>
);

// ImageCard component with props imageUrl, title, rate
export const ImageCard = ({ imageUrl, title, rate }) => (
    // Ant Design Card component with custom styling and props
    <Card
        hoverable // Enable hover effect on the card
        style={{ width: 300, display: 'flex', margin: '30px', padding: '9px', display: 'inline-block' }}
        cover={<img alt="example" src={imageUrl} />} // Cover image for the card
    >
        {/* Meta component to display title and CustomRate component for dynamic rating */}
        <Meta
            title={title} // Title of the card
            description={<CustomRate rate={rate} />} // CustomRate component to show the dynamic rating
        />
    </Card>
);
