import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {

  return (
   
    <Menu style={containerStyle}>
      <a className="menu-item" href="/">
        Tech List
      </a>

      <a className="menu-item" href="/design">
       Wireframes/UX
      </a>

      <a className="menu-item" href="/#">
        Photography
      </a>

      <a className="menu-item" href="/fine_art">
        Fine Art
      </a>

      <a className="menu-item" href="/#">
        Companies
      </a>
    </Menu>
    
  );
};

const containerStyle = {
  // marginLeft: -15,
  // backgroundColor: "#26C6C4",
  height: "100vh",
  position: "relative",
  left: "0px",
  width: "80px",
  opacity: "0.9",
}


