
import React from "react";
import { NavLink, useLocation } from 'react-router'
import { addToCart, removeFromCart } from "./features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
    const location = useLocation();
    const dispatch=useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    return (
        <div className="p-6 m-10 border fixed bg-gray-200 top-10 right-0 w-1/2  rounded-lg shadow-lg shadow-gray-400">
            <h2 className="text-lg font-semibold">Cart</h2>
            {cartItems.length === 0 && <p className="text-gray-500">Cart is empty</p>}
            {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b py-2">
                    <span>
                        <img src={item.image} alt={item.name} className="w-full h-10 object-cover mb-2" />
                    </span>
                    <span>{item.name}</span>
                    <span>${item.price}</span>


                    <button
                        onClick={() =>dispatch( removeFromCart({id:item.id}))}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                        onClick={() => dispatch(addToCart(item))}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                        +
                    </button>
                </div>
            ))}
            <h3 className="font-bold mt-4">Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>

            <div className="mt-2 text-center">
                {
                    location.pathname === '/' &&  cartItems.length > 0 && (
                        <NavLink
                            to="/payment"
                            type="button"
                            className="text-center border rounded-xl bg-blue-500 text-white px-4 py-2"
                        >
                            Proceed to Pay
                        </NavLink>
                    )
                }
                {
                    location.pathname === '/payment' && (
                        <NavLink
                            to="/"
                            type="button"
                            className="text-center border rounded-xl bg-blue-500 text-white px-4 py-2"
                        >
                            Continue Shopping
                        </NavLink>
                    )
                }
                
            </div>


        </div>

    );
}

export default Cart;