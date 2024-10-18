import React from 'react';
import RecipeCard from './RecipeCard';

// Define the Recipe interface to specify the structure of a recipe object
interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string;
  imageUrl: string;
  servingSize: number;
  prepTime: string;
  caloriesPerServing: number;
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
 * 
 * @param {RecipeListProps} props - The props for the RecipeList component.
 * @returns {JSX.Element} The rendered component.
 */
const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div className="container mt-4">
      <h2>Recipe List</h2>
      <div className="row">
        {/** 
         * Iterate over the recipes array and render a RecipeCard component for each recipe.
         * The recipes prop is being used here to map over the array and pass individual recipe data to RecipeCard.
         */}
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            imageUrl={recipe.imageUrl}
            servingSize={recipe.servingSize}
            prepTime={recipe.prepTime}
            caloriesPerServing={recipe.caloriesPerServing}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;