//modules
const express = require('express');
const fs = require('fs');
const path = require('path');

//data files
let noteData= require('../db/db.json');
//const waitlist = require('../data/waitlist');

const apiRouter = express.Router()

apiRouter.get('/notes', (req, res) => {

    res.json(noteData);
})

// apiRouter.get('/waitlist', (req,res) => {
//     res.json(waitlist)
// })

apiRouter.post('/notes', (req, res) => {

  // var newNotes=req.body;
        req.body.id = noteData.length+1;
        noteData.push(req.body);
        fs.writeFile("./db/db.json", JSON.stringify(noteData),function(err){
           if(err) throw err; 
        })

       res.json(noteData);
    });

apiRouter.delete('/notes/:id', (req, res) => {

        // var newNotes=req.body;

        var deleteNote = req.params.id;
        console.log(typeof deleteNote);
        console.log(noteData);
        
        noteData = noteData.filter((note)=>{
            note.id ==parseInt(req.params.id);
        });
        console.log(noteData);
        fs.writeFile("./db/db.json", JSON.stringify(noteData),function(err){
                 if(err) throw err; 
              })
      
             res.json(noteData);
          });


module.exports = apiRouter