import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const NavbarComponent =()=> {
    return(
        <nav className="navbarComponent">
            <NavLink className="logoLink" to="/"><img src="../mainlogo.png" alt="logo principal" className="mainLogo"/></NavLink>
            <div>
                <NavLink className="aLink" to="/products/Abrigos">Abrigos</NavLink>
                <NavLink className="aLink" to="/products/Camisetas">Camisetas</NavLink>
                <NavLink className="aLink" to="/products/Pantalones">Pantalones</NavLink>
            </div>

            <NavLink className="cartLink" to="/cart"><CartWidget counter ={15}/></NavLink>
        </nav>
    )
}

export default NavbarComponent