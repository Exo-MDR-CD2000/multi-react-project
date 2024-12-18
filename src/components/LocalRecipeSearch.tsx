import React, { useState } from 'react';

// Overall component is an example of lifting state up since the search term is being passed to the parent component (App.tsx)
// Also a demonstration of controlled components/input since the search term is being stored in the state of the LocalRecipeSearch component

/**
 * Callback function for the LocalRecipeSearch component.
 * @param {string} searchTerm - The search term entered by the user.
 */
interface LocalRecipeSearchProps {
  onSearch: (searchTerm: string) => void;
}


/**
 * LocalRecipeSearch component
 * This component renders a search bar that allows users to search for recipes by name.
 * Handles the search term entered by the user and passes it to the parent component.
 * @param {LocalRecipeSearchProps} props - The props for the LocalRecipeSearch component.
 * @returns  {JSX.Element} The rendered component.
 */
const LocalRecipeSearch: React.FC<LocalRecipeSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');


  /**
   * Hnandles the change event for the search input.
   * Updates the search term state and calls the onSearch callback function.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event. 
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // update the state with the new value
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleReset = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className='recipe-search-wrapper'>
    <div className="container search-bar">
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          placeholder="Search recipes by name or reset to view all..."
          value={searchTerm}
          onChange={handleChange}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">Search</button>
        <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
      </form>
    </div>
    </div>
  );
};

export default LocalRecipeSearch;
