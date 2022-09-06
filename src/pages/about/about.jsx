import { NavLink, Outlet } from "react-router-dom"

export function About() {
    return (
        <section className="about">
            <section className="title-container">
                <h2>About Makuna Hatata</h2>
                <p>'Makuna Hatata' is actually a phrase in the East Asrican language of Skahili that literally means “no trouble” or “no problems”.</p>
            </section>

            <nav>
                <NavLink replace to='/about/team'>Team</NavLink>
                <NavLink replace to='/about/vision'>Vision</NavLink>
            </nav>

            <section>
                <Outlet />
            </section>

        </section>
    )
}

