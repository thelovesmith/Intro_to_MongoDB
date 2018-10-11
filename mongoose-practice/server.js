const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('./db/mongoose')
const Note = require('./models/note')





// POST request for route '/notes'


// Request Body
 const newNote = new Note({
   content: 'Here is another note'
 });

 newNote.save().then((note) => {
   console.log(note);
 }, (error) => {
   console.log(error);
 })


 // GET '/notes'

 Note.find().then((notes) => {
   console.log(notes);
 }, (error) => {
   console.log(error);
 })






app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
})
