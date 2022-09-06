
const INITIAL_STATE = {
    toys: [],
}

export function toyReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'INCREMENT':
            return { ...state, toys: state.toys + action.diff }
        case 'DECREMENT':
            return { ...state, toys: state.toys - action.diff }
        default:
            return state
    }
}




