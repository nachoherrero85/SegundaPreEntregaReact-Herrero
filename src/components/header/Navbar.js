import React from "react";
import logo from "../../assests/tienda.png";
import { styles } from "../header/Navbar.style";
import NavCategories from "../header/NavCategories";
import CartWidget from "../header/CartWidget";
import { Link } from "react-router-dom";

const Navbar = ({ name }) => {
    return (
        <header style={styles.container}>
            <Link style={styles.imagenes} to={"/"}>
                <img style={styles.imagenes} src={logo} alt="tienda online" />
            </Link>
            <h1>Hola! {name}</h1>
            <NavCategories />
            <Link to={"/cart"}>
                <CartWidget />
            </Link>
        </header>
    );
};

export default Navbar;

