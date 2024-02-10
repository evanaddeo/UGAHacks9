// server.js

const http = require('http');
const app = require('./index');

// Create a server object
// Create an Express server
const server = express();

// Use your app logic (index.js) as middleware
server.use(app);

// Define the port number
const port = 3000;



// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
