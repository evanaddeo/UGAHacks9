const React = require('react');
const { createContext, useState } = require('react');

// Create a context
const RecipeContext = createContext();

// Create a provider component
const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);

    // Function to add a recipe
    const addRecipe = (newRecipe) => {
        setRecipes([...recipes, newRecipe]);
    };

    return (
        React.createElement(RecipeContext.Provider, { value: { recipes, addRecipe } },
            children
        )
    );
};

module.exports = {
    RecipeContext,
    RecipeProvider
};
