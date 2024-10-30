const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public')); 


mongoose.connect('mongodb+srv://0260679:German12@cluster1.tfg6v.mongodb.net/prototypes?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión a MongoDB:', err));


app.get('/', (req, res) => {
    res.render('prototype');
});


app.post('/register', async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    try {
        const newUser = new User({ firstname, lastname, email, password });
        await newUser.save();
        console.log('Usuario registrado:', newUser);
        res.redirect('/aboutus'); 
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).send('Error al registrar el usuario');
    }
});


app.get('/courses', (req, res) => {
    res.render('courses'); 
});

app.get('/quizzes&exam', (req, res) => {
    res.render('quizzes&exam'); 
});

app.get('/aboutus', (req, res) => {
    res.render('aboutus'); 
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
