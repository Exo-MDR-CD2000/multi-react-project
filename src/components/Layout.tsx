import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollBackToTop from '../components/ScrollBackToTop';

const Layout: React.FC = () => {
  return (
    <div className="d-flex flex-column">
      <Navbar />
      {/* TODO: Look into removing this container and manually apply it to each page for greater control on styling */ }
      <div className="container mt-4">
        <Outlet /> {/* This is where child routes will be rendered */}
        <ScrollBackToTop />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;