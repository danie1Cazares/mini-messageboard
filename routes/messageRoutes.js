const express = require('express')
const db = require("../db/queries");


const router = express.Router();

// const messages = [
//     {
//       text: "Hi there!",
//       user: "Amando",
//       added: new Date()
//     },
//     {
//       text: "Hello World!",
//       user: "Charles",
//       added: new Date()
//     }
//   ];
  
  router.get('/',  async function(req,res) {
    

    const messages = await db.getAllMessages();
    res.render('index', {title: 'Mini Messageboard', messages});
    
    // if (messages !== null) res.render('index', {title: 'Mini Messageboard', messages});

    // res.status(404).render('404', { title: '404' });
    // console.log('No Messages exist');

    

})


    router.get('/new', async function(req,res) {
        res.render('form', { title: 'Submit new message' });
    })

    router.post('/new', async function(req,res) {

        console.log(req.body);
        // messages.push({ text: req.body.message, user: req.body.author, added: new Date() });
        const newMsg = { text: req.body.message, author: req.body.author, added: new Date() };
        await db.insertMessage(newMsg);

        res.redirect('/');
    })

    router.get('/:id', async function(req,res) {
        const id = req.params.id;

        const getMessageDetails = await db.getMessageById(id);

        if (getMessageDetails !== null) res.render('details', {getMessageDetails, title: 'Details'});

        res.status(404).render('404', { title: '404' });
        console.log('That message id does not exist')


    })


module.exports = router;