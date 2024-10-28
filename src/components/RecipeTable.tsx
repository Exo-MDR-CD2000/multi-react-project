import React, { useState } from 'react';
import { Recipe } from '../model/recipes';
import RecipeTableRow from './RecipeTableRow';
import ImageModal from './TableImageModal';

/**
 * Props for the RecipeTable component.
 * @typedef {Object} RecipeTableProps
 * @property {Recipe[]} recipes - The list of recipes to display.
 * @property {Function} onUpdateClick - Function to handle updating a recipe.
 * @property {Function} onDeleteClick - Function to handle deleting a recipe.
 * @property {Function} onImageClick - Function to handle displaying a recipe image.
 */
interface RecipeTableProps {
  recipes: Recipe[];
  onUpdateClick: (recipe: Recipe) => void;
  onDeleteClick: (id: string) => void;
}

/**
 * RecipeTable component to display a list of recipes in a table format.
 *
 * @param {RecipeTableProps} props - The properties for the RecipeTable component.
 * @returns {JSX.Element} The rendered RecipeTable component.
 */
const RecipeTable: React.FC<RecipeTableProps> = ({ recipes, onUpdateClick, onDeleteClick }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedRecipeTitle, setSelectedRecipeTitle] = useState('');

  /**
   * Handles the click event on a recipe image to display it in a modal.
   *
   * @param {string} imageUrl - The URL of the recipe image.
   * @param {string} recipeTitle - The title of the recipe.
   */
    const handleImageClick = (imageUrl: string, recipeTitle: string) => {
        setSelectedImage(imageUrl);
        setSelectedRecipeTitle(recipeTitle);
        setShowModal(true);
    };

    /**
     * Closes the image modal.
     */
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImage('');
        setSelectedRecipeTitle('');
    };

  return (
    <div className="table-responsive">
    <table className="table table-striped table-bordered table-hover table-sm">
      <thead>
        <tr>
          <th>Title</th>
          <th>Ingredients</th>
          <th>Instructions</th>
          <th>Image</th>
          <th>Serving Size</th>
          <th>Prep Time</th>
          <th>Calories/Serving</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map(recipe => (
          <RecipeTableRow
            key={recipe.id}
            recipe={recipe}
            onUpdateClick={onUpdateClick}
            onDeleteClick={onDeleteClick}
            onImageClick={handleImageClick}
          />
        ))}
      </tbody>
    </table>
    <ImageModal show={showModal} imageUrl={selectedImage} recipeTitle={selectedRecipeTitle} onClose={handleCloseModal} />
    </div>
  );
};

export default RecipeTable;