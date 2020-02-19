
const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost/the-donut-shop", { useNewUrlParser: true,useUnifiedTopology: true }).then(() => {
    console.log("MONGODB is now connected")
})

module.exports = mongoose