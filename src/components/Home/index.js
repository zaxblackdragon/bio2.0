import React, { Component } from 'react';
import homePageImg from '../../images/homeImage.jpg';
import "./index.css";

export class Home extends Component {
  render() {
    return (
     
        <div className="container">
          <img id="home-img" src={homePageImg} />
          <h1 className="hot">More stuff will go below this</h1>
        </div>
      
    )
  }
}

export default Home;
