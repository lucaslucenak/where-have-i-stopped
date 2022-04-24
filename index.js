const express = require('express');
app = express();
const bodyParser = require('body-parser');
const tb_cinemas = require('./database/models/tb_cinemas')
const tb_wishLists = require('./database/models/tb_wishLists')

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    tb_cinemas.findAll({raw: true, order:[
        ['id','DESC']
    ]}).then(cinemas => {
        res.render('../views/home.ejs', {
            cinemas: cinemas
        });
    });
    
});

//*********************************************************************************************//
//-------------------------------------------CINEMAS-------------------------------------------//
//*********************************************************************************************//

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
});

app.post('/searchCinema', (req, res) => {
    var nameSearch = req.body.nameSearch;
    tb_cinemas.findAll({where: {name: nameSearch}}).then(cinemas => {
        res.render('../views/searchedCinemas.ejs', { 
            cinemas: cinemas
        });
    });
});
app.get('/searchedCinemas', (req, res) => {
    res.render('../views/seachedCinemas.ejs')
})


app.post('/deleteCinema', (req, res) => {
    var id = req.body.id;
    if (id != undefined) {
        if (!isNaN(id)) {
            tb_cinemas.destroy({where: {id: id}}).then(() => {
                res.redirect('/')
            })
        }
        else {
            res.redirect('/')
        }
    }
    else {
        res.redirect('/')
    }
})

app.get('/editCinema/:id', (req, res) => {
    var id = req.params.id;
    tb_cinemas.findOne({where: {id: id}}).then((cinema) => {
        res.render('../views/editCinema.ejs', {cinema: cinema})
    })
})
app.post('/makeEdition', (req, res) => {
    var id = req.body.id;
    var newName = req.body.newName;
    var newEpisode = req.body.newEpisode;
    var newSeason = req.body.newSeason;
    var newMinute = req.body.newMinute;
    var newLink = req.body.newLink;

    console.log(newName + ' ' + newEpisode + ' ' + newSeason + ' ' + newMinute + ' ' + newLink);

    tb_cinemas.update({
        name: newName,
        episode: newEpisode,
        season: newSeason,
        minute: newMinute,
        link: newLink
    }, {where: {id: id}}).then(() => {
        res.redirect('/')
    })
})

//*********************************************************************************************//
//--------------------------------------------WISHES-------------------------------------------//
//*********************************************************************************************//

app.get('/wishList', (req, res) => {
    tb_wishLists.findAll({raw: true, order:[
        ['id', 'DESC']
    ]}).then(wishLists => {
        res.render('../views/wishList.ejs', {
            wishLists: wishLists});
    })
    
})

app.post('/createWish', (req, res) => {
    var name = req.body.name;
    var link = req.body.link;
    tb_wishLists.create({name: name, link: link}).then(() => {
        res.redirect('/');
    });
});

app.listen(8023, function (err) {
    if (err) {
        console.error(err)
    }
    else {
        console.log('listening on port http://localhost:8023')
    }
})