const express = require ('express');
const app = express();
const cors = require('cors');

require('./database');
//const router = require('./routes');
app.use(cors());
app.use(express.json());

app.use('/api/', require('./routes/index'))


app.listen(3130);

console.log('Servidor en puerto', 3130);