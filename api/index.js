const Koa = require('koa');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const cors = require('koa-cors');

// create app instance
const app = new Koa();

// middleware functions
app.use(koaBody());
app.use(logger());
app.use(cors());

let books = require('./book.js');
app.use(books.routes());

// Bootstrap the server
app.listen(1992, 'localhost', () => { console.log('Server Running...'); });