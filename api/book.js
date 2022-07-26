const log4js = require('log4js');
const Router = require('koa-router');
const { getBook, getBookById, createBook, deleteBookById } = require('./book.service');
var logger = log4js.getLogger();

var logger = log4js.getLogger('books');
logger.info('book-api is in.');

// Prefix all routes with: /books
const router = new Router({
    prefix: '/books'
});



router.get('/', async (ctx, next) =>
{
    logger.info('success');
    ctx.body = await getBook()

});


router.get('/:id', async (ctx, next) =>
{
    ctx.body = await getBookById(ctx.params.id);
});


router.delete('/:id', async (ctx, next) =>
{
    ctx.body = await deleteBookById(ctx.params.id);
});



router.post('/new', async (ctx, next) =>
{
    // Check if any of the data field not empty
    ctx.body = await createBook(ctx.request.body);
});

module.exports = router;
