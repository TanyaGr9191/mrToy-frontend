import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ImgContainer } from "../cmps/img-container"
import { toyService } from '../services/toy.service'
import { utilService } from '../services/util.service'


export const ToyDetails = (props) => {

    const [toy, setToy] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadToy()
    }, [params.id])


    const loadToy = () => {
        const toyId = params.id
        toyService.getById(toyId).then(toy => {
            setToy(toy)
        })
    }

    const onBack = () => {
        navigate('/toy-app')
    }

    // console.log('render-toy-details')

    if (!toy) return <div>Loading...</div>
    const toyImage = `https://robohash.org/${toy._id}?set=set4`
    return (
        <div className="toy-details">
            <span>Name: {toy.name}</span><br />
            <span>Price:{' '}{toy.price}</span><br />
            <span>label: {toy.label}</span><br />
            <ImgContainer src={toyImage} title={toy.name} width="300px" /><br />
            <span>Created:<br />{utilService.createdAt(toy.createdAt)}</span><br />
            <button onClick={onBack}>Back</button>
        </div >
    )
}