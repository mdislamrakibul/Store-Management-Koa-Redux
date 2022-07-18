

export const ADD_BIRD = 'ADD_BIRD'
export const INCREMENT_BIRD = 'INCREMENT_BIRD'
export const DECREMENT_BIRD = 'DECREMENT_BIRD'
export const REMOVE_BIRD = 'REMOVE_BIRD'

const initialState = [
    {
        name: 'robin',
        views: 1
    }
]


export function addBird(bird)
{
    return {
        type: ADD_BIRD,
        bird,
    }
}
export function incrementsBird(bird)
{
    return {
        type: INCREMENT_BIRD,
        bird,
    }
}

export function decrementBird(bird)
{
    return {
        type: DECREMENT_BIRD,
        bird,
    }
}
export function removeBird(bird)
{
    return {
        type: REMOVE_BIRD,
        bird,
    }
}

function birds(state = initialState, action)
{
    switch (action.type) {
        case ADD_BIRD:
            return [...state, {
                name: action.bird,
                views: 1
            }]

        case INCREMENT_BIRD:
            const bird = state.find(b => b.name === action.bird)
            const birds = state.filter(b => b.name !== action.bird)
            return [
                ...birds,
                {
                    ...bird,
                    views: bird.views + 1
                }
            ]

        case DECREMENT_BIRD:
            const bird1 = state.find(b => b.name === action.bird)
            const birds1 = state.filter(b => b.name !== action.bird)
            const views = bird1.views === 0 ? 0 : bird1.views - 1
            return [
                ...birds1,
                {
                    ...bird1,
                    views: views
                }
            ]
        case REMOVE_BIRD:
            const lists = state.filter(b => b.name !== action.bird)
            state = lists
            return [
                ...state
            ]

        default:
            return state;
    }
}


export default birds;