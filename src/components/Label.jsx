import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export const DynamicLabelWithButton = ({ text, path, ButtonContent }) => {
  return (
    <div
      style={{
        color: '#000000',
        textAlign: 'center',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '18px',
        fontWeight: 'bold',
        borderRadius: '4px',
        boxShadow: '0px -4px 8px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <span style={{ flex: 1 }}>{text}</span>
      <Link to={path}>
        <Button
          type="default"
          shape="round"
          size="small"
          style={{ background: 'transparent', color: '#000000', border: '1px solid #000000' }}
          onMouseEnter={(e) => (e.target.style.color = '#000000')}
          onMouseLeave={(e) => (e.target.style.color = '')}
        >
          {ButtonContent}
        </Button>
      </Link>
    </div>
  );
};


export const DynamicLabel = ({ text }) => {
  return (
    <div
      style={{
        color: '#000000',
        textAlign: 'center',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '18px',
        fontWeight: 'bold',
        borderRadius: '4px',
        boxShadow: '0px -4px 8px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <span style={{ flex: 1 }}>{text}</span>
    </div>
  );
};


