import { useState } from 'react'
import React from 'react';
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import { initialRecipes, Recipe } from './data/recipes'; // Import the Recipe type
import RecipeList from './components/recipeList.tsx';
import RecipeForm from './components/recipeForm';


import './css/App.css'


const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes); // Use Recipe type here

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
    <div>
      <h1 className="text-center">My Recipe App</h1>
      <RecipeForm onAddRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;