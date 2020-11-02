const app = require('express')();

app.get('/', (_, response) => {
  response.json({ message: 'Docker is easy 🐳' })
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));