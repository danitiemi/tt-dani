const express = require('express');
const upload = require('./upload');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS setup
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// POST endpoint
app.post('/upload', upload);

app.get('/', (req, res) =>
  res.send(`Node and express server is running on port ${PORT}`)
);

// start server
app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
})
