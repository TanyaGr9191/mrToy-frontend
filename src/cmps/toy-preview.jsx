import { ImgContainer } from "./img-container.jsx"
import { Link } from 'react-router-dom'



export function ToyPreview({ toy, onRemoveToy }) {

    const toyImage = `https://robohash.org/${toy._id}?set=set4`
    return (
        <div  className='toy-preview'>
            <div className='info'>
                <h2>{toy.name}</h2>
                <Link to={`/toy/${toy._id}`}>
                    <ImgContainer src={toyImage} name={toy.name} width="75%" />
                </Link>
                <h4>{toy.label}</h4>
            </div>
            <section className='actions'>
                <button onClick={() => onRemoveToy(toy._id)}>Delete</button>
                <Link to={`/toy/edit/${toy._id}`} >Edit</Link>
            </section>
        </div>
    )
}