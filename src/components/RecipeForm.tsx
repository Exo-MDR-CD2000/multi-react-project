import React, { useState } from 'react';

interface RecipeFormProps {
  onAddRecipe: (recipe: {
    title: string;
    ingredients: string[];
    instructions: string;
    imageUrl: string;
    servingSize: number;
    prepTime: string;
    caloriesPerServing: number;
  }) => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredientInput, setIngredientInput] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [servingSize, setServingSize] = useState(1);
  const [prepTime, setPrepTime] = useState('');
  const [caloriesPerServing, setCaloriesPerServing] = useState(0);

  const handleAddIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (ingredientInput.trim() !== '') {
      setIngredients([...ingredients, ingredientInput]);
      setIngredientInput('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() && ingredients.length > 0 && instructions.trim() && imageUrl.trim() && prepTime.trim() && servingSize > 0 && caloriesPerServing > 0) {
      onAddRecipe({ title, ingredients, instructions, imageUrl, servingSize, prepTime, caloriesPerServing });
      setTitle('');
      setIngredients([]);
      setInstructions('');
      setImageUrl('');
      setServingSize(1);
      setPrepTime('');
      setCaloriesPerServing(0);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
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
          <div className="col-md-6">
            <label htmlFor="imageUrl" className="form-label">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              className="form-control"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
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
          <div className="col-md-6">
            <label htmlFor="prepTime" className="form-label">Preparation Time</label>
            <input
              type="text"
              id="prepTime"
              className="form-control"
              value={prepTime}
              onChange={(e) => setPrepTime(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
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
          <div className="col-md-6">
            <label htmlFor="instructions" className="form-label">Instructions</label>
            <textarea
              id="instructions"
              className="form-control"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
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