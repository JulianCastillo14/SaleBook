import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import "../styles/header.css"
import { SesionContext } from "../context/sesion"

export function Header(){
    const {sesion} = useContext(SesionContext)
    return(
        <>
        <header className="header">
            <Link to="/"><h1 className="header-logo">SaleBook</h1></Link>
            <form className="header-buscador">
                <input className="header-buscador-text" type="text" placeholder="¿Que deseas Buscar?"></input>
                <input className="header-buscador-boton" type="button" value="Buscar"></input>
            </form>
            <Link to="/carrito" className="header-carrito">
                <img className="header-carrito-logo" src="../../public/cart-shopping-solid.svg" />
                <button className="header-carrito-boton">Carrito</button>
            </Link>
            {sesion == null ? 
                <Link to="/login" className="header-login">
                    <img className="header-login-logo" src="../../public/user-solid.svg" />
                    <button className="header-login-boton">Login</button>
                </Link> :
                <Link to="/perfil" className="header-login">
                    <img className="header-login-logo" src="../../public/user-solid.svg" />
                    <button className="header-login-boton">Perfil</button>
                </Link>
            }
        </header>
        </>
        
    )
}
