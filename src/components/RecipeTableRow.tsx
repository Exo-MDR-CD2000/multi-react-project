import React from 'react';
import { Recipe } from '../model/recipes';

interface RecipeTableRowProps {
    recipe: Recipe;
    onUpdateClick: (recipe: Recipe) => void;
    onDeleteClick: (id: string) => void;
    onImageClick: (imageUrl: string, recipeTitle: string) => void;
}

const RecipeTableRow: React.FC<RecipeTableRowProps> = ({ recipe, onUpdateClick, onDeleteClick, onImageClick }) => {
    return (
        <tr>
            <td>{recipe.title}</td>
            <td>{recipe.ingredients.join(', ')}</td>
            <td>{recipe.instructions}</td>
            <td>
            <img
            src={recipe.imageUrl}
            alt={recipe.title}
            style={{ width: '50px', cursor: 'pointer' }}
            onClick={() => onImageClick(recipe.imageUrl, recipe.title)}
            />
            </td>
            <td>{recipe.servingSize}</td>
            <td>{recipe.prepTime}</td>
            <td>{recipe.caloriesPerServing}</td>
            <td>
                <div className="d-flex flex-column">
                <button className="btn btn-warning mb-2" onClick={() => onUpdateClick(recipe)}>
                    <i className="bi bi-pencil-square"></i>
                </button>
                <button className="btn btn-danger" onClick={() => onDeleteClick(recipe.id)}>
                    <i className="bi bi-trash"></i>
                </button>
                </div>
            </td>
        </tr>
    );
};

export default RecipeTableRow;