import { Route, Routes } from 'react-router-dom'
import './assets/css/global.css'
import { ToyApp } from './pages/toy-app/toy-app'
import { ToyDetails } from './pages/toy-app/toy-details'
import { ToyEdit } from './pages/toy-app/toy-edit'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { Home } from './pages/home'
import { About } from './pages/about/about'
import { Team } from './pages/about/team'
import { Vision } from './pages/about/vision'


function App() {
    return (
        <section className="app">
            <AppHeader/>
            <main>
                <Routes>
                    <Route path='details/:id' element={<ToyDetails />}/>
                    <Route path='edit/:id?' element={<ToyEdit />} />
                    <Route path='about' element={<About />} >
                        <Route path='team' element={<Team />} />
                        <Route path='vision' element={<Vision />} />
                    </Route>
                    
                    <Route path='home' element={<Home />} />
                    <Route path='toy-app' element={<ToyApp />}/>
                </Routes>
            </main>
            <AppFooter/>
        </section>
    )
}

export default App