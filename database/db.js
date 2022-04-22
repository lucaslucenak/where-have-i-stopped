const Sequelize = require('sequelize');
const connection = new Sequelize('heroku_cfdd5123de97fdf', 'b03cbe1e961bce', '35eeaac8', {
    host: 'us-cdbr-east-05.cleardb.net',
    dialect: 'mysql'
})

module.exports = connection;