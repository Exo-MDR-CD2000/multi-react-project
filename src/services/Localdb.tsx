// make a fetch request to the local db for all the dataimport { Recipe } from './Recipes';

import { Recipe } from '../model/Recipes';

const API_URL = 'http://localhost:3000/recipes';

export const fetchRecipes = async (): Promise<Recipe[]> => {
    try {
        const response = await fetch(API_URL);
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