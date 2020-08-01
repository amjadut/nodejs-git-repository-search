const app = require('./src/index.js');
const port = 3000;

// Server
app.listen(port, () => {
   console.log(`Listening on: http://localhost:${port}`);
});