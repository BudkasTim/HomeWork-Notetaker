//modules
const express = require('express');
const { fstat } = require('fs');
const path = require('path');

//data files
const noteData= require('../db/db.json');
//const waitlist = require('../data/waitlist');

const apiRouter = express.Router()

apiRouter.get('/api/notes', (req, res) => {

    res.json(noteData);
})

// apiRouter.get('/waitlist', (req,res) => {
//     res.json(waitlist)
// })

apiRouter.post('/api/notes', (req, res) => {

  // var newNotes=req.body;
        req.body.id = noteData.length+1;
        noteData.push(req.body);
        fs.writeFile("./db/db.json", JSON.stringify(noteData),function(err){
           if(err) throw err; 
        })

       res.json(noteData);
    });

apiRouter.delete('/api/notes', (req, res) => {

        // var newNotes=req.body;
        var deleteNote = req.params.id;
        noteData = noteData.filter((note)=>{
            note.id !=req.params.id;
        });
            
        fs.writeFile("./db/db.json", JSON.stringify(noteData),function(err){
                 if(err) throw err; 
              })
      
             res.json(noteData);
          });


module.exports = apiRouter