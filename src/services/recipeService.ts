// make a fetch request to the local db for all the dataimport { Recipe } from './Recipes';
import { Recipe } from '../model/recipes.ts';
import config from '../config.ts';

// const BASE_API_URL = `https://${import.meta.env.VITE_API_KEY}.mockapi.io/recipes/v1/`;
const BASE_API_URL = config.MOCKAPI_BASE_URL;
// console.log('BASE_API_URL:', BASE_API_URL);

/**TODO - remember to document how to make env variables work within a react project using vite
 * create a separate env file for the api key
 * use "VITE_" as a prefix for the env variable
 * Then import the env variable in the file you want to use it in
 * import.meta.env.VITE_API_KEY such as the one above
 */ 

export const fetchRecipes = async (): Promise<Recipe[]> => {
    console.log('fetchRecipes called');
    try {
        const response = await fetch(`${BASE_API_URL}recipes`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: Recipe[] = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch recipes:', error);
        throw error;
    }
};

export const addRecipe = async (recipe: Partial<Recipe>): Promise<Recipe> => {
    try {
        const response = await fetch(`${BASE_API_URL}recipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: Recipe = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to add recipe:', error);
        throw error;
    }
};

export const deleteRecipe = async (id: string): Promise<void> => {
    try {
        const response = await fetch(`${BASE_API_URL}recipes/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Failed to delete recipe:', error);
        throw error;
    }
};

export const updateRecipe = async (recipe: Recipe): Promise<Recipe> => {
    try {
        const response = await fetch(`${BASE_API_URL}recipes/${recipe.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: Recipe = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to update recipe:', error);
        throw error;
    }
};