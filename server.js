const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve the static HTML file
app.use(express.static(path.join(__dirname)));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
