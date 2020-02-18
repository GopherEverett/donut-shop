let express = require('express')
let donutRouter = express.Router()

//= =====================
// REQUIREMENTS
//= =====================
// require the Donut model
const Donut = require('../models/Donut')

//= =====================
// INDEX
//= =====================
// Create a GET index route "/" that sends all Donuts to donuts/index.hbs view
donutRouter.get('/', (req, res) => {
    Donut.find().then((donuts) => {
        res.render('donuts/index', { donuts })
    })
})

//= =====================
// NEW
//= =====================
// Create a GET new route "/new" that renders the new.hbs form

donutRouter.get('/new', (req, res) => {
    res.render('donuts/new')
})

//= =====================
// SHOW
//= =====================
// Create a GET show route "/:id" that renders a single Donut's show page
donutRouter.get('/:id', (req, res) => {
    Donut.findById(req.params.id).then(donut => {
        res.render('donuts/show', { donut })
    })
})

//= =====================
// CREATE
//= =====================
// Create a POST index route "/" that creates a new Donut
// and upon success redirects back to the index page "/"

donutRouter.post('/', (req, res) => {
    Donut.create(req.body).then((newDonut) => {
        res.redirect(`/${newDonut._id}`)
    })
})

//= =====================
// EDIT
//= =====================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that a Donut's data to it

donutRouter.get('/:id/edit', (req, res) => {
    Donut.findById(req.params.id).then(donut => {
        res.render('donuts/edit', { donut })
    })
})

//= =====================
// UPDATE
//= =====================
// Create a PUT update route "/:id" that updates the Donut and
// redirects back to the SHOW PAGE (not index)

donutRouter.put('/:id', (req, res) => {
    Donut.findByIdAndUpdate(req.params.id, req.body).then((updatedDonut) => {
        res.redirect(`/${updatedDonut._id}`)
    })
})
//= =====================
// DELETE
//= =====================
// Create a DELETE delete route "/:id" that deletes the Donut and
// redirects back to index page "/"


//= =====================
// EXPORTS
//= =====================
// export the controller with module.exports
module.exports = donutRouter