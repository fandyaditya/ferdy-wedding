var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index');
})

router.get('/about', function(req, res) {
    res.render('about');
})

router.get('/services', function(req, res) {
    res.render('services');
})

router.get('/gallery', function(req, res) {
    res.render('gallery');
})

router.get('/contact', function(req, res) {
    res.render('services');
})

module.exports = router;