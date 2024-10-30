import CartWidget from "./CartWidget"

const NavbarComponent =()=> {
    return(
        <nav className="navContainer">
            <a href="" className="aLink">Atenea Indumentaria</a>
            <a href="" className="aLink">Buzos</a>
            <a href="" className="aLink">Camisetas</a>
            <a href="" className="aLink">Pantalones</a>
            <CartWidget counter ={15}/>
        </nav>
    )
}

export default NavbarComponent