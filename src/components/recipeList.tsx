import React from 'react';
import RecipeCard from './RecipeCard';

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
}

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div className="container mt-4">
      <h2>Recipe List</h2>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} title={recipe.title} ingredients={recipe.ingredients} />
      ))}
    </div>
  );
};

export default RecipeList;
