const path= require ('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
// instantiate the server
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

// route to render functional page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// route to render landing page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


// route to render 'notes' data
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// route to add new data to 'notes'
app.post('/api/notes', (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(note);

});





app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
