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


// wip POST request to add a new recipe to the local db
export const addRecipe = async (recipe: Partial<Recipe>): Promise<Recipe> => {
    try {
        const response = await fetch(API_URL, {
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


// wip DELETE request to delete a recipe from the local db
export const deleteRecipe = async (id: number): Promise<void> => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
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


// wip PUT request to update a recipe in the local db
export const updateRecipe = async (recipe: Recipe): Promise<Recipe> => {
    try {
        const response = await fetch(`${API_URL}/${recipe.id}`, {
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