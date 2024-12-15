import React from "react";
import { Link } from "react-router-dom";

const Footer =()=> {
    return(
            <div className="footer">
                <span className="footerCopyright" >©TakeItEasyShop2024</span>

                <div className="footerMap">
                    <Link className="footerLink" to="/products/Abrigos">Abrigos</Link>
                    <Link className="footerLink" to="/products/Camisetas">Camisetas</Link>
                    <Link className="footerLink" to="/products/Pantalones">Pantalones</Link>
                </div>

            </div>
    )
}

export default Footer