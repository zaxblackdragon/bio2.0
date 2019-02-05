import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {

  return (
    <div className="container" style={containerStyle}>
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/laravel">
        Laravel
      </a>

      <a className="menu-item" href="/angular">
        Angular
      </a>

      <a className="menu-item" href="/react">
        React
      </a>

      <a className="menu-item" href="/vue">
        Vue
      </a>

      <a className="menu-item" href="/node">
        Node
      </a>
    </Menu>
    </div>
  );
};

const containerStyle = {
  marginLeft: -15,
  backgroundColor: "#26C6C4",
  height: "100vh",
  position: "absolute",
  left: "0px",
  width: "80px",
  opacity: "0.9",
}


