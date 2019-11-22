const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

let port = process.env.PORT || 4202;

app.use(bodyParser.json({ limit: '50mb' }));

app.use(cors());

app.use('/', express.static('dist/adminpro/'));

app.use('/consultaClientePorId', require('./controllers/consultaCliente'));

app.listen(port, () => console.log(`app listening on port ${port}!`));