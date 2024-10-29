import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollBackToTop from '../components/ScrollBackToTop';

/**
 * Layout component that provides a consistent layout for the application.
 * It includes the Navbar, Footer, and a container for rendering child routes.
 * 
 * This component is used in the App component to wrap all routes, ensuring
 * that the Navbar and Footer are displayed on all pages.
 * 
 * @returns {JSX.Element} The rendered Layout component.
 */
const Layout: React.FC = () => {
  return (
    <div className="d-flex flex-column">
      {/* Include the Navbar component to provide navigation links */}
      <Navbar />
      {/* TODO: Look into removing this container and manually apply it to each page for greater control on styling */}
      <div className="container mt-4">
        {/* Outlet component is used to render child routes */}
        <Outlet />
        {/* Include the ScrollBackToTop component to handle scrolling behavior */}
        <ScrollBackToTop />
      </div>
      {/* Include the Footer component to provide footer content */}
      <Footer />
    </div>
  );
};

export default Layout;