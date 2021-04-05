const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

const stateController = require('./State');

app.use(cors());

app.get('/', (req, res) => res.send('Hello world'));
app.get('/states', stateController.getStates);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
