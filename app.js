//como en 29.ppt 
//require('dotenv').config();
//const PORT = process.env.PORT;
const PORT = 4000;

const express = require('express');
const app = express();              /* crea instancia de servidor: una sola vez  aplicacion! */

const mainRoutes = require('./src/routes/mainRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const shopRoutes = require('./src/routes/shopRoutes');

app.use(express.static('public'));

app.use('/',mainRoutes);
app.use('/admin',adminRoutes);
app.use('/auth',authRoutes);
app.use('/shop',shopRoutes);

//app.get('/ping',(req,res) => res.send('pong'));

// FALTABA npm install ejs

// como Funko Talia
// Configuración del motor de vistas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');    //app.set('views', 'views'); 

app.use((req, res, next) => {
    res.status(404).send(`Recurso no encontrado en `+`http://localhost:`+PORT);
   });

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:`+PORT));
