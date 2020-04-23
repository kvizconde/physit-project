const path = require('path');
const express = require('express');
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, 'public');

app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main',
    extname: 'hbs',
  }),
);

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', 'views');

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.listen(port, () => {
  console.log('server is up on port 3000');
});
