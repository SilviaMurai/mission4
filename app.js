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

app.get('/ping',(req,res) => res.send('pong'));

app.listen(4000, () => console.log(`Servidor corriendo en http://localhost:4000`));
