const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memeSchema = new Schema({
    file: {
        type: String,
    }
});

const memeDB = mongoose.model("memes", memeSchema);
module.exports = memeDB;