import { Link } from 'react-router-dom'
import './navbar.css'


 const Navbar = () => {
    return (
        <div>
            
            <div className="navbar">
                <div className="logo">
                    <span>Blog</span>
                </div>  
                <div className="navbarLinks">
                    <Link className="links" to="/">Main Page </Link>
                    <Link className="links" to="AddArticle">Add New </Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar
