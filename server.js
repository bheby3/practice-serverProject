//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var productsCtrl = require('./api/controllers/productsCtrl');
//var userCtrl = require('./controllers/userCtrl')
var app = express();
var expressSession = require('express-session');
var passport = require('passport');
var facebookStrategy = require('passport-facebook').Strategy;
var config = require('./api/config.js');

var mongoUri = "mongodb://localhost:27017/products";
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
//once we open the connection call this 'open' function
// can pass in mongo labs and conenct there.
    console.log("successfully connected to mongodb");
});

app.use(bodyParser.json());
app.use(express.static(__dirname + '/./public'));

//the order of these three use matter
app.use(expressSession(config.express));
app.use(passport.initialize());
app.use(passport.session());



passport.use(new facebookStrategy(config.facebook, function (token, refreshToken, profile, done) {
    // profile: is some of their profile information from facebook that we have access to
    // connect to your database
    done(null, profile);
    //done function calls next function.  Passes in the profile
}));

passport.serializeUser(function (user, done) {
//this is next function.  Serializer decides what
    //will be put on session.  user is the profile.  This encrypts the information for you for that user
    // on that session.
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
// done is like next in node.  Kept 'done', because they don't want it to break
    done(null, obj); //deserializeUser gets the user off the session.
});

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
//this is the page they will be directed to after logging in on facebook.
// this is the callback endpoint.  When facebook is done tell passport you are done and got to this url if successful
    successRedirect: '/#/home',
    //go to this url if you're not successful.
    failureRedirect: '/#/login'
}));
app.get('/auth/logout', function (req, res) {
    req.logout();
    res.redirect('/#/login');
    console.log('logging out');
});
app.get('/auth/current', function(req, res) {
    if(req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.sendStatus(401);
    }
});
//the strategy for passport we are using is 'Facebook'. go auth with
//facebook (takes us to their website).  passport takes over and does auth.
//when they hit this url it will redirect them to facebook to login.

app.get('/products', productsCtrl.read);
app.put('/products', productsCtrl.update);
app.post('/products', productsCtrl.create);
app.delete('/products/:id', productsCtrl.delete, productsCtrl.read);

port = 3000;
app.listen(port, function () {
    console.log('Server is running on port ' + port);
});
