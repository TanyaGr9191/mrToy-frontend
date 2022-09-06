import { toyService } from "../../services/toy.service"

export function loadToys() {

    return (dispatch, getState) => {
        const { filterBy } = getState().toyModule
        toyService.query(filterBy)
            .then(toys => {
                console.log('Toys from DB:', toys)
                dispatch({ type: 'SET_TOYS', toys })
            })
            .catch(err => {
                console.log('Cannot set toys:', err)
            })

    }
}

export function removeToy(toyId) {
    return (dispatch, getState) => {
        toyService.remove(toyId)
            .then(() => {
                console.log('Toys REMOVED')
                dispatch({ type: 'REMOVE_TOY', toyId })
            })
            .catch(err => {
                console.log('Cannot remove toys:', err)
            })
    }
}

export function setFilterBy(filterBy) {
    return (dispatch) => {
        console.log('Toys filtered')
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}