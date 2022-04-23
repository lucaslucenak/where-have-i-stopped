const express = require('express');
app = express();
const bodyParser = require('body-parser');
const tb_cinemas = require('./database/models/tb_cinemas')
const tb_wishLists = require('./database/models/tb_wishLists')

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('../views/home.ejs')
})

app.post('/createCinema', (req, res) => {
    var name = req.body.name;
    var episode = req.body.episode;
    var season = req.body.season;
    var minute = req.body.minute;
    var link = req.body.link;
    tb_cinemas.create({name: name, episode: episode, season: season, minute: minute, link: link}).then(() => {
        res.redirect('/');
    });
    console.log(name + ' ' + episode + ' ' + season + ' ' + minute + ' ' + link);
    
})

app.get('/wishList', (req, res) => {
    res.render('../views/wishList.ejs')
})

app.post('/createWish', (req, res) => {
    var name = req.body.name;
    var link = req.body.link;
    tb_wishLists.create({name: name, link: link}).then(() => {
        res.redirect('/');
    });
});

app.listen(8086, function (err) {
    if (err) {
        console.error(err)
    }
    else {
        console.log('listening on port http://localhost:8086')
    }
})