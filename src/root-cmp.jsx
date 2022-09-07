import { Route, Routes } from 'react-router-dom'
import './assets/css/global.css'
import { ToyApp } from './pages/toy-app'
import { ToyDetails } from './pages/toy-details'
import { ToyEdit } from './pages/toy-edit'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Team } from './pages/team'
import { Vision } from './pages/vision'


function App() {
    return (
        <section className="app">
            <AppHeader/>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='toy' element={<ToyApp />}/>
                    <Route path='toy/edit/:id' element={<ToyEdit />} />
                    <Route path='toy/edit' element={<ToyEdit />} />
                    <Route path='toy/:id' element={<ToyDetails />}/>
                    <Route path='about' element={<About />} >
                        <Route path='team' element={<Team />} />
                        <Route path='vision' element={<Vision />} />
                    </Route>
                </Routes>
            </main>
            <AppFooter/>
        </section>
    )
}

export default App