import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./styles/Layout.css";

export default function Layout() {
    const cartProducts = useSelector(state => state.cartProducts);

    return (
        <>
            <header className="header">
                <div className="links">
                    <NavLink to="/home" className="link">Home</NavLink>
                    <NavLink to="/about" className="link">About</NavLink>
                </div>

                <div className="siteName">
                    <h3>Clothes Shop</h3>
                </div>

                <div className="cartBlock">
                    <NavLink to="/cart" className="link">Cart</NavLink>
                    <img src={require('../images/icons/cartIcon.png')} />
                    <span>{cartProducts.length}</span>
                </div>
            </header>

            <Outlet />

            <footer className="footer">

            </footer>
        </>
    )
}