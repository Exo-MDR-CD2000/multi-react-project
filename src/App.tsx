import React, { useState, useEffect } from 'react';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { fetchRecipes } from './services/Localdb.tsx';
import { Recipe } from './model/Recipes.ts'; // Import the Recipe type
import RecipeList from './components/RecipeList.tsx';
import RecipeForm from './components/RecipeForm.tsx';

// import BootstrapNavbar from './components/Navbar.tsx'; // Import the BootstrapNavbar component

// import AboutPage from './pages/AboutPage.tsx';
// import ContactPage from './pages/ContactPage.tsx';
// import HomePage from './pages/HomePage.tsx';


import './css/App.css'


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



















*/