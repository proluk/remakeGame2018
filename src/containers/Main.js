import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/style.scss'

class Main extends Component{
    render = () => {
        return (
            <main className="Main">
                <section className="Main__section">
                    <header className="Main__section__header">
                        Some Game Name
                    </header>
                    <nav className="Main__section__nav">
                        <NavLink className="Main__section__nav__NavLink" to="/game">Start playing</NavLink>
                    </nav>
                </section>
            </main>
        )
    }
}

export default Main