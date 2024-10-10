import React, { useState } from 'react';

interface RecipeFormProps {
  onAddRecipe: (recipe: { title: string; ingredients: string[] }) => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredientInput, setIngredientInput] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleAddIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (ingredientInput.trim() !== '') {
      setIngredients([...ingredients, ingredientInput]);
      setIngredientInput('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() && ingredients.length > 0) {
      onAddRecipe({ title, ingredients });
      setTitle('');
      setIngredients([]);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="recipeTitle" className="form-label">Recipe Title</label>
          <input
            type="text"
            id="recipeTitle"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ingredientInput" className="form-label">Add Ingredient</label>
          <div className="input-group">
            <input
              type="text"
              id="ingredientInput"
              className="form-control"
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleAddIngredient}
            >
              Add
            </button>
          </div>
        </div>
        <ul className="list-group mb-3">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="list-group-item">{ingredient}</li>
          ))}
        </ul>
        <button type="submit" className="btn btn-primary">Submit Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;