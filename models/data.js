const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memeSchema = new Schema({
    filename: {
        type: String,
        unique: true
    }
});

const memeDB = mongoose.model("memes", memeSchema);
module.exports = memeDB;