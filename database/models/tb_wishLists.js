const Sequelize = require('sequelize');
const connection = require('../db');

const tb_wishLists = connection.define('tb_wishLists', {
    name: {
        type: Sequelize.TEXT
    },
    link: {
        type: Sequelize.TEXT
    }
});

tb_wishLists.sync({force: false}).then(function() { 
    console.log('Created tb_wishList');
});
module.exports = tb_wishLists;