import React, { useState } from 'react';
import { Recipe } from '../model/recipes.ts';


/**
 * Props for the RecipeCard component.
 * @typedef {Object} RecipeCardProps
 * @property {Recipe} recipe - The recipe to display.
 * @property {Function} onUpdateClick - Function to handle the update click event.
 * @property {Function} onDeleteClick - Function to handle the delete click event.
 */
interface RecipeCardProps {
  recipe: Recipe;
  onUpdateClick: (recipe: Recipe) => void;
  onDeleteClick: (id: string) => void;
}

/**
 * RecipeCard component
 * This component renders a card displaying the details of a recipe.
 * The card can be collapsed to show only the image and title.
 * 
 * @param {RecipeCardProps} props - The props for the RecipeCard component.
 * @returns {JSX.Element} The rendered component.
 */
const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onUpdateClick, onDeleteClick }) => {

  // State to track if the card is collapsed
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Check if the instructions contain HTML tags
  const isHtml = /<\/?[a-z][\s\S]*>/i.test(recipe.instructions);

  /**
   * Toggles the collapsed state of the card.
   */
  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="col-md-6 col-lg-4 mb-3">
       {/* Wrapper to apply hover effect */}
      <div className={`card-wrapper ${isCollapsed ? 'collapsed-card' : ''}`}>
        <div className="card">
           {/* Image with click handler to toggle collapse */}
          <img
            src={recipe.imageUrl}
            className="card-img-top"
            alt={recipe.title}
            onClick={handleToggleCollapse}
            style={{ cursor: 'pointer' }}
          />
          {/* Card header with click handler to toggle collapse */}
          <div className="card-header d-flex justify-content-between align-items-center" onClick={handleToggleCollapse} style={{ cursor: 'pointer' }}>
            <h5 className="card-title mb-0">{recipe.title}</h5>
            <button
              className="btn btn-link text-decoration-none"
              onClick={handleToggleCollapse}
            >
              {isCollapsed ? 'Show' : 'Hide'}
            </button>
          </div>

          {/* Collapsible content */}
          <div className={`collapse ${isCollapsed ? '' : 'show'}`}>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Ingredients</h6>
              <ul className="list-group list-group-flush">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="list-group-item">{ingredient}</li>
                ))}
              </ul>
              <h6 className="card-subtitle mt-3 mb-2 text-muted">Instructions</h6>
              <div className="card">
                {isHtml ? (
                  <div className="list-group list-group-flush" dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
                ) : (
                  <ul className="list-group list-group-flush">
                    {recipe.instructions.split('\n').filter(step => step.trim() !== '').map((step, index) => (
                      <li key={index} className="list-group-item">{step}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <p className="card-text"><strong>Serving Size:</strong> {recipe.servingSize}</p>
                </div>
                <div className="col-6">
                  <p className="card-text"><strong>Prep Time:</strong> {recipe.prepTime}</p>
                </div>
                <div className="col-6 mt-2">
                  <p className="card-text"><strong>Calories/Serving:</strong> {recipe.caloriesPerServing}</p>
                </div>
              </div>
              <div className="d-flex mt-3">
                <button className="btn btn-warning flex-grow-1 me-1" onClick={() => onUpdateClick(recipe)}>Update</button>
                <button className="btn btn-danger flex-grow-1 me-1" onClick={() => onDeleteClick(recipe.id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;


/**
 * TODO: add crud functionality to the RecipeCard component. think about react concepts like lifting up state if needed
 * use react bootstrap to display a modal for editing a recipe
 * stick with json-server for now and look into mockAPI later for an online db
 * 
 * If i ever use the spoonacular api, come up with an easier method of parsing the data to a format that can be used in the app


*/




/** 
 
import React from 'react';
import DOMPurify from 'dompurify';
import { Recipe } from '../model/Recipes';

interface RecipeCardProps {
  recipe: Recipe;
  onUpdateClick: (recipe: Recipe) => void;
  onDeleteClick: (id: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onUpdateClick, onDeleteClick }) => {
  const isHtml = /<\/?[a-z][\s\S]*>/i.test(recipe.instructions);
  const sanitizedInstructions = DOMPurify.sanitize(recipe.instructions);

  return (
    <div className="col-md-6 col-lg-4 mb-3">
      <div className="card h-100">
        <img src={recipe.imageUrl} className="card-img-top" alt={recipe.title} />
        <div className="card-header">
          <h5 className="card-title">{recipe.title}</h5>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">Ingredients</h6>
          <ul className="list-group list-group-flush">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="list-group-item">{ingredient}</li>
            ))}
          </ul>
          <h6 className="card-subtitle mt-3 mb-2 text-muted">Instructions</h6>
          <div className="card">
            {isHtml ? (
              <ul className="list-group list-group-flush">
                {sanitizedInstructions.split('\n').filter(step => step.trim() !== '').map((step, index) => (
                  <li key={index} className="list-group-item">{step}</li>
                ))}
              </ul>
            ) : (
              <ul className="list-group list-group-flush">
                {recipe.instructions.split('\n').filter(step => step.trim() !== '').map((step, index) => (
                  <li key={index} className="list-group-item">{step}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <p className="card-text"><strong>Serving Size:</strong> {recipe.servingSize}</p>
            </div>
            <div className="col-6">
              <p className="card-text"><strong>Prep Time:</strong> {recipe.prepTime}</p>
            </div>
            <div className="col-6">
              <p className="card-text"><strong>Calories/Serving:</strong> {recipe.caloriesPerServing}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-warning" onClick={() => onUpdateClick(recipe)}>Update</button>
            <button className="btn btn-danger" onClick={() => onDeleteClick(recipe.id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

export default RecipeCard;

*/