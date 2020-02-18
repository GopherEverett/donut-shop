const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Donut = new Schema({
        name: String,
        descriptiopn: String,
        img: String,
        price: Number,
        qty: Number
    });

module.exports = mongoose.model('Donut', Donut)