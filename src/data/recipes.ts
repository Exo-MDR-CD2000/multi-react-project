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
    {
        id: 4,
        title: "Bourbon Street Beignets",
        ingredients: [
            "2 1/4 teaspoons active dry yeast",
            "1 1/2 cups warm water (110°F)",
            "1/2 cup sugar",
            "1 teaspoon salt",
            "2 large eggs",
            "1 cup evaporated milk",
            "7 cups all-purpose flour",
            "1/4 cup shortening",
            "Vegetable oil (for deep frying)",
            "Powdered sugar (for dusting)"
        ],
        instructions: `
            1. In a large bowl, dissolve yeast in warm water. Add sugar, salt, eggs, evaporated milk, and mix thoroughly.
            2. Stir in 4 cups of the flour, beating until smooth. Add the shortening and the remaining flour, mixing until fully incorporated.
            3. Cover and chill dough for at least 4 hours or overnight.
            4. Roll out the dough on a lightly floured surface to 1/8 inch thickness. Cut into 2-inch squares.
            5. Heat oil in a deep fryer to 370°F. Fry beignets for 2-3 minutes or until golden brown, flipping once.
            6. Drain on paper towels and generously dust with powdered sugar.
        `,
        imageUrl: "https://img.spoonacular.com/recipes/635741-556x370.jpg",
        servingSize: 12,                 // Serves 12 people
        prepTime: "4 hours 30 minutes",  // Includes chilling time
        caloriesPerServing: 250          // Approximate calories per beignet
    }
    // Add more recipes as needed
];
