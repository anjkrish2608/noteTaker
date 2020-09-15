//load data
var fs=require("fs");
var util=require("util");
const readFileAsync=util.promisify(fs.readFile);
const writeFileAsync=util.promisify(fs.writeFile);

const read=function(){
   return readFileAsync("../db/db.json","utf8");
}
module.exports = function (app) {
    // Displays all notes from db.json
    app.get("/notes", function (req, res) {
        read().then(function(data){
            res.json(data);
        })
    });


    // Create New notes and add to db.json
    app.post("/notes", function (req, res) {
        var id=2;
        var newNote = req.body;
        newNote.id=id;
        console.log(newNote);
        read().then(function(data){
            var notes=[...data,newNote]
            writeFileAsync("../db/db.json",JSON.stringify(notes));
        })
        id++;
    });

    //delete notes route
    app.delete("/notes/:id",function(req,res){
        console.log(req.params.id);
        read().then(function(notes){
            notes.forEach(note => {
                if(note.id==body.params.id){
                    note=[];
                }
            });
            res.json(data);
        })
    });
};
