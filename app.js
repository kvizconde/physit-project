const path = require('path');
const express = require('express');
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, 'public');

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main',
    extname: 'hbs',
  }),
);

// Setup handlebars engine and views location
app.set('views', 'views');
app.set('view engine', 'hbs');

// create a variable that links to the route
const loginRoute = require('./routes/loginRoute');
const homeRoute = require('./routes/homeRoute');
const exerciseRoute = require('./routes/exerciseRoute');
const timelineRoute = require('./routes/timelineRoute');

const zoomRoute = require('./routes/zoomRoute');

app.use(loginRoute);
app.use(homeRoute);
app.use(exerciseRoute);
app.use(timelineRoute);
app.use(zoomRoute);

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
