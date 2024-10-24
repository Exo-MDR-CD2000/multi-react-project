import React, { useState } from 'react';

// create a component that will handle the search functionality
// this will be allow the user to search for recipes by name
//figure out how to pass the search term to the parent component

//Overall component is an example of lifting state up since the search term is being passed to the parent component (App.tsx)

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
        const value  = event.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search recipes by name..."
            value={searchTerm}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      );
};

export default LocalRecipeSearch;