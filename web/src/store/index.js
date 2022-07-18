import { combineReducers } from 'redux'
import birds from './birds/birds'
import books from './books/books'


const allReducers = combineReducers({
    books: books,
    birds: birds
})
export default allReducers