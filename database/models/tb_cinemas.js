const Sequelize = require('sequelize');
const connection = require('../db');

const tb_cinemas = connection.define('tb_cinemas', {
    name: {
        type: Sequelize.TEXT
    },
    episode: {
        type: Sequelize.TEXT
    },
    season: {
        type: Sequelize.TEXT
    },
    minute: {
        type: Sequelize.TEXT
    },
    link: {
        type: Sequelize.TEXT
    }
});

tb_cinemas.sync({force: false}).then(function() { 
    console.log('Created tb_cinemas');
});
module.exports = tb_cinemas;