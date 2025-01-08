const express = require('express')
const app = express();
const messageRoutes = require('./routes/messageRoutes')

const port = process.env.PORT || 3000


app.set('view engine', 'ejs')

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));


app.get('/', function(req,res) {
    res.redirect('/messages');
})

// message routes
app.use('/messages/', messageRoutes);

app.use((req,res) => {
    res.status(404).render('404', { title: '404' });
});

// add css
//  routes should be messages, messages/new, messages:index, and post route messages/new


app.listen(port);