const mongoose = require('mongoose');
const memeDB = require('../models/data');
const express = require('express');
const routes = express.Router();
const bcrypt = require('bcrypt');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({ storage: storage });

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

routes.post('/upload', upload.single('meme-post'), async (req, res) => {
    try {
        const filename = req.file.filename;
        const title = req.body.title;
        const uploaded = new memeDB({ filename: filename });
        await uploaded.save();
        res.redirect('/')
    } catch (error) {
        console.error(error);
    }
});

module.exports = routes;