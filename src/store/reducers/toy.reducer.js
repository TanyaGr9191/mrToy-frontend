
const INITIAL_STATE = {
    toys: null,
    filterBy: null,
    isLoading: false
}

export function toyReducer(state = INITIAL_STATE, action) {

    var toys
    switch (action.type) {
        case 'SET_TOYS':
            return { ...state, toys: action.toys }
        case 'REMOVE_TOY':
            toys = state.toys.filter(toy => toy._id !== action.toyId)
            return { ...state, toys: action.toys }
        case 'ADD_TOY':
            toys = [...state.toys, action.toy]
            return { ...state, toys: action.toys }
        case 'UPDATE_TOY':
            toys = state.toys.map(currToy => (currToy._id === action.toy._id) ? action.toy : currToy)
            return { ...state, toys }
            
        case 'SET_FILTER_BY':
            return { ...state, filterBy: { ...action.filterBy } }
        case 'SET_LOADING':
            return { ...state, isLoading: action.isLoading }
        default:
            return state
    }
}




