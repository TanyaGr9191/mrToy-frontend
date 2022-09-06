
const INITIAL_STATE = {
    toys: null,
    filterBy: null,
    isLoading: false
}

export function toyReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'SET_TOYS':
            return { ...state, toys: action.toys }
        case 'REMOVE_TOY':
            return { ...state, toys: action.toys }



        case 'SET_FILTER_BY':
            return {...state, filterBy: { ...action.filterBy }}
        case 'SET_LOADING':
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}




