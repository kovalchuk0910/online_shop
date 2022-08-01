import React, { useState } from "react";
import "./styles/Cart.css";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const cartProducts = selector.cartProducts;

    const removeItem = (id) => {
        dispatch({type: "REMOVE_FROM_CART", payload: id})
    }

    let total = [];
    let totalPrice = 0;

    (function addTotalPrice() {
        if(cartProducts.length > 0) {
            cartProducts.map(item => {
                total.push(item.inCart * item.price);
            })
            totalPrice = total.reduce((prev, curr) => prev + curr);
        }
    })()

    function incrementProduct(id) {
        dispatch({type: "INCREMENT_PRODUCT", payload: {id, increment: 1}})
    }

    function decrementProduct(id, inCart) {
        inCart <= 1 ? removeItem(id) : dispatch({type: "DECREMENT_PRODUCT", payload: {id, increment: 1}})
    }
    
    return(
        <div className="cart">
            {cartProducts.length > 0 ? cartProducts.map(item => 
                <div className="cartItem" key={item.id}>
                    <img src={item.img} />
                    <div className="cartItemInfo">
                        <div className="itemInfo">
                            <h3>{item.name}</h3>
                            <h3>{item.price}$</h3>
                        </div>
                        <div className="quantity">
                            <button onClick={() => decrementProduct(item.id, item.inCart)}>-</button>
                            <p>{item.inCart}</p>
                            <button onClick={() => incrementProduct(item.id)}>+</button>
                        </div>
                        <div className="totalProductPrice">
                            <h3>Total: {item.inCart * item.price}$</h3>
                        </div>
                        <div className="itemDelete">
                            <button onClick={() => removeItem(item.id)}><img src={require('../images/icons/trashCanIcon.png')} /></button>
                        </div>
                    </div>
                </div>
            ): <h1>Cart is empty</h1>}
            {cartProducts.length > 0 ? <h1 className="totalPrice">Total Price: {totalPrice}$</h1> : <></>}
        </div>
    )
}