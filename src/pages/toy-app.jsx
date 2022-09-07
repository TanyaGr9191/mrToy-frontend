import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToyList } from '../cmps/toy-list'
import { ToyFilter } from '../cmps/toy-filter'
import { loadToys, removeToy, setFilterBy, addToy } from '../store/actions/toy.action'


export const ToyApp = (props) => {
    const { toys, isLoading } = useSelector(state => state.toyModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadToys())
    }, [])

    const onRemoveToy = (toyId) => {
        dispatch(removeToy(toyId))
    }

    const onAddToy = () => {
        dispatch(addToy())
        dispatch(loadToys())
    }

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadToys())
    }

    if (!toys) return <div>Loading...</div>
    return (
        <div className='toy-app'>
            <ToyFilter onChangeFilter={onChangeFilter} />
            <button onClick={onAddToy}>Add Toy</button>
            <ToyList
                toys={toys}
                onRemoveToy={onRemoveToy}
                history={props.history} />
        </div>
    )
}
