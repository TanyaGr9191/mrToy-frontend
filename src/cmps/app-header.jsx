import { connect } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'


export const AppHeader = () => {
    const navigate = useNavigate()
    const onBack = () => {
        navigate(-1)
    }

    return (
        <header className='app-header'>
            <section className="back">
                    <button onClick={onBack}>Back</button>
            </section>
            <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/about">About</NavLink> |
                <NavLink to="/toy-app">Toys</NavLink> 
            </nav>
            <h1>My App</h1>
        </header>
    )

}