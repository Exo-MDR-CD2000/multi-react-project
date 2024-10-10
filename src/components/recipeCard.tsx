import React from 'react';

interface RecipeCardProps {
  title: string;
  ingredients: string[];
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, ingredients }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">Ingredients</h6>
        <ul className="list-group list-group-flush">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="list-group-item">{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
