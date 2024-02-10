const React = require('react');
const { useContext } = require('react');
const { RecipeContext } = require('./RecipeContext');

const Homepage = () => {
    const { recipes, addRecipe } = useContext(RecipeContext);

    // Function to add a new recipe
    const handleAddRecipe = () => {
        const newRecipe = { name: 'New Recipe', ingredients: ['Ingredient 1', 'Ingredient 2'] };
        addRecipe(newRecipe);
    };

    return (
        React.createElement('div', null,
            React.createElement('h1', null, 'Welcome to Recipe Promoter'),
            React.createElement('button', { onClick: handleAddRecipe }, 'Add Recipe'),
            React.createElement('div', null,
                React.createElement('h2', null, 'Recipes'),
                React.createElement('ul', null,
                    recipes.map((recipe, index) => (
                        React.createElement('li', { key: index }, recipe.name)
                    ))
                )
            )
        )
    );
};

module.exports = Homepage;
