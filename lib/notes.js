const fs = require("fs");
const path = require("path");

// create new note
function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    // add note id based on the lenght of the 'notes'
    for (let i = 0; i < notes.length; i++) {
        notes[i].id = (i + 1).toString();
    };
    // rewrite json file with updated data
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notes }, null, 2)
    );
    return notes;
};