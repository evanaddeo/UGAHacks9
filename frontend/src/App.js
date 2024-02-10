const React = require('react');
const { RecipeProvider } = require('./RecipeContext');
const Homepage = require('./Components/Homepage');

const App = () => {
    return (
        React.createElement(RecipeProvider, null,
            React.createElement('div', { className: 'App' },
                React.createElement(Homepage, null)
            )
        )
    );
};

module.exports = App;
