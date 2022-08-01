import React from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div className="home">
            <div className="productsList">
                <div className="imageBlock">
                    <img src={require('../images/homePage/womans.jpg')} className="productsImg"></img>
                </div>
                <h2>Womans</h2>
                <button><Link to="/womans" className="btn">Buy</Link></button>
            </div>

            <div className="productsList">
                <div className="imageBlock">
                    <img src={require('../images/homePage/mans.jpg')} className="productsImg"></img>
                </div>
                <h2>Mans</h2>
                <button><Link to="/mans" className="btn">Buy</Link></button>
            </div>
            
        </div>
    )
}