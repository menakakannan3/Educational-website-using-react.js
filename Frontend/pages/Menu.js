import React from 'react';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem'; // Ensure the file name case matches
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our course</h1> 
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <MenuItem 
            key={key} 
            image={menuItem.image} 
            name={menuItem.name} 
            price={menuItem.price} 
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
