const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hey You Did it!');
});

app.listen(port, () => {
  console.log(`My test app listening on port ${port}`);
});
