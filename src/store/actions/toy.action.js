
export function changeCount(diff) {
    return (dispatch) => {
        console.log('Changing count by:', diff)
        dispatch({ type: 'INCREMENT', diff })
    }
}