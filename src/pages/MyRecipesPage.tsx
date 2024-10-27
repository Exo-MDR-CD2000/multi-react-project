import React, { useState, useEffect } from 'react';
import { fetchRecipes, updateRecipe as updateRecipeToAPI, deleteRecipe as deleteRecipeFromAPI } from '../services/recipeService';
import { Recipe } from '../model/recipes';
import RecipeTable from '../components/RecipeTable';
import RecipeUpdateModal from '../components/RecipeUpdateModal';
import LocalRecipeSearch from '../components/LocalRecipeSearch';

const MyRecipesPage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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

  const updateRecipe = async (updatedRecipe: Recipe) => {
    try {
      const newRecipe = await updateRecipeToAPI(updatedRecipe);
      setRecipes(recipes.map(recipe => recipe.id === newRecipe.id ? newRecipe : recipe));
    } catch (error) {
      console.error('Failed to update recipe:', error);
    }
  };

  const deleteRecipe = async (id: string) => {
    try {
      await deleteRecipeFromAPI(id);
      setRecipes(recipes.filter(recipe => recipe.id !== id));
    } catch (error) {
      console.error('Failed to delete recipe:', error);
    }
  };

  const handleUpdateClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setShowUpdateModal(true);
  };

  const handleCloseModal = () => {
    setShowUpdateModal(false);
    setSelectedRecipe(null);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h2>My Recipes</h2>
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