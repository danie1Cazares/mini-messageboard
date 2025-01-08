const express = require('express')

const router = express.Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
  router.get('/', function(req,res) {
    res.render('index', {title: 'Mini Messageboard', messages});
})


    router.get('/new', function(req,res) {
        res.render('form', { title: 'Submit new message' });
    })

    router.post('/new', function(req,res) {

        console.log(req.body);
        messages.push({ text: req.body.message, user: req.body.author, added: new Date() });
        res.redirect('/');
    })

    router.get('/:index', (req,res) => {
        const index = req.params.index;

        if (messages[index]){
            res.render('details', {index, messages, title: 'Details'});
        } else {
            console.log(index, messages[index])
            res.status(404).render('404', { title: '404' });
        }
    })


module.exports = router;