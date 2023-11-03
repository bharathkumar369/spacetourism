import React from "react";
import { NavLink,useNavigate } from "react-router-dom";

const Header = () =>{

    const [menuOpen,setMenuOpen] = React.useState(false);

    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    const handleClick = (path) =>{
        closeMenu();
        navigate(path)
    }
    return(
        <header className="box">
            <section>
                <NavLink to="/">
                    <img src="../../../images/logo.svg" alt="logo" className="logo"/>
                </NavLink>
            </section>
            <hr/>
            <nav className={`flex ${menuOpen ? "show" : ""}`}>
                <NavLink to="/" className="nav__item" onClick={() => handleClick("/")}>
                    00 HOME
                </NavLink>
                <NavLink to="/destination" className="nav__item" onClick={() => handleClick("/destination")}>
                    01 DESTINATION
                </NavLink>
                <NavLink to="/crew" className="nav__item" onClick={() => handleClick("/crew")}>
                    02 CREW
                </NavLink>
                <NavLink to="/technology" className="nav__item" onClick={() => handleClick("/technology")}>
                    03 TECHNOLOGY
                </NavLink>
            </nav>
            <div className="hamburger--image-container">
                <section>
                    <img src="../../../images/icon-hamburger.svg" alt="hamburger" className="nav__hamburger" onClick={toggleMenu}/>
                </section>
            </div>
        </header>
    )
}
export default Header;