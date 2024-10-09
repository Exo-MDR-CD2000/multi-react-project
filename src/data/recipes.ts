// future prop for defining the recipe

// Recipe type definition
export interface Recipe {
    id: number;
    title: string;
    ingredients: string[];
    instructions: string;
    imageUrl: string;
  }
  
  // Test data
  export const testRecipes: Recipe[] = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      ingredients: ["Spaghetti", "Minced Beef", "Tomato Sauce", "Onion", "Garlic"],
      instructions: "Boil pasta. Cook minced beef with onions, garlic, and tomato sauce. Mix together.",
      imageUrl: "https://example.com/spaghetti.jpg",
    },
    {
      id: 2,
      title: "Chicken Curry",
      ingredients: ["Chicken", "Curry Powder", "Coconut Milk", "Onions", "Garlic"],
      instructions: "Cook chicken. Add curry powder, onions, garlic, and coconut milk. Simmer.",
      imageUrl: "https://example.com/chicken-curry.jpg",
    },
    // Add more recipes as needed
  ];
  