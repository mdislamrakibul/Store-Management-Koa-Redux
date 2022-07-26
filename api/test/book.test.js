const baseURL = "http://localhost:4000"
const { getBook, getBookById, createBook, deleteBookById } = require('../book.service')
describe('Books Api', () =>
{
    const book = { id: 110, count: 1, name: 'Fight Club', author: 'Chuck Palahniuk' }
    test("Get Api", async () =>
    {
        const response = await getBook();
        expect(response.status).toBe(true);
        expect(response.message).toBe('Books retrieved successfully');
        expect(response.data).not.toBeUndefined();
    });
    test("Get Api By Id", async () =>
    {
        const response = await getBookById(108)
        if (response.status) {
            expect(response.status).toBe(true);
            expect(response.message).toBe('Books retrieved successfully');
            expect(response.data.id).toBe(101);
        } else {
            expect(response.status).toBe(false);
            expect(response.message).toBe('Books Not Found');
            expect(response.data).toEqual({});
        }
    })
    test('Create api', async () =>
    {
        const response = await createBook({ id: 110, count: 1, name: 'Fight Club', author: 'New Author' })
        if (response.status) {
            expect(response.status).toBe(true);
            expect(response.message).toBe(`New book added with id: ${book.id} & name: ${book.name
                }`);
            expect(response.data.id).toEqual(110);
        } else {
            expect(response.status).toBe(false);
            expect(response.message).toBe('Insert Data');
            expect(response.data).toEqual({});
        }
    })
    test('delete api', async () =>
    {
        const response = await deleteBookById(110)
        if (response.status) {
            expect(response.status).toBe(true);
            expect(response.message).toBe('Books deleted successfully');
        } else if (response.status === 'none') {
            expect(response.status).toBe('none');
            expect(response.message).toBe('Books Not Found');
            expect(response.data).toEqual({});
        } else {
            expect(response.status).toBe(false);
            expect(response.message).toBe('Books Not Deleted');
            expect(response.data).toEqual({});
        }
    })
})