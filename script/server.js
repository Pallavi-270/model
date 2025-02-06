// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json'); // <== Will be created later
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3200; // <== You can change the port

// server.use(middlewares);
// server.use(router);
// server.listen(port);
const express = require('express');
const app = express();

app.use(express.static('public')); // Serve static files from 'public' folder

app.get('/data', (req, res) => {
    res.json({ "message": "Hello from JSON!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});