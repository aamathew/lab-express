// Load express framework
const express = require ('express');
const path = require ('path');

// Require the artists "database"
const artistsDb = require ('./data/artists-db');
// Create express app
const app = express ();

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Mount middleware (app.use)


// Mount routes

// Define a "root" route  directly on the app
app.get('/', function(req, res){
    res.redirect('/artists');
});

app.get('/home', function(req, res){
    // Never begin the name of the template with a forward slash
    res.render('home');
});

app.get('/artists', function(req, res){
    const artists = artistsDb.getAll();
    res.render('artists/index', {artists});
});


app.listen(3000, function (){
    console.log ('Listening on port 3000');
});