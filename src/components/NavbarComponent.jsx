import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const NavbarComponent =()=> {
    return(
        <nav className="navContainer">
            <NavLink className="aLink" to="/">Ecommerce</NavLink>
            <NavLink className="aLink" to="/products/Tools">Tools</NavLink>
            <NavLink className="aLink" to="/products/Stranges">Stranges</NavLink>
            <NavLink className="aLink" to="/products/Hats">Hats</NavLink>

            <NavLink className="aLink" to="/cart"><CartWidget counter ={15}/></NavLink>
        </nav>
    )
}

export default NavbarComponent