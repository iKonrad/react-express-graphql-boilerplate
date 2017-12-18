import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Welcome to home</p>
    <Link to="/about">About page</Link>
  </div>
);

export default Home;
