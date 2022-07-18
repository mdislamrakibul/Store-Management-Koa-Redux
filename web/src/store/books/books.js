
export const SET_BOOK = 'SET_BOOK'
export const ADD_BOOK = 'ADD_BOOK'
export const INCREMENT_BOOK = 'INCREMENT_BOOK'
export const DECREMENT_BOOK = 'DECREMENT_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'

const initialState = [
    {
        id: '',
        name: '',
        author: '',
        count: 0
    }
]


export function setBook(book)
{
    return {
        type: SET_BOOK,
        book,
    }
}

export function addBook(book)
{
    return {
        type: ADD_BOOK,
        book,
    }
}

export function incrementsBook(book)
{
    return {
        type: INCREMENT_BOOK,
        book
    }
}
export function decrementBook(book)
{
    return {
        type: DECREMENT_BOOK,
        book
    }
}
export function deleteBook(book)
{
    return {
        type: DELETE_BOOK,
        book
    }
}


function books(state = initialState, action)
{
    switch (action.type) {

        case SET_BOOK:
            state = action.book
            return state

        case ADD_BOOK:
            state = [...state, action.book]
            return state

        case INCREMENT_BOOK:
            const book = state.find(b => b.id === action.book)
            const books = state.filter(b => b.id !== action.book)
            return [
                ...books,
                {
                    ...book,
                    count: book.count + 1
                }
            ]

        case DECREMENT_BOOK:
            const book1 = state.find(b => b.id === action.book)
            const books2 = state.filter(b => b.id !== action.book)
            const views = book1.count === 0 ? 0 : book1.count - 1
            return [
                ...books2,
                {
                    ...book1,
                    count: views
                }
            ]

        case DELETE_BOOK:
            const lists = state.filter(b => b.id !== action.book)
            state = lists
            return [
                ...state
            ]

        default:
            return state;
    }
}

export default books;