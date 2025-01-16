require('dotenv').config();


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



app.listen(port);

//push to git hub
// redeploy on koyeb
// config db with koyeb

// In our previous Mini Message Board project, we implemented ephemeral messages using an array i.e. the messages would reset when server restarted. We want data persistence. Go back to this project and implement it with a PostgreSQL db and pg.
// Deploy a new db on a hosting service you choose, and obtain its connection information.
// Create a messages table, populate it with data if you wish. This should be done via a script.
// Add the necessary environment variables, create a pool, and implement the required db functions.