
export function ToyPreview({ toy, onRemoveToy }) {

    const toyStyle = { backgroundImage: `url(https://robohash.org/${toy._id}?set=set4)` }
    return (
        <div style={toyStyle} className='toy-preview'>
            <div className='info'>
                <h2>{toy.name}</h2>
                <h4>{toy.label}</h4>
            </div>
            <section className='actions'>
                <button onClick={() => onRemoveToy(toy._id)}>Delete</button>
            </section>
        </div>
    )
}