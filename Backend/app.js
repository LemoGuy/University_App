const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const favicon = require('serve-favicon');

const app = express();
app.use(express.json())

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Images
app.use( express.static( "public" ) );
// app.use(favicon(__dirname + '/public/images/favicon.ico'));

// EJS


// BodyParser
app.use(express.urlencoded({
  extended: false
}));


// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
    req.active = req.path.split('/')[2] 
    // console.log(req.active);
    next();
});


// Connect flash
app.use(flash());


// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});


// Routes
app.get('/', (req, res) => res.redirect('/login'));
app.use('/login', require('./routes/login.js'));
// app.use('/register', require('./routes/register.js'));

// app.use('/addStudent', require('./routes/addStudent.js'));
// app.use('/addLecturer', require('./routes/addLecturer.js'));
// app.use('/addHeadOfDepartment', require('./routes/addHeadOfDepartment.js'));
// app.use('/addHRManager', require('./routes/addHRManager.js'));
// app.use('/addStudentAffairs', require('./routes/addStudentAffairs.js'));
// app.use('/addCourse', require('./routes/addCourse.js'));
// app.use('/addAdmin', require('./routes/addAdmin.js'));

// app.use('/dashboard', require('./routes/dashboard.js'));
// app.use('/logout', require('./routes/logout.js'));
// app.use('/courses', require('./routes/courses.js'));
// app.use('/test', require('./routes/test.js'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));