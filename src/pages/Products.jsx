import React from "react";
import "./styles/Products.css";

import { useDispatch, useSelector } from "react-redux";

export default function Products(props) {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    
    const cartProducts = selector.cartProducts;
    const products = props.products;

    const addProducts = (id) => {
        let isInCart = false;
        cartProducts.forEach(el => {
            if(id === el.id) {
                isInCart = true
            }
        })
        if(!isInCart) {
            dispatch({type: "ADD_PRODUCTS", payload: products.find((product) => id === product.id)})
        }
    }

    return (    
        <div className="mainProducts">
            {products.map(item => 
                <div className="product" key={item.id}>
                    <img src={item.img} />
                    <h3>{item.name}</h3>
                    <h3>{item.price}$</h3>
                    <button onClick={() => addProducts(item.id)}>Add to Cart</button>
                </div>
            )}
        </div>
    )
}