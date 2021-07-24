const path = require('path');
const express = require('express');
const { db } = require('./db/db.json');
const createNewNote = require('./lib/notes');
const PORT = process.env.PORT || 3001;
// instantiate the server
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));



// route to render 'notes' data
app.get('/api/notes', (req, res) => {
    res.json(db);
});

// route to add new data to 'notes'
app.post('/api/notes', (req, res) => {
    const note = createNewNote(req.body, db);
    res.json(note);

});


// route to render functional page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// route to render landing page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
