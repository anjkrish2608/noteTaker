//load data
var notesData = require("../db/db.json");

module.exports = function (app) {// Displays all notes
    app.get("/api/notes", function (req, res) {
        return res.json(notesData);
    });

    // Displays a single character, or returns false
    app.get("/api/notes/:id", function (req, res) {
        var chosen = req.params.id;

        console.log(chosen);

        for (var i = 0; i < db.length; i++) {
            if (chosen === db[i].routeName) {
                return res.json(db[i]);
            }
        }

        return res.json(false);
    });

    // Create New notes - takes in JSON input
    app.post("/api/notes", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newNote = req.body;

        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();

        console.log(newNote);

        characters.push(newNote);

        res.json(newNote);
    });

    //delete notes route
    app.delete("/api/notes/:id",function(req,res){
        console.log(body.params.id);
    })
};
