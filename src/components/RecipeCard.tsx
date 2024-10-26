import React, { useState, useEffect } from 'react';
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
  // Initialize the collapsed state from localStorage
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const savedState = localStorage.getItem(`collapsed-${String(recipe.id)}`);
    return savedState ? JSON.parse(savedState) : false;
  });

  // Check if the instructions contain HTML tags
  const isHtml = /<\/?[a-z][\s\S]*>/i.test(recipe.instructions);

  // Effect to save the collapsed state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`collapsed-${String(recipe.id)}`, JSON.stringify(isCollapsed));
  }, [isCollapsed, recipe.id]);

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

// ---------------------------------------------------------

// revised code for using local storage to manage the collapsed state of the recipe card

// /**
//  * RecipeCard component
//  * This component renders a card displaying the details of a recipe.
//  * The card can be collapsed to show only the image and title.
//  * 
//  * @param {RecipeCardProps} props - The props for the RecipeCard component.
//  * @returns {JSX.Element} The rendered component.
//  */
// const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onUpdateClick, onDeleteClick }) => {
//   // Initialize the collapsed state from localStorage
//   const [isCollapsed, setIsCollapsed] = useState(() => {
//     const savedState = localStorage.getItem(`collapsed-${String(recipe.id)}`);
//     return savedState ? JSON.parse(savedState) : false;
//   });

//   // Check if the instructions contain HTML tags
//   const isHtml = /<\/?[a-z][\s\S]*>/i.test(recipe.instructions);

//   // Effect to save the collapsed state to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem(`collapsed-${String(recipe.id)}`, JSON.stringify(isCollapsed));
//   }, [isCollapsed, recipe.id]);

// ---------------------------------------------------------

// Code that does not use local storage to manage the collapsed state of the recipe card

// /**
//  * RecipeCard component
//  * This component renders a card displaying the details of a recipe.
//  * The card can be collapsed to show only the image and title.
//  * 
//  * @param {RecipeCardProps} props - The props for the RecipeCard component.
//  * @returns {JSX.Element} The rendered component.
//  */
// const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onUpdateClick, onDeleteClick }) => {

//   // State to track if the card is collapsed
//   const [isCollapsed, setIsCollapsed] = useState(false);
  
//   // Check if the instructions contain HTML tags
//   const isHtml = /<\/?[a-z][\s\S]*>/i.test(recipe.instructions);