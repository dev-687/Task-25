
import React, { useState } from "react";
import Navbar from "./Navbar";
import Products from "./Product";
import Cart from "./Cart";
import useItems from "./context/CartContext";
import { Routes, Route, useLocation } from "react-router";
import Payment from "./components/Payment";

function App() {
  const {cartItems, addToCart,removeFromCart}=useItems();
  const location = useLocation();
    return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 gap-6 p-6 top-7 mt-7">
        {location.pathname === "/" && (
          <>
            <Products addToCart={addToCart} />
            
          </>
        )}
         <Cart cartItems={cartItems} removeFromCart={removeFromCart} addToCart={addToCart} />
        <Routes>
          <Route path="/payment" element={<Payment />} />
         
        </Routes>
      </div>
    </div>
  );
}

export default App;
