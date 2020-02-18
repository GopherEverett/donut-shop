const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Donut = new Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true

        },
        img: String,
        price: Number,
        qty: Number
    });

module.exports = mongoose.model('Donut', Donut)