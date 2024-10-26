import React, { useState } from 'react';
import { Recipe } from '../model/recipes';

/**
 * Props for the RecipeForm component.
 * @typedef {Object} RecipeFormProps
 * @property {Function} onAddRecipe - Function to handle adding a new recipe.
 */
interface RecipeFormProps {
  onAddRecipe: (recipe: Recipe) => void;
}

/**
 * RecipeForm component
 * This component renders a form to add a new recipe.
 * 
 * @param {RecipeFormProps} props - The props for the RecipeForm component.
 * @returns {JSX.Element} The rendered component.
 */
const RecipeForm: React.FC<RecipeFormProps> = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredientInput, setIngredientInput] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [servingSize, setServingSize] = useState(1);
  const [prepTime, setPrepTime] = useState('');
  const [caloriesPerServing, setCaloriesPerServing] = useState(0);

  const BASE_IMAGE_URL = 'https://placehold.co/600x400';

  /**
   * Handles adding an ingredient to the ingredients list.
   * 
   * @param {React.MouseEvent<HTMLButtonElement>} e - The click event.
   */
  const handleAddIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (ingredientInput.trim() !== '') {
      setIngredients([...ingredients, ingredientInput]);
      setIngredientInput('');
    }
  };

  /**
   * Handles removing an ingredient from the ingredients list.
   * 
   * @param {number} index - The index of the ingredient to remove.
   */
  const handleRemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  /**
   * Handles form submission to add a new recipe.
   * 
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalImageUrl = imageUrl.trim() || BASE_IMAGE_URL;

    if (title.trim() && ingredients.length > 0 && instructions.trim() && prepTime.trim() && servingSize > 0 && caloriesPerServing > 0) {
      console.log('Form is valid. Submitting...');
      const newRecipe: Recipe = {
        id: '', // Assuming id will be generated elsewhere
        title,
        ingredients,
        instructions,
        imageUrl: finalImageUrl,
        servingSize,
        prepTime,
        caloriesPerServing,
      };

      onAddRecipe(newRecipe);
      setTitle('');
      setIngredients([]);
      setInstructions('');
      setImageUrl('');
      setServingSize(1);
      setPrepTime('');
      setCaloriesPerServing(0);
    } else {
      console.error('One or more fields are invalid. Please check the form.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="recipeTitle" className="form-label">Recipe Title</label>
            <input
              type="text"
              placeholder="Enter Recipe Title"
              id="recipeTitle"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="imageUrl" className="form-label">Image URL</label>
            <input
              type="text"
              placeholder="Enter Image URL (or leave blank for placeholder)"
              id="imageUrl"
              className="form-control"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="servingSize" className="form-label">Serving Size</label>
            <input
              type="number"
              placeholder="Enter Serving Size"
              id="servingSize"
              className="form-control"
              value={servingSize}
              onChange={(e) => setServingSize(Number(e.target.value))}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="prepTime" className="form-label">Preparation Time</label>
            <input
              type="text"
              placeholder="Enter Preparation Time"
              id="prepTime"
              className="form-control"
              value={prepTime}
              onChange={(e) => setPrepTime(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="caloriesPerServing" className="form-label">Calories Per Serving</label>
            <input
              type="number"
              id="caloriesPerServing"
              className="form-control"
              value={caloriesPerServing}
              onChange={(e) => setCaloriesPerServing(Number(e.target.value))}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="instructions" className="form-label">Instructions</label>
            <textarea
              placeholder="Enter Recipe Instructions (separated by line breaks)"
              id="instructions"
              className="form-control"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="ingredientInput" className="form-label">Add Ingredient</label>
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter Ingredient and press Enter"
                id="ingredientInput"
                className="form-control"
                value={ingredientInput}
                onChange={(e) => setIngredientInput(e.target.value)}
              />
              <button className="btn btn-secondary" onClick={handleAddIngredient}>Add Ingredient</button>
            </div>
          </div>
        </div>
        <ul className="list-group mb-3">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {ingredient}
              <button type="button" className="btn btn-danger btn-sm" onClick={() => handleRemoveIngredient(index)}>
                <i className="bi bi-x"></i>
              </button>
            </li>
          ))}
        </ul>
        <button type="submit" className="btn btn-primary">Submit Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;