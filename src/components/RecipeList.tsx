import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import LocalRecipeSearch from './LocalRecipeSearch';
import { Recipe } from '../model/recipes.ts';

interface RecipeListProps {
  recipes: Recipe[];
  onUpdateClick: (recipe: Recipe) => void;
  onDeleteClick: (id: string) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, onUpdateClick, onDeleteClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container mt-4">
      <h2>Recipe List</h2>
      <div className="col mt-4 mb-4">
      <LocalRecipeSearch onSearch={handleSearch} />
      </div>
      <div className="row">
        {filteredRecipes.map((recipe) => (
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