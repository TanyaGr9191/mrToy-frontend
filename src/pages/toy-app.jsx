import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { ToyList } from '../cmps/toy-list'
import { loadToys, removeToy } from '../store/actions/toy.action'


export const ToyApp = (props) => {
    const { toys, isLoading } = useSelector(state => state.toyModule)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadToys())
    },[])

    const onRemoveToy = (toyId) => {
        dispatch(removeToy(toyId))
    }

    if (!toys) return <div>Loading...</div>
    return (
        <div className='toy-app'>
            toy-app
            <ToyList 
            toys={toys} 
            onRemoveToy={onRemoveToy}
            history={props.history}/>
        </div>
    )

}
