const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public')); // Para servir archivos estáticos (CSS, imágenes)

// Conectar a MongoDB Atlas
mongoose.connect('mongodb+srv://0260679:German12@cluster1.tfg6v.mongodb.net/prototypes?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión a MongoDB:', err));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.render('prototype');
});

// Manejo de registro
app.post('/register', async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    try {
        const newUser = new User({ firstname, lastname, email, password });
        await newUser.save();
        console.log('Usuario registrado:', newUser);
        res.redirect('/'); // Redirige a la página principal después de registrar
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).send('Error al registrar el usuario');
    }
});

// Rutas para las demás páginas
app.get('/courses', (req, res) => {
    res.render('courses'); // Asegúrate de que el nombre de la vista sea correcto
});

app.get('/quizzes&exam', (req, res) => {
    res.render('quizzes&exam'); // Asegúrate de que el nombre de la vista sea correcto
});

app.get('/aboutus', (req, res) => {
    res.render('aboutus'); // Asegúrate de que el nombre de la vista sea correcto
});

app.listen(3000, () => {
    console.log('Servidor en funcionamiento en http://localhost:3000');
});
