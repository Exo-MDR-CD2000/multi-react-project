// future prop for defining the recipe

// Recipe type definition
export interface Recipe {
    id: number;
    title: string;
    ingredients: string[];
    instructions: string;
    imageUrl: string;
    servingSize: number;        // New field for serving size
    prepTime: string;           // New field for preparation time
    caloriesPerServing: number; // New field for calories per serving
}

//TODO - Look into changing id from number to string due to how mockAPI handles id's