/**
 * Instead of using a type, we can use an interface to define the structure of a recipe object.
 */
export interface Recipe {
    id: string;
    title: string;
    ingredients: string[];
    instructions: string;
    imageUrl: string;
    servingSize: number;        // New field for serving size
    prepTime: string;           // New field for preparation time
    caloriesPerServing: number; // New field for calories per serving
}
