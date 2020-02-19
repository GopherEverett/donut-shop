let express = require('express')
let donutRouter = express.Router()

const Donut = require('../models/Donut')

donutRouter.get('/', (req, res) => {
    Donut.find().then((donuts) => {
        res.render('donuts/index', { donuts })
    })
})


donutRouter.get('/new', (req, res) => {
    res.render('donuts/new')
})

donutRouter.get('/random', (req,res) => {
    Donut.find().then((donuts) => {
        let i = Math.floor(Math.random() * donuts.length)
        let donut = donuts[i]
        res.render('donuts/show', { donut })
    })
})

donutRouter.get('/:id', (req, res) => {
    Donut.findById(req.params.id).then(donut => {
        res.render('donuts/show', { donut })
    })
})


donutRouter.post('/', (req, res) => {
    Donut.create(req.body).then((newDonut) => {
        res.redirect(`/${newDonut._id}`)
    })
})




donutRouter.get('/:id/edit', (req, res) => {
    Donut.findById(req.params.id).then(donut => {
        res.render('donuts/edit', { donut })
    })
})


donutRouter.put('/:id', (req, res) => {
    Donut.findByIdAndUpdate(req.params.id, req.body).then((updatedDonut) => {
        res.redirect(`/${updatedDonut._id}`)
    })
})

donutRouter.delete('/:id', (req,res) => {
    Donut.findByIdAndRemove(req.params.id).then(()=> {
        res.redirect('/')
    })
})

donutRouter.put('/:id/buy', (req,res) => {
    Donut.findById(req.params.id).then((donut) => {
            donut.qty -= 1
            return donut.save()
    }).then((donut)=> {
        res.redirect('/'+ donut.id)
    })
})

module.exports = donutRouter