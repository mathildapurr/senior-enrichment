import React from 'react';
import Navbar from './Navbar';

//children is all the routes we have defined in routes, they will be rendered under navbar
const Main = ({ children }) => (
  <div id="main" className="container-fluid">
    <Navbar />
    { children }
  </div>
);

export default Main;
