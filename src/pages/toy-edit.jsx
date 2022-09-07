import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { toyService } from '../services/toy.service'

export const ToyEdit = (props) => {

    const params = useParams()
    const navigate = useNavigate()

    const [toy, handleChange, setToy] = useForm({
        name: '',
        price: ''
    })

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
        const toyId = params.id
        if (!toyId) return
        toyService.getById(toyId)
            .then(toy => {
                setToy(toy)
            })
            .catch(err => {
                console.log('err:', err);
            })
    }, [])

    const onSaveToy = (ev) => {
        ev.preventDefault()
        toyService.save({ ...toy }).then(() => {
            navigate('/toy')
        })
    }

    return (
        <section className='toy-edit'>
            <h1>{toy._id ? 'Edit' : 'Add'} Toy</h1>
            <form onSubmit={onSaveToy}>
                <label htmlFor="name">Name</label>
                <input ref={inputRef} value={toy.name} onChange={handleChange} type="text" name="name" id="name" />
                <label htmlFor="price">Price</label>
                <input ref={inputRef} value={toy.price} onChange={handleChange} type="price" name="price" id="price" />
                <label htmlFor="type">Type</label>
                <select value={toy.label} onChange={handleChange} name="label" id="label">
                    <option disabled value="">Choose a label</option>
                    <option value="Doll">Doll</option>
                    <option value="Baby">Baby</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Outdoor">Outdoor</option>
                </select>

                <button>Save</button>
            </form>
        </section>
    )
}