import React, { useState, useEffect } from 'react';
import { fetchRecipes, addRecipe as addRecipeToAPI, updateRecipe as updateRecipeToAPI, deleteRecipe as deleteRecipeFromAPI } from './services/recipeService.ts';
import { Recipe } from './model/Recipes.ts';
import RecipeList from './components/RecipeList.tsx';
import RecipeForm from './components/RecipeForm.tsx';

import RecipeUpdateModal from './components/recipeUpdateModal.tsx';

import LocalRecipeSearch from './components/LocalRecipeSearch.tsx';

import './css/App.css';

/**
 * The main App component.
 * This component manages the state and methods for fetching, adding, updating, and deleting recipes.
 * @returns {JSX.Element} The rendered component.
 */

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Fetch recipes from the API when the component mounts.
   * We use the useEffect hook to fetch the recipes when the component mounts.
   * It's an empty dependency array, so it only runs once when the component mounts (uses empty [] as the second argument to useEffect).
   * useEffects are perfect for fetching data from an API, setting up subscriptions, or manually changing the DOM in React components.
   */
  useEffect(() => {
    console.log('useEffect called');
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

  /**
   * Adds a new recipe to the list of recipes.
   * @param {Partial<Recipe>} recipe - the recipe to add
   */
  const addRecipe = async (recipe: Partial<Recipe>) => {
    try {
      const newRecipe = await addRecipeToAPI(recipe);
      setRecipes([...recipes, newRecipe]);
    } catch (error) {
      console.error('Failed to add recipe:', error);
    }
  };

  /**
   * Updates an existing recipe.
   * This function is passed to the RecipeUpdateModal component.
   * we have to do prop drilling to pass the updateRecipe function to the RecipeUpdateModal component
   * @param {Recipe} updatedRecipe - The recipe to update.
   */
  const updateRecipe = async (updatedRecipe: Recipe) => {
    try {
      const newRecipe = await updateRecipeToAPI(updatedRecipe);
      setRecipes(recipes.map(recipe => recipe.id === newRecipe.id ? newRecipe : recipe));
    } catch (error) {
      console.error('Failed to update recipe:', error);
    }
  };

  /**
   * Deletes a recipe.
   * 
   * @param {string} id - The ID of the recipe to delete.
   */
  const deleteRecipe = async (id: string) => {
    try {
      await deleteRecipeFromAPI(id);
      setRecipes(recipes.filter(recipe => recipe.id !== id));
    } catch (error) {
      console.error('Failed to delete recipe:', error);
    }
  };

  /**
   * Handles the click event to update a recipe.
   * 
   * @param {Recipe} recipe - The recipe to update.
   */
  const handleUpdateClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setShowUpdateModal(true);
  };

  /**
   * Handles the event to close the update modal.
   */
  const handleCloseModal = () => {
    setShowUpdateModal(false);
    setSelectedRecipe(null);
  };

  /**
   * Handles the search term change event.
   * Updates the search term state.
   * 
   * @param {string} term - The current search term.
   */
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  /**
   * Filters the recipes based on the search term.
   * 
   * @returns {Recipe[]} The filtered list of recipes.
   */
  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="d-flex justify-content-center">
      <div className="container mt-4">
        <h1 className="text-center">My Recipe App</h1>
        <div className="row">
          <div className="col-12">
            <RecipeForm onAddRecipe={addRecipe} />
          </div>
          <div className="col-6 mt-4">
            <LocalRecipeSearch onSearch={handleSearch} />
          </div>
          <div className="col-12 mt-4">
            <RecipeList
              // recipes={recipes}
              recipes={filteredRecipes}
              onUpdateClick={handleUpdateClick}
              onDeleteClick={deleteRecipe}
            />
          </div>
        </div>
        <RecipeUpdateModal
          show={showUpdateModal}
          recipe={selectedRecipe}
          onClose={handleCloseModal}
          onUpdate={updateRecipe}
        />
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