const express = require('express');
app = express();
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
    res.send('Main page')
})
app.get('/wishList', (req, res) => {
    res.send('WishList')
})
app.listen(8083, function (err) {
    if (err) {
        console.error(err)
    }
    else {
        console.log('listening on port http://localhost:8083')
    }
})