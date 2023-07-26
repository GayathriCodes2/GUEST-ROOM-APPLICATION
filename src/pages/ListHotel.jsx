import React from 'react';
import { DynamicLabel } from '../components/Label'; // Import 'DynamicLabel' component from '../components/Label' file
import MenuBar from '../components/MenuBar'; // Import 'MenuBar' component from '../components/MenuBar' file
import { BookOutlined, LoginOutlined } from '@ant-design/icons'; // Import icons from '@ant-design/icons' library
import { CustomCard } from '../components/Card'; // Import 'CustomCard' component from '../components/Card' file
import CustomRate from '../components/Rate'; // Import 'CustomRate' component from '../components/Rate' file

const ListHotel = () => {
  // Define the 'ListHotel' functional component

  const ListHotel = [
    {
      imageUrl: 'https://th.bing.com/th/id/OIG.s1hgKB50Cm9Q_5MFGgej?w=270&h=270&c=6&r=0&o=5&dpr=1.2&pid=ImgGn',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
      cardTitle: 'Connecting Room',
      cardDescription: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      Rating: < CustomRate/> ,
      actions: [
        { icon: <BookOutlined />, path: '/book-now', price: 'Rs.75(Per Night)' },
      
      ],
    },
    {
      imageUrl: 'https://th.bing.com/th/id/OIG.FcY3WhFwJ2IQqyQKvJdn?w=270&h=270&c=6&r=0&o=5&dpr=1.2&pid=ImgGn',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
      cardTitle: 'Accessible Room',
      cardDescription: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      actions: [
        { icon: <BookOutlined />, path: '/book-now', price: 'Rs.25(Per Night)' },
      ],
    },
    {
      imageUrl: 'https://th.bing.com/th/id/OIG.ZFkMy3csBj78cs34Xwpj?w=270&h=270&c=6&r=0&o=5&dpr=1.2&pid=ImgGn',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
      cardTitle: 'Adjoining Rooms',
      cardDescription: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      actions: [
        { icon: <BookOutlined />, path: '/book-now', price: 'Rs.25(Per Night)' },
      ],
    },
    {
      imageUrl: 'https://th.bing.com/th/id/OIG.aVfTPkyH93eg9J4fTumH?w=270&h=270&c=6&r=0&o=5&dpr=1.2&pid=ImgGn',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
      cardTitle: 'Executive Room',
      cardDescription: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      actions: [
        { icon: <BookOutlined />, path: '/book-now', price: 'Rs.25(Per Night)' },
      ],
    },
    {
      imageUrl: 'https://th.bing.com/th/id/OIG.8W_au35098S2bX1rFUMQ?w=270&h=270&c=6&r=0&o=5&dpr=1.2&pid=ImgGn',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
      cardTitle: 'Standard Room',
      cardDescription: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      actions: [
        { icon: <BookOutlined />, path: '/book-now', price: 'Rs.25(Per Night)' },
      ],
    },
    {
      imageUrl: 'https://th.bing.com/th/id/OIG.cpT.MgAYQ94RIUlpzwFo?w=270&h=270&c=6&r=0&o=5&dpr=1.2&pid=ImgGn',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
      cardTitle: 'Family Room',
      cardDescription: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      actions: [
        { icon: <BookOutlined />, path: '/book-now', price: 'Rs.25(Per Night)' },
      ],
    },
    {
      imageUrl: 'https://th.bing.com/th/id/OIG.Pk5A.nxhBQZqT98x6m3f?w=270&h=270&c=6&r=0&o=5&dpr=1.2&pid=ImgGn',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
      cardTitle: 'Deluxe Room',
      cardDescription: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      actions: [
        { icon: <BookOutlined />, path: '/book-now', price: 'Rs.25(Per Night)' },
      ],
    },
    {
      imageUrl: 'https://th.bing.com/th/id/OIG.4LyWDtY1LqMtEv.ViMa_?w=270&h=270&c=6&r=0&o=5&dpr=1.2&pid=ImgGn',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
      cardTitle: 'Double Room',
      cardDescription: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      actions: [
        { icon: <BookOutlined />, path: '/book-now', price: 'Rs.25(Per Night)' },
      ],
    },
    {
      imageUrl: 'https://th.bing.com/th/id/OIG.ceXurKj5T8IpuF_R4LYX?w=270&h=270&c=6&r=0&o=5&dpr=1.2&pid=ImgGn',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
      cardTitle: 'Queen Room',
      cardDescription: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      actions: [
        { icon: <BookOutlined />, path: '/book-now', price: 'Rs.25(Per Night)' },
      ],
    },
    {
      imageUrl: 'https://th.bing.com/th/id/OIG.IO4XgTuaSrQoZFEnrsT8?w=270&h=270&c=6&r=0&o=5&dpr=1.2&pid=ImgGn',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
      cardTitle: 'King Room',
      cardDescription: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      actions: [
        { icon: <BookOutlined />, path: '/book-now', price: 'Rs.25(Per Night)' },
      ],
    },
  ];

  const items = [
    {
      label: 'Login',
      key: 'login',
      icon: <LoginOutlined />,
      path: '/login',
    },
  ];

  return (
    // JSX code for the 'ListHotel' component
    <div>
      <MenuBar items={items} searchEnabled={true} /> {/* Render the MenuBar component with menu items */}
      <DynamicLabel text="Search Hotels and Rooms at Affordable Prices" /> {/* Render the DynamicLabel component with the specified text */}
      {ListHotel.map((data, index) => (
        <CustomCard
          key={index}
          imageUrl={data.imageUrl}
          avatarUrl={data.avatarUrl}
          cardTitle={data.cardTitle}
          cardDescription={data.cardDescription}
          cardRating={data.Rating}
          actions={data.actions.map((action, actionIndex) => (
            <div key={actionIndex}>
              {/* Render the action (e.g., booking button) */}
              {action.price && (
                <span style={{ display: 'block', marginBottom: '8px', fontSize: '16px', fontWeight: 'bold', color: 'black' }}>
                  {action.price}
                </span>
              )}
              <div style={{}}>
                <a href={action.path} key={action.path}>
                  {action.icon}
                  {action.icon.type === BookOutlined ? "Book Room" : action.icon}
                </a>
              </div>
            </div>
          ))}
        />
      ))}
    </div>
  );
};

export default ListHotel; // Export the 'ListHotel' component
