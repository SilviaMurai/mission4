//como en 29.ppt 
require('dotenv').config();
const PORT = process.env.PORT;    //const PORT = 4000;

const express = require('express');
const app = express();              /* crea instancia de servidor: una sola vez  aplicacion! */

const mainRoutes = require('./src/routes/mainRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const shopRoutes = require('./src/routes/shopRoutes');

app.use(express.static('public'));
//app.set(express.static('public'));    // PERO de Talia distinto  //PERO asi NO encuentra nada

app.use('/',mainRoutes);
app.use('/admin',adminRoutes);
app.use('/auth',authRoutes);
app.use('/shop',shopRoutes);

//app.get('/ping',(req,res) => res.send('pong'));

// como Funko Talia
// Configuración del motor de vistas
// indicamos en nuestro entry point que usaremos un motor de plantillas y donde alojaremos los templates
// FALTABA npm install ejs
const path = require('path');
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/src/views'));  //app.set('views', __dirname + '/src/views');    

app.get("/", (req, res) => {res.render(path.resolve(__dirname, '../views/home'))});  //clase 34

app.use(express.json());       // to support JSON-encoded bodies
//app.use(express.urlencoded()); // to support URL-encoded bodies  //body-parser deprecated
//app.use(express.bodyParser());
   
//const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.status(404).send(`Recurso no encontrado en `+`http://localhost:`+PORT);
   });

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:`+PORT));
