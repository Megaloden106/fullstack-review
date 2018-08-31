const express = require('express');
let app = express();

const router = require('./routes.js')

const parser = require('body-parser');
const morgan = require('morgan');

app.use(express.static(__dirname + '/../client/dist'));

app.use(morgan('dev'));
app.use(parser.json());

app.use('/', router)

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

