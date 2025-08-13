import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
    return (
        <header>
            <nav>
                <h1 className="crypto-title">Crypto Tracker</h1>
                <ul>
                    <li className='nav-bar-link'><NavLink to="/trending" style={({ isActive }) => ({
                        textDecoration: isActive ? "underline" : "none",
                        color: isActive ? "#22b76c" : "inherit"
                    })}>Trending</NavLink></li>
                    <li className='nav-bar-link'><NavLink to="/" style={({ isActive }) => ({
                        textDecoration: isActive ? "underline" : "none",
                        color: isActive ? "#22b76c" : "inherit"
                    })}>Cryptocurrencies</NavLink></li>
                    <li className='nav-bar-link'><NavLink to="/search" style={({ isActive }) => ({
                        textDecoration: isActive ? "underline" : "none",
                        color: isActive ? "#22b76c" : "inherit"
                    })}>Search</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}