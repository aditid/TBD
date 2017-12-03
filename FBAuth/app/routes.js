var User = require('./models/user.js');
module.exports = function(app, passport){
    app.get('/', function(req, res){
        res.render('index.ejs');
    });

    app.get('/profile', isLoggedIn, function(req, res){
        res.render('profile.ejs', { user: req.user });
    });

    app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email'] }));
//	app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email', 'birthday'] }));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', { successRedirect: '/profile',
            failureRedirect: '/' }));

// WHEN LOGOUT IS CLICKED - GO BACK TO HOMEPAGE
    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    })
};

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }

    res.redirect('/login');
}