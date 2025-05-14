import React from 'react';

const MenuItem = ({ title, price, image, description }) => {
  return (
    <div className="menu-item">
      <img src={image} alt={title} className="menu-image" />
      <h3 className="menu-title">{title}</h3>
      <p className="menu-price">{price} $</p>
      <p className="menu-description">{description}</p>
    </div>
  );
};

export default MenuItem;