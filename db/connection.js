// requirements: import mongoose
const mongoose = require('mongoose')

// Connect to a local database called "the-donut-shop"
// When it connects, then console.log "Connected to MongoDB"

mongoose.connect("mongodb://localhost/the-donut-shop", { useNewUrlParser: true,useUnifiedTopology: true }).then(() => {
    console.log("MONGODB is now connected")
})

// export your mongoose connection
module.exports = mongoose