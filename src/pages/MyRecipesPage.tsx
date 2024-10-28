import React, { useState, useEffect } from 'react';
import { fetchRecipes, updateRecipe as updateRecipeToAPI, deleteRecipe as deleteRecipeFromAPI } from '../services/recipeService';
import { Recipe } from '../model/recipes';
import RecipeTable from '../components/RecipeTable';
import RecipeUpdateModal from '../components/RecipeUpdateModal';
import LocalRecipeSearch from '../components/LocalRecipeSearch';

/**
 * MyRecipesPage component to display and manage the user's saved recipes.
 * Reuses the RecipeTable, RecipeUpdateModal, and LocalRecipeSearch components, and useEffect hook.
 *
 * @returns {JSX.Element} The rendered MyRecipesPage component.
 */
const MyRecipesPage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  /** 
   * Fetch recipes from the API when the component mounts.
   * We use the useEffect hook to fetch the recipes when the component mounts.
  */
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

  /**
   * Handles updating a recipe.
   *
   * @param {Recipe} updatedRecipe - The updated recipe object.
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
   * Handles deleting a recipe.
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
   * @param {Recipe} recipe - The recipe object to update.
   */
  const handleUpdateClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setShowUpdateModal(true);
  };

  /**
   * Handles closing the update modal.
   */
  const handleCloseModal = () => {
    setShowUpdateModal(false);
    setSelectedRecipe(null);
  };

  /**
   * Handles the search term input.
   *
   * @param {string} term - The search term entered by the user.
   */
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className='container mb-4'>
      <div className="row justify-content-center text-center mb-2">
          <div className="col-11">
            <div className="card border-0">
              <div className="card-body">
                <h2 className="card-title">My Saved Recipes</h2>
                <hr />
                <p className="card-text">
                  Manage your recipes with ease via the table below. 
                </p>
                <p className='card-text'>Update and delete your saved recipes.</p>
                <p className='card-text'>
                  Click on the recipe image for a larger view.
                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      <LocalRecipeSearch onSearch={handleSearch} />
      <br />
      <RecipeTable
        recipes={filteredRecipes}
        onUpdateClick={handleUpdateClick}
        onDeleteClick={deleteRecipe}
      />
      <RecipeUpdateModal
        show={showUpdateModal}
        recipe={selectedRecipe}
        onClose={handleCloseModal}
        onUpdate={updateRecipe}
      />
    </div>
  );
};

export default MyRecipesPage;