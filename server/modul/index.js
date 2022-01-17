const { Schema, model } = require('mongoose');

const User = new Schema({
    name: { type: String, unique: true, required: true },
    password: { type: String, required: true },
})

const Event = new Schema({
    author: { type: String, required: true },
    guest: { type: String, required: true },
    date: { type: String, unique: true, required: true },
    description: { type: String, required: true },
})

Users = model('user', User);
Events = model('event', Event);


module.exports = { Users, Events };