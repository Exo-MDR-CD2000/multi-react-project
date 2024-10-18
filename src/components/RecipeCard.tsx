import React from 'react';

interface RecipeCardProps {
  title: string;
  ingredients: string[];
  instructions: string;
  imageUrl: string;
  servingSize: number;
  prepTime: string;
  caloriesPerServing: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, ingredients, instructions, imageUrl, servingSize, prepTime, caloriesPerServing }) => {
  const isHtml = /<\/?[a-z][\s\S]*>/i.test(instructions);

  return (
    <div className="col-md-6 col-lg-4 mb-3">
      <div className="card h-100">
        <img src={imageUrl} className="card-img-top" alt={title} />
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
          <h6 className="card-subtitle mt-3 mb-2 text-muted">Instructions</h6>
          <div className="card">
            {isHtml ? (
              <div className="list-group list-group-flush" dangerouslySetInnerHTML={{ __html: instructions }} />
            ) : (
              <ul className="list-group list-group-flush">
                {instructions.split('\n').filter(step => step.trim() !== '').map((step, index) => (
                  <li key={index} className="list-group-item">{step}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <p className="card-text"><strong>Serving Size:</strong> {servingSize}</p>
            </div>
            <div className="col-6">
              <p className="card-text"><strong>Prep Time:</strong> {prepTime}</p>
            </div>
            <div className="col-6">
              <p className="card-text"><strong>Calories/Serving:</strong> {caloriesPerServing}</p>
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