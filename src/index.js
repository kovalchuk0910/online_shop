import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  womanProducts: 
    [
      {
        name: "Mini Skirt", 
        img: "https://static.pullandbear.net/2/photos//2022/I/0/1/p/8399/316/800/8399316800_4_1_8.jpg?t=1656932863233&imwidth=563", 
        price: 35, 
        inCart: 1, 
        id: 1.1,
      }, 
      {
        name: "Basic Jeans", 
        img: "https://static.pullandbear.net/2/photos//2022/I/0/1/p/8685/326/400/8685326400_4_1_8.jpg?t=1657798996961&imwidth=563", 
        price: 39, 
        inCart: 1, 
        id: 1.2,
      }, 
      {
        name: "Fit Dress", 
        img: "https://static.pullandbear.net/2/photos//2022/V/0/1/p/4390/422/611/4390422611_4_1_8.jpg?t=1643722977148&imwidth=563", 
        price: 45, 
        inCart: 1, 
        id: 1.3,
      }, 
      {
        name: "Basic Sweatshirt", 
        img: "https://static.pullandbear.net/2/photos//2021/I/0/1/p/8393/363/485/8393363485_4_1_8.jpg?t=1634212398331&imwidth=563", 
        price: 29, 
        inCart: 1, 
        id: 1.4,
      }
    ],
  manProducts: 
  [
    {
      name: "Basic Hoodie", 
      img: "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8591/513/250/05/8591513250_6_1_8.jpg?t=1648556110506&imwidth=563", 
      price: 39, 
      inCart: 1, 
      id: 2.1,
    }, 
    {
      name: "Basic Jeans", 
      img: "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8591/513/827/03/8591513827_6_1_8.jpg?t=1646659329763&imwidth=563", 
      price: 29, 
      inCart: 1, 
      id: 2.2,
    }, 
    {
      name: "Black Shorts", 
      img: "https://static.pullandbear.net/2/photos//2021/I/0/2/p/4695/507/800/4695507800_4_1_8.jpg?t=1629285223879&imwidth=563", 
      price: 19, 
      inCart: 1, 
      id: 2.3,
    }, 
    {
      name: "Naruto Set", 
      img: "https://static.pullandbear.net/2/photos//2022/V/0/2/p/4693/700/800/4693700800_4_1_8.jpg?t=1643120792610&imwidth=563", 
      price: 59, 
      inCart: 1, 
      id: 2.4,
    }
  ],
  cartProducts: [],
    
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case "ADD_PRODUCTS":
      return {...state, cartProducts: [...state.cartProducts, action.payload]}
    case "REMOVE_FROM_CART":
      return {...state, cartProducts: state.cartProducts.filter((event) => event.id !== action.payload)}

      case "INCREMENT_PRODUCT":
        return {
            ...state,
            cartProducts: state.cartProducts.map((item) => {
                if(item.id === action.payload.id) {
                    item.inCart += action.payload.increment;
                }
                return item;
            })
        }

    case "DECREMENT_PRODUCT":
      return {
        ...state,
        cartProducts: state.cartProducts.map((item) => {
            if(item.id === action.payload.id) {
                item.inCart -= action.payload.increment;
            }
            return item;
        })
    }

    default:
      return state
  }
    
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
