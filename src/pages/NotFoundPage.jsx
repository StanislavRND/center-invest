import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <div
        style={{
          fontSize: '40px',
          fontWeight: 700,
        }}>
        Страница не найдена...
      </div>
      <div style={{fontSize: '48px'}}>😞</div>
    </div>
  );
};

export default NotFoundPage;
