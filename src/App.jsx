
import React, { useState } from "react";
import Navbar from "./Navbar";
import Products from "./Product";
import Cart from "./Cart";
import { Routes, Route, useLocation } from "react-router";
import Payment from "./components/Payment";

function App() {
  const location = useLocation();
    return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 gap-6 p-6 top-7 mt-7">
        {location.pathname === "/" && (
          <>
            <Products />
            
          </>
        )}
         <Cart />
        <Routes>
          <Route path="/payment" element={<Payment />} />
         
        </Routes>
      </div>
    </div>
  );
}

export default App;
