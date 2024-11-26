import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const NavbarComponent =()=> {
    return(
        <nav className="navContainer">
            <NavLink className="aLink" to="/">Ecommerce</NavLink>
            <NavLink className="aLink" to="/products/category1">item 1</NavLink>
            <NavLink className="aLink" to="/products/category2">item 2</NavLink>
            <NavLink className="aLink" to="/products/category3">item 3</NavLink>

            <NavLink className="aLink" to="/cart"><CartWidget counter ={15}/></NavLink>
        </nav>
    )
}

export default NavbarComponent