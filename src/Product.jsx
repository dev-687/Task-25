
  import React from "react";
  import image1 from '../src/assets/shoes1.png';
  import image2 from '../src/assets/shoes2.png';
  import image3 from '../src/assets/shoes3.png';
  import image4 from '../src/assets/shoes4.png';
  import { useDispatch } from 'react-redux'
  import { addToCart } from "./features/cartSlice";


  const productsData = [
    { id: 1, name: "Puma Men's Sneakers", price: 50, image:image1 },
    { id: 2, name: "Adidas Men's Sneakers", price: 75, image: image2 },
    { id: 3, name: "Asics Men's Sneakers", price: 50, image: image3 },
    { id: 4, name: "Nike Men's Sneakers", price: 75, image: image1 },
    { id: 5, name: "Campus Men's Sneakers", price: 50, image: image2 },
    { id: 6, name: "Sketcher Men's Sneakers", price: 75, image: image3 },
    { id: 7, name: "Asian Men's Sneakers", price: 50, image: image4 },
    { id: 8, name: "Hrx Men's Sneakers", price: 75, image: image1 }
  ];

  function Products() {

    const dispatch=useDispatch();
    
    
    return (
      <div className="grid grid-cols-2 mt-8 gap-x-10 gap-y-6 p-6 justify-between">
        {productsData.map((product) => (
          <div key={product.id} className=" rounded-lg p-4 text-center shadow-md  hover:shadow-lg hover:shadow-gray-400">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
            <div className="bg-amber-100 p-7 border rounded-lg">
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-lg font-bold">${product.price}</p>
            <button
              onClick={() =>dispatch(addToCart(product))}
              className="mt-2 bg-transparent text-black px-2 py-2 rounded-lg border cursor-pointer"
            >
              Add to Cart
            </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  export default Products;