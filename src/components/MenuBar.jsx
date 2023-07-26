import React, { useState } from 'react';
import { cyan } from '@ant-design/colors';
import { Avatar, Col, Input, Menu, Row, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Search } = Input;
const onSearch = (value) => console.log(value);

const MenuBar = ({ items, searchEnabled }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: cyan[4],
          padding: '0.5%',
          display: 'block',
          opacity: 0.8,
        }}
      >
        <Row justify="space-between" align="middle">
          <Col flex="10%">
            <Avatar
              src="https://th.bing.com/th/id/OIG.BIOvv49Sr5jf6GZL20fD?w=270&h=270&c=6&r=0&o=5&dpr=1.2&pid=ImgGn"
              alt="Logo"
              style={{ marginRight: '6px', height: '90%', borderRadius: '50%' }}
            />
          </Col>
          {searchEnabled && (
            <Col flex="70%">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{ width: '100%', justifyContent: 'center', alignItems: 'center', margin: '2% 0%' }}
              />
            </Col>
          )}
          <Col flex="none" style={{ marginLeft: 'auto' }}>
            <MenuOutlined
              onClick={showDrawer}
              style={{ fontSize: '20px', color: 'black', cursor: 'pointer', fontWeight: 'bold', marginRight: '20px' }}
            />
          </Col>
        </Row>

        <Drawer placement="right" onClose={closeDrawer} visible={drawerVisible} title="Menu" bodyStyle={{ padding: 0 }}>
          <Menu onClick={closeDrawer} style={{ width: 256 }} mode="vertical">
            {items.map((item) => {
              if (item.children) {
                return (
                  <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                    {item.children.map((child) => (
                      <Menu.Item key={child.path}>
                        <Link to={child.path}>{child.label}</Link>
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                );
              }
              return (
                <Menu.Item key={item.path} icon={item.icon}>
                  <Link to={item.path}>{item.label}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Drawer>
      </div>
    </div>
  );
};

export default MenuBar;
