import { Link } from "react-router-dom"
import "../header.css"

export function Header(){
    return(
        <>
        <header className="header">
            <Link to="/"><h1 className="header-logo">SaleBook</h1></Link>
            <form className="header-buscador">
                <input className="header-buscador-text" type="text" placeholder="¿Que deseas Buscar?"></input>
                <input className="header-buscador-boton" type="button" value="Buscar"></input>
            </form>
            <div className="header-carrito">
                <img className="header-carrito-logo" src="../assets/cart-shopping-solid.svg" />
                <Link to="/carrito"><button className="header-carrito-boton">Carrito</button></Link>
            </div>
            <div className="header-login">
                <img className="header-login-logo" src="../assets/user-solid.svg" />
                <button className="header-login-boton">Login</button>
            </div>
        </header>
        </>
        
    )
}
