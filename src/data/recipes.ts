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

// example data
export const initialRecipes: Recipe[] = [
    {
        id: 1,
        title: "Spaghetti Bolognese",
        ingredients: ["Spaghetti", "Minced Beef", "Tomato Sauce", "Onion", "Garlic"],
        instructions: "Boil pasta. Cook minced beef with onions, garlic, and tomato sauce. Mix together.",
        imageUrl: "https://example.com/spaghetti.jpg", // FIXME: Replace with actual image URL
        servingSize: 4,                 // Example serving size
        prepTime: "30 minutes",         // Example prep time
        caloriesPerServing: 500,        // Example calories per serving
    },
    {
        id: 2,
        title: "Chicken Curry",
        ingredients: ["Chicken", "Curry Powder", "Coconut Milk", "Onions", "Garlic"],
        instructions: "Cook chicken. Add curry powder, onions, garlic, and coconut milk. Simmer.",
        imageUrl: "https://example.com/chicken-curry.jpg", //FIXME: Replace with actual image URL
        servingSize: 4,                 // Example serving size
        prepTime: "45 minutes",         // Example prep time
        caloriesPerServing: 600,        // Example calories per serving
    },
    {
        id: 3,
        title: "Pancakes",
        ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Salt"],
        instructions: "Mix ingredients. Cook on a pan until golden brown.",
        imageUrl: "https://example.com/pancakes.jpg", //FIXME: Replace with actual image URL
        servingSize: 2,                 // Example serving size
        prepTime: "20 minutes",         // Example prep time
        caloriesPerServing: 350,        // Example calories per serving
    },
    // Add more recipes as needed
];
