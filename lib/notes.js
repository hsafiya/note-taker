const fs = require("fs");
const path = require("path");
const { db } = require('../db/db.json');


// create new note
function createNewNote(body, db) {
    const note = body;
    db.push(note);
    // add note id based on the lenght of the 'notes'
    for (let i = 0; i < db.length; i++) {
        db[i].id = (i + 1).toString();
    };
    // rewrite json file with updated data
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ db: db }, null, 2)
    );
    return db;
};

module.exports = createNewNote;