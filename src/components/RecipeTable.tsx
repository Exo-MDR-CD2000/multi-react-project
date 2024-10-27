import React, { useState } from 'react';
import { Recipe } from '../model/recipes';
import RecipeTableRow from './RecipeTableRow';
import ImageModal from './TableImageModal';

interface RecipeTableProps {
  recipes: Recipe[];
  onUpdateClick: (recipe: Recipe) => void;
  onDeleteClick: (id: string) => void;
}

const RecipeTable: React.FC<RecipeTableProps> = ({ recipes, onUpdateClick, onDeleteClick }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedRecipeTitle, setSelectedRecipeTitle] = useState('');

    const handleImageClick = (imageUrl: string, recipeTitle: string) => {
        setSelectedImage(imageUrl);
        setSelectedRecipeTitle(recipeTitle);
        setShowModal(true);
    };

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