const Koa = require('koa');
const koaBody = require('koa-body');

// create app instance
const app = new Koa();

// middleware functions
app.use(koaBody());


let books = require('./book.js');
app.use(books.routes());

// Bootstrap the server
app.listen(1992, 'localhost', () => { console.log('Server Running...'); });