import React from 'react';
import SideBar from './components/sidebar';
import Navbar from './components/Navbar/index';


import './App.css';

export default function App() {
  return (
    <div id="App">
      <Navbar />
      <SideBar />
      <div id="page-wrap">
        <h1>AppDividend</h1>
        <h2>Check out our tutorials the side menubar</h2>
      </div>
    </div>
  );
}
