import React from 'react';
import RecipeCard from './RecipeCard';
import { Recipe } from '../model/Recipes';

/**
 * Props for the RecipeList component.
 * @typedef {Object} RecipeListProps
 * @property {Recipe[]} recipes - The array of recipes to display.
 * @property {Function} onUpdateClick - Function to handle the update click event.
 * @property {Function} onDeleteClick - Function to handle the delete click event.
 */
interface RecipeListProps {
  recipes: Recipe[];
  onUpdateClick: (recipe: Recipe) => void;
  onDeleteClick: (id: string) => void;
}

/**
 * Define the prop types for the RecipeList component.
 * The RecipeList component expects a single prop:
 * - recipes: an array of Recipe objects
 */
interface RecipeListProps {
  recipes: Recipe[];
}

/**
 * RecipeList component
 * This component receives an array of recipes as a prop and renders a list of RecipeCard components.
 * we have to pass down the onUpdateClick and onDeleteClick functions to the RecipeCard component
 * 
 * @param {RecipeListProps} props - The props for the RecipeList component.
 * @returns {JSX.Element} The rendered component.
 */
const RecipeList: React.FC<RecipeListProps> = ({ recipes, onUpdateClick, onDeleteClick }) => {
  return (
    <div className="container mt-4">
      <h2>Recipe List</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onUpdateClick={onUpdateClick}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;