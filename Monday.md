# ![GA Cog](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Monday
We learned a lot today! Let's practice.

For this exercise, you're going to build a very simple project similar to how we did in class today.

This project will be a note taking app called **Notable**; this will be the name of your database as well.

## Here are the steps:

**1)** Inside of this directory, make a directory called `Monday-Project`.

**2)** `cd` inside of that directory and make your server script: `touch server.js`

**3)** Now, make a `package.json` for all of your dependencies: `npm init`
  - You can select all the defaults :sunglasses:

**4)** Go ahead and install **just** the modules you'll need to practice mongoose.

  - `npm install express mongoose --save`

**5)** Perfect! Now build a `database` configuration directory inside of your project's root:
  - `mkdir db`
  - `touch db/mongoose.js`

**6)** Go ahead and create your connection and add the global promise library:

  ```js
  const mongoose = require('mongoose')

  mongoose.Promise = global.Promise
  mongoose.connect('mongodb://localhost:27017/Notable')


  // don't forget to export it 😎:

  module.exports = mongoose;


  ```
**7)** Now create your model directory and file inside your project's root.
  - `mkdir models`
  - `touch models/note.js`

**8)** Perfect! Time to build a mongoose model to map our note data!
  - Give your note a title and content property:

```js
const mongoose = require('mongoose');

const Note = mongoose.model('Note', {
  title: {
    type: String
  },
  content: {
    type: String
  }
});


  // don't forget to export it 😎:

module.exports = Note;
```

## Bringing it all together!
Now you should have your project directory, a server script file (with nothing it it), a db configuration directory and your models directory.

Go ahead and set up your server script file:
  - We're going to keep things simple for right now :sunglasses:

```js

const express = require('express')
const app = express();
const port = 3000;
const mongoose = require('./db/mongoose');
const Note = require('./models/note')










app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

```

## Challenge Time!


**Challenge #1** :trophy:
Write a mongoose query to create a new note document.
- You won't have a request body yet, so we'll need to hard code this one in.
  - You will get some help with this one :sunglasses:
- First you'll need to create a new instance of your note inside your server script file:

```js
const newNote = new Note({
  title: 'What I learned today',
  content: 'Mongoose is Awesome!'
})

```
- Now you'll need to use the `.save()` method we learned about today to save it to the database.
- Write this method right below your `newNote` declaration.
- Make a few notes in your database by changing the `title` and `content` property values and then saving them.
- If you're using `nodemon` everything will save immediately upon saving the server script file.


**Challenge #2** :trophy: :trophy:
Write a mongoose query to read your data `.find()`. We'll just print it to the console for now.


<!-- 
**Challenge #3** :trophy: :trophy: :trophy:
Write a mongoose query to read your data by id `.findById()`. We'll just print it to the console for now.


**Challenge #4** :trophy: :trophy: :trophy: :trophy:
Write a mongoose query to update one of your notes by id. We'll just update the content property one just one of your notes for now, don't update the title. Your mongoose query should return (**console.log()**) the updated note.


**Challenge #5** :trophy: :trophy: :trophy: :trophy:
Lastly, go ahead and write a mongoose query to delete one of your notes. -->


## Profit!
If this assignment was also required as your homework, you can let your instructors know by making a pull request and adding a note to indicate completion.
