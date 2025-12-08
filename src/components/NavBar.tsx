import {Link} from "react-router-dom"
import "../css/NavBar.css"

function NavBar(){
    return  ( 
        <nav className="navbar-content">
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/techstack" className="nav-link">Tech Stack</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
        </nav>
    )
}

export default NavBar;