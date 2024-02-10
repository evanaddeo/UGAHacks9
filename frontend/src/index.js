const React = require('react');
const ReactDOM = require('react-dom');
const App = require('.');
const { AppProvider } = require('./AppContext');

ReactDOM.render(
    React.createElement(
        React.StrictMode,
        null,
        React.createElement(
            AppProvider,
            null,
            React.createElement(App, null)
        )
    ),
    document.getElementById('root')
);
