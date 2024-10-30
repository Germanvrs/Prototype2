// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Asegúrate de encriptar la contraseña en producción
}, { collection: 'prototypes' }); // Nombre de la colección en MongoDB

const User = mongoose.model('User', userSchema);

module.exports = User;
