const Router = require('koa-router');

// Prefix all routes with: /books
const router = new Router({
    prefix: '/books'
});

let books = [
    { id: 101, name: 'Fight Club', author: 'Chuck Palahniuk' },
    { id: 102, name: 'Sharp Objects', author: 'Gillian Flynn' },
    { id: 103, name: 'Frankenstein', author: 'Mary Shelley' },
    { id: 101, name: 'Into The Wild', author: 'John Krakauer' }
];

router.get('/', (ctx, next) =>
{
    ctx.body = {
        status: 200,
        'message': 'Books retrieved successfully',
        'data': books
    };

});


router.get('/:id', (ctx, next) =>
{
    let getCurrentBook = books.filter(function (book)
    {
        if (book.id == ctx.params.id) {
            return true;
        }
    });

    if (getCurrentBook.length) {
        ctx.body = {
            status: 200,
            'message': 'Books retrieved successfully',
            'data': getCurrentBook[0]
        };
    } else {
        ctx.body = {
            status: 200,
            'message': 'Books Not Found',
            'data': {}
        };
    }
    next();
});



router.post('/new', (ctx, next) =>
{
    // Check if any of the data field not empty
    if (
        !ctx.request.body.id ||
        !ctx.request.body.name ||
        !ctx.request.body.author
    ) {
        ctx.body = {
            status: 400,
            'message': 'Insert Data',
            'data': {}
        };
    } else {
        let newBook = books.push({
            id: ctx.request.body.id,
            name: ctx.request.body.name,
            author: ctx.request.body.author
        });
        ctx.body = {
            status: 201,
            'message': `New book added with id: ${ctx.request.body.id} & name: ${ctx.request.body.name
                }`,
            'data': {}
        };
    }
    next();
});

module.exports = router;