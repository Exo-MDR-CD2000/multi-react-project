import React, { useState, useEffect } from 'react';

// recipe interface is imported because it is used in the RecipeUpdateModalProps interface
import { Recipe } from '../model/recipes.ts';

import Backdrop from './BluryBackdrop.tsx';


// important to note that this component lives separately from all the other components
// It is not nested in any other component and can be lifted up to the App component

/**
 * Props for the RecipeUpdateModal component.
 * @typedef {Object} RecipeUpdateModalProps
 * @property {boolean} show - Whether the modal is visible.
 * @property {Recipe | null} recipe - The recipe to be updated.
 * @property {Function} onClose - Function to close the modal.
 * @property {Function} onUpdate - Function to update the recipe.
 */
interface RecipeUpdateModalProps {
  show: boolean;
  recipe: Recipe | null;
  onClose: () => void;
  onUpdate: (updatedRecipe: Recipe) => void;
}

/**
 * RecipeUpdateModal component.
 * This component renders a modal for updating a recipe.
 * 
 * @param {RecipeUpdateModalProps} props - The props for the RecipeUpdateModal component.
 * @returns {JSX.Element | null} The rendered component.
 */
const RecipeUpdateModal: React.FC<RecipeUpdateModalProps> = ({ show, recipe, onClose, onUpdate }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [servingSize, setServingSize] = useState(1);
  const [prepTime, setPrepTime] = useState('');
  const [caloriesPerServing, setCaloriesPerServing] = useState(0);

  /**
   * Effect hook to update the state when the recipe prop changes.
   */
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setIngredients(recipe.ingredients);
      setInstructions(recipe.instructions);
      setImageUrl(recipe.imageUrl);
      setServingSize(recipe.servingSize);
      setPrepTime(recipe.prepTime);
      setCaloriesPerServing(recipe.caloriesPerServing);
    }
  }, [recipe]);

  /**
   * Handles form submission to update the recipe.
   * 
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (recipe) {
      onUpdate({
        ...recipe,
        title,
        ingredients,
        instructions,
        imageUrl,
        servingSize,
        prepTime,
        caloriesPerServing,
      });
      onClose();
    }
  };

  if (!show || !recipe) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <Backdrop show={show} onClick={onClose} />

      <div className="modal show d-block" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content bg-light">
            <div className="modal-header justify-content-between">
              <h5 className="modal-title">Update Recipe</h5>
              <button type="button" className="btn btn-danger btn-sm" onClick={onClose}>
                <i className="bi bi-x"></i>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="recipeTitle" className="form-label">Recipe Title</label>
                  <input
                    type="text"
                    placeholder="Enter New Recipe Title"
                    id="recipeTitle"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="imageUrl" className="form-label">Image URL</label>
                  <input
                    type="text"
                    placeholder="Enter New Image URL"
                    id="imageUrl"
                    className="form-control"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="servingSize" className="form-label">Serving Size</label>
                  <input
                    type="number"
                    id="servingSize"
                    className="form-control"
                    value={servingSize}
                    onChange={(e) => setServingSize(Number(e.target.value))}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="prepTime" className="form-label">Preparation Time</label>
                  <input
                    type="text"
                    placeholder="Enter New Preparation Time"
                    id="prepTime"
                    className="form-control"
                    value={prepTime}
                    onChange={(e) => setPrepTime(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
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
                <div className="mb-3">
                  <label htmlFor="ingredients" className="form-label">Ingredients</label>
                  <textarea
                    id="ingredients"
                    placeholder="Enter Ingredients (one per line)"
                    className="form-control"
                    value={ingredients.join('\n')}
                    onChange={(e) => setIngredients(e.target.value.split('\n'))}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="instructions" className="form-label">Instructions</label>
                  <textarea
                    id="instructions"
                    placeholder="Enter New Instructions"
                    className="form-control"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Update Recipe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeUpdateModal;