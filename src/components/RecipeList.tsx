import React from 'react';
import RecipeCard from './RecipeCard';

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
  imageUrl: string;
  servingSize: number;
  prepTime: string;
  caloriesPerServing: number;
}

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div className="container mt-4">
      <h2>Recipe List</h2>
      <div className="row">
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