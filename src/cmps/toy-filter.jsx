import { useFormRegister } from '../hooks/useFormRegister'


export const ToyFilter = (props) => {

    const [register] = useFormRegister({
        name: '',
        minPrice: '',
        maxPrice: '',
        date: new Date(),
    }, props.onChangeFilter)


    return (
        <form className='toy-filter' >
            <section>
                <label htmlFor="name">Name</label>
                <input {...register('name', 'text')} />
            </section>
            <section>
                <label htmlFor="minPrice">Min Price</label>
                <input {...register('minPrice', 'number')} />
            </section>
            <section>
                <label htmlFor="maxPrice">Max Price</label>
                <input {...register('maxPrice', 'number')} />
            </section>
            <section>
                <label htmlFor="date">Date</label>
                <input {...register('date', 'date')} />
            </section>
        </form>
    )
}

