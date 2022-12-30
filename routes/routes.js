const mongoose = require('mongoose');
const memeDB = require('../models/data');
const express = require('express');
const routes = express.Router();
const bcrypt = require('bcrypt');

routes.get('/', (req, res) => {
    try {
        memeDB.find()
            .then((result) => {
                res.render('index', { data: result });
            });
    }
    catch (error) {
        console.error(error);
    }
});

routes.get('/upload', (req, res) => {
    res.render('upload');
});

routes.post('/upload', async (req, res) => {
    try {
        const data = req.body.mainpost;
        const uploaded = new memeDB({ file: data });
        await uploaded.save();
        res.redirect('/')
    } catch (error) {
        console.error(error);
    }
});

module.exports = routes;