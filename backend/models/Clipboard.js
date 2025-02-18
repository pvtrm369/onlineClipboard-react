const mongoose = require('mongoose')

const clipboardSchema= new mongoose.Schema({
    uniqueCode: { type: String, required: true, unique: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 120 }, 
});

const Clipboard = mongoose.model("Clipboard", clipboardSchema);
module.exports = Clipboard;