import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { fetchRecipes, addRecipe as addRecipeToAPI, updateRecipe as updateRecipeToAPI, deleteRecipe as deleteRecipeFromAPI } from '../services/recipeService';
import { Recipe } from '../model/recipes';
import RecipeList from '../components/RecipeList';
import RecipeForm from '../components/RecipeForm';
import RecipeUpdateModal from '../components/RecipeUpdateModal';
import ToastNotification from '../components/ToastNotifcation';
import DocumentTitle from '../components/DocumentTitle';


/**
 * The HomePage component that displays the main content of the application.
 * All of the relevant components are rendered here, including RecipeList, RecipeForm, and RecipeUpdateModal.
 * They were moved from App.tsx to this component (App.tsx now only contains routing logic).
 * 
 * @returns {JSX.Element} The rendered HomePage component.
 */
const HomePage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastVariant, setToastVariant] = useState<'success' | 'warning' | 'danger' | 'info'>('info');
  const [loading, setLoading] = useState(true); // adds a loading state
  // const location = useLocation();

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
        setLoading(true); // set loading state to true
        const fetchedRecipes = await fetchRecipes();
        setRecipes(fetchedRecipes);
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
        setToastMessage('Oops! Failed to fetch recipes');
        setToastVariant('danger');
        setShowToast(true);
      } finally {
        setLoading(false); // set loading state to false
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
      setToastMessage('Recipe added successfully');
      setToastVariant('success');
      setShowToast(true);
    } catch (error) {
      console.error('Failed to add recipe:', error);
      setToastMessage('Oops! Failed to add recipe');
      setToastVariant('danger');
      setShowToast(true);
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
      setToastMessage('Recipe updated successfully');
      setToastVariant('warning');
      setShowToast(true);
    } catch (error) {
      console.error('Failed to update recipe:', error);
      setToastMessage('Oops! Failed to update recipe');
      setToastVariant('danger');
      setShowToast(true);
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
      setToastMessage('Recipe deleted successfully');
      setToastVariant('danger');
      setShowToast(true);
    } catch (error) {
      console.error('Failed to delete recipe:', error);
      setToastMessage('Oops! Failed to delete recipe');
      setToastVariant('danger');
      setShowToast(true);
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
    <div className='mb-4'>
      <DocumentTitle title="Home | Recipe Manager" />
      {/* Introduction Card */}
      <div className="row justify-content-center text-center mb-2">
          <div className="col-11">
            <div className="card border-0">
              <div className="card-body">
                <h2 className="card-title">Welcome to Recipe Manager</h2>
                <hr />
                <p className="card-text">
                  Manage your recipes with ease. Create, save, delete, and update your favorite recipes all in one place.
                </p>
                <p className="card-text">
                  Use the form below to add new recipes and see the list of your saved recipes.
                </p>
                <p className='card-text'>
                  Click on a recipe to view more details, and update or delete it as needed.
                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      {/* Display a message if the user is on the Home Page (testing purposes) */}
      {/* {location.pathname === '/' && <div className="location-route-test">You are on the Home Page</div>} */}
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
        {loading ? ( <h3 className="text-center mt-3">Loading...</h3> ) : null}
      </div>
      {/* Render the RecipeUpdateModal component to update a recipe */}
      <RecipeUpdateModal
        show={showUpdateModal}
        recipe={selectedRecipe}
        onClose={handleCloseModal}
        onUpdate={updateRecipe}
      />
      <ToastNotification
        show={showToast}
        message={toastMessage}
        variant={toastVariant}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

export default HomePage;