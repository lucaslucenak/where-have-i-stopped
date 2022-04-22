const express = require('express');
app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('../views/home.ejs')
})

app.post('/createCinema', (req, res) => {
    res.send('Form recebido')
})

app.get('/wishList', (req, res) => {
    res.render('../views/wishList.ejs')
})

app.listen(8089, function (err) {
    if (err) {
        console.error(err)
    }
    else {
        console.log('listening on port http://localhost:8089')
    }
})