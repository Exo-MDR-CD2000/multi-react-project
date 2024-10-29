import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MyRecipesPage from './pages/MyRecipesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';




/**
 * The main App component that sets up routing for the application.
 * Provides the entry point for the application and defines the routes.
 * 
 * @returns {JSX.Element} The rendered App component.
 */
const App: React.FC = () => {
  return (
    <Routes>
      {/* Define the main route with the Layout component */}
      <Route path="/" element={<Layout />}>
        {/* Define the index route which renders the HomePage component */}
        <Route index element={<HomePage />} />
        {/* Define a route for the MyRecipesPage component */}
        <Route path="my-recipes" element={<MyRecipesPage />} />
        {/* Define a route for the ContactPage component */}
        <Route path="contact" element={<ContactPage />} />
        {/* Define a route for the AboutPage component */}
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default App;


// ----------------------------------------------------------------------------------------------------------------------------

// Routing Setup for App Component:

// Moved Components: The main components (RecipeList, RecipeForm, RecipeUpdateModal) were moved from App.tsx to HomePage.tsx.
// Added Routes: Set up routing using react-router-dom with Routes and Route components.
// Designated HomePage: The HomePage component is designated as the homepage (path="/").