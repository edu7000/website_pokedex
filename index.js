const express = require('express');
const cors = require('cors');
const path = require('path');
const expressLayoutes = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const config = require('./startup/config');
const err = require('./middleware/errors');
const customerRoutes = require('./routes/customer-routes');

const app = express();

app.use(expressLayoutes);
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(customerRoutes.routes);
app.use(err);

app.listen(config.port, () => {
    console.log(`Servidor Iniciado... http://${config.host}:` + config.port);
});
