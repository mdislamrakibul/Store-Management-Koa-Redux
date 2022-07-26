const books = [
    { id: 101, count: 1, name: 'Fight Club', author: 'Chuck Palahniuk' },
    { id: 102, count: 1, name: 'Sharp Objects', author: 'Gillian Flynn' },
    { id: 103, count: 1, name: 'Frankenstein', author: 'Mary Shelley' },
    { id: 104, count: 1, name: 'Into The Wild', author: 'John Krakauer' }
];

const getBook = async () =>
{

    const response = {
        status: true,
        'message': 'Books retrieved successfully',
        'data': books
    }
    return response;
}


const getBookById = async (id) =>
{
    let getCurrentBook = books.filter(function (book)
    {
        if (book.id == id) {
            return true;
        }
    });

    if (getCurrentBook.length) {
        response = {
            status: true,
            'message': 'Books retrieved successfully',
            'data': getCurrentBook[0]
        };
    } else {
        response = {
            status: false,
            'message': 'Books Not Found',
            'data': {}
        };
    }
    return response
}

const deleteBookById = async (id) =>
{
    let onBook = books.filter((book) => book.id === id)

    if (onBook.length) {

        let getCurrentBook = books.filter((book) => book.id !== Number(id));
        if (getCurrentBook.length) {
            response = {
                status: true,
                'message': 'Books deleted successfully',
                'data': getCurrentBook
            };
        } else {
            response = {
                status: false,
                'message': 'Books Not Deleted',
                'data': {}
            };
        }
    } else {
        response = {
            status: 'none',
            'message': 'Books Not Found',
            'data': {}
        };
    }


    return response
}


const createBook = async (book) =>
{
    if (
        !book.id ||
        !book.name ||
        !book.author
    ) {
        response = {
            status: false,
            'message': 'Insert Data',
            'data': {}
        };
    } else {
        let newBook = books.push({
            id: book.id,
            name: book.name,
            author: book.author
        });
        response = {
            status: true,
            'message': `New book added with id: ${book.id} & name: ${book.name
                }`,
            'data': book
        };
    }
    return response
}
module.exports = { getBook, getBookById, createBook, deleteBookById }