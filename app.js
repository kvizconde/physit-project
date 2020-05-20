/*
----------------------------------------------------------------------------------

------
README
------

The following app.js file was created by KEVIN VIZCONDE at the start of project.
This file has been worked on and modified by the following people:


Lead Software Architect: Kevin Vizconde
Roles:
  • Installing the initial dependencies in package.json
  • Setting up the basic skeleton/structure/folders for MVC
  • Setting up the basic routes
  • Setting up development and production environments


Lead Back-End Developer: Daniel Chu
Roles:
  • Installing new dependencies as needed
  • Cleaning up the routes and improving route efficiency
  • Improving the overall workflow on the controllers/models side

----------------------------------------------------------------------------------
*/

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

const session = require('express-session');

app.use(
  session({
    secret: 'secret',
    name: 'session_data',
    resave: true,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      httpOnly: true,
      // maxAge: 600000 //10 minutes
      maxAge: 365 * 24 * 60 * 60 * 1000, // one year
    },
  }),
);

// create a variable that links to the route
const loginRoute = require('./routes/loginRoute');
const homeRoute = require('./routes/homeRoute');
const exerciseRoute = require('./routes/exerciseRoute');
const timelineRoute = require('./routes/timelineRoute');
const patientListRoute = require('./routes/patientListRoute');
const zoomRoute = require('./routes/zoomRoute');

app.use('/', loginRoute);
app.use('/', homeRoute);
app.use('/', exerciseRoute);
app.use('/', timelineRoute);
app.use('/', patientListRoute);
app.use('/', zoomRoute);

app.get('/', (req, res) => {
  req.session.destroy();
  res.render('index', {
    title: 'Login Page',
    indexJSCSS: true,
  });
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
