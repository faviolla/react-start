import React from 'react';
import MenuItem from './MenuItem';

const menuItems = [
  { title: 'Pizza Margherita', price: 8.99, image: 'https://placehold.co/600x400', description: 'Classic Italian pizza with tomato sauce, mozzarella, and fresh basil.' },
  { title: 'Caesar Salad', price: 5.99, image: 'https://placehold.co/600x400' },
  { title: 'Pasta Carbonara', price: 10.49, image: 'https://placehold.co/600x400', description: 'A creamy pasta dish with pancetta, eggs, Parmesan cheese, and black pepper.' },
  { title: 'Grilled Salmon', price: 15.99, image: 'https://placehold.co/600x400' },
  { title: 'Tiramisu', price: 6.99, image: 'https://placehold.co/600x400', }
];

function MenuList() {
  return (
    <div className="menu-list">
      {menuItems.map((item, index) => (
        <MenuItem 
          key={index} 
          title={item.title} 
          price={item.price} 
          image={item.image} 
          description={item.description} 
        />
      ))}
    </div>
  );
}

export default MenuList;