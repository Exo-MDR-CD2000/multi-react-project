import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchRecipes, addRecipe as addRecipeToAPI, updateRecipe as updateRecipeToAPI, deleteRecipe as deleteRecipeFromAPI } from '../services/recipeService';
import { Recipe } from '../model/recipes';
import RecipeList from '../components/RecipeList';
import RecipeForm from '../components/RecipeForm';
import RecipeUpdateModal from '../components/RecipeUpdateModal';


/**
 * The HomePage component that displays the main content of the application.
 * All of the relevant components are rendered here, including RecipeList, RecipeForm, and RecipeUpdateModal.
 * THey were moved from App.tsx to this component (App.tsx now only contains routing logic).
 * 
 * @returns {JSX.Element} The rendered HomePage component.
 */
const HomePage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const location = useLocation();

  /**
   * Fetch recipes from the API when the component mounts.
   * We use the useEffect hook to fetch the recipes when the component mounts.
   * It's an empty dependency array, so it only runs once when the component mounts (uses empty [] as the second argument to useEffect).
   * useEffects are perfect for fetching data from an API, setting up subscriptions, or manually changing the DOM in React components.
   */
  useEffect(() => {
    console.log('UseEffect called in HomePage');
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
   * we have to lift the state up to the parent component (HomePage) to update the list of recipes.
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
   * Deletes a recipe from the state and API.
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
   * Handles the close event for the update modal.
   */
  const handleCloseModal = () => {
    setShowUpdateModal(false);
    setSelectedRecipe(null);
  };

  return (
    <div>
      {/* Display a message if the user is on the Home Page (testing purposes) */}
      {location.pathname === '/' && <div>You are on the Home Page</div>}
      <div className="row">
        <div className="col-12">
          {/* Render the RecipeForm component to add a new recipe */}
          <RecipeForm onAddRecipe={addRecipe} />
        </div>
        <div className="col-12 mt-4">
          <hr />
          {/* Render the RecipeList component to display the list of recipes */}
          <RecipeList
            recipes={recipes}
            onUpdateClick={handleUpdateClick}
            onDeleteClick={deleteRecipe}
          />
        </div>
      </div>
      {/* Render the RecipeUpdateModal component to update a recipe */}
      <RecipeUpdateModal
        show={showUpdateModal}
        recipe={selectedRecipe}
        onClose={handleCloseModal}
        onUpdate={updateRecipe}
      />
    </div>
  );
};

export default HomePage;