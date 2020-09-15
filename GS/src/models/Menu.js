const { Schema, model } = require('mongoose');
const { Int32 } = require('mongodb');

const esquemaMenu = new Schema({
    _id: Number,
    menu: String,
    padre: Number,
    link: String,
    permiso: Number,
}, {
    timestamps : true
});

module.exports = model('Menu', esquemaMenu);

//model()
