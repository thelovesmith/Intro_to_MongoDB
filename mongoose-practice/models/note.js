const mongoose = require('mongoose');

const Note = mongoose.model('Note', {
  content: {
    type: String
  }
});



module.exports = Note;
