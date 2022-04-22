const express = require('express');
app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('../views/home.ejs')
})
app.get('/wishList', (req, res) => {
    res.render('../views/wishList.ejs')
})
app.listen(8085, function (err) {
    if (err) {
        console.error(err)
    }
    else {
        console.log('listening on port http://localhost:8085')
    }
})