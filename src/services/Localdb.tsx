import { Recipe } from '../model/Recipe';

// Function to fetch recipes from the backend
export async function fetchRecipes(): Promise<Recipe[]> {
    const response = await fetch('http://localhost:3000/recipes');
    if (!response.ok) {
        throw new Error('Failed to fetch recipes');
    }
    const recipes: Recipe[] = await response.json();
    return recipes;
}