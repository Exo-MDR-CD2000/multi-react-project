import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyRecipesPage from './pages/MyRecipesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ScrollBackToTop from './components/ScrollBackToTop';

/**
 * The main App component that sets up routing for the application.
 * Provides the entry point for the application and defines the routes.
 * 
 * @returns {JSX.Element} The rendered App component.
 */
const App: React.FC = () => {
  return (
    // Wrap the entire application in the Router component to enable routing
    <Router>
      <div className="d-flex justify-content-center">
        <div className="container mt-4">
          <h1 className="text-center">My Recipe App</h1>
          {/* Define the Routes component to specify the different routes in the application */}
          <Routes>
            {/* Define a route for the HomePage component */}
            <Route path="/" element={<HomePage />} />
            {/* Define a route for the MyRecipesPage component */}
            <Route path="/my-recipes" element={<MyRecipesPage />} />
            {/* Define a route for the ContactPage component */}
            <Route path="/contact" element={<ContactPage />} />
            {/* Define a route for the AboutPage component */}
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          {/* Include the ScrollBackToTop component to handle scrolling behavior */}
          <ScrollBackToTop />
        </div>
      </div>
    </Router>
  );
};

export default App;

/*
import React, { useState, useEffect } from 'react';
import { fetchRecipes } from './localdb';
import { Recipe } from './model/Recipes';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import './css/App.css';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const fetchedRecipes = await fetchRecipes();
        setRecipes(fetchedRecipes);
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    };
    getRecipes();
  }, []);

  const addRecipe = (recipe: Partial<Recipe>) => {
    const newRecipe: Recipe = {
      id: recipes.length + 1,
      title: recipe.title || '',
      ingredients: recipe.ingredients || [],
      instructions: recipe.instructions || '',
      imageUrl: recipe.imageUrl || '',
      servingSize: recipe.servingSize || 0,
      prepTime: recipe.prepTime || '',
      caloriesPerServing: recipe.caloriesPerServing || 0,
    };
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="container mt-4">
        <h1 className="text-center">My Recipe App</h1>
        <div className="row">
          <div className="col-12">
            <RecipeForm onAddRecipe={addRecipe} />
          </div>
          <div className="col-12 mt-4">
            <RecipeList recipes={recipes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

----------------------------------------------------------------------------------------------------------------------------

Routing Setup for App Component:

Moved Components: The main components (RecipeList, RecipeForm, RecipeUpdateModal) were moved from App.tsx to HomePage.tsx.
Added Routes: Set up routing using react-router-dom with Routes and Route components.
Designated HomePage: The HomePage component is designated as the homepage (path="/").
















*/