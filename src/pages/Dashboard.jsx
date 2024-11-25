import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-purple-500 text-white text-center py-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-lg mt-2">
          Explore the latest gadgets that will take your experience to the next level. 
          From smart devices to the coolest accessories, we have it all!
        </p>

        {/* Buttons for Cart and Wishlist */}
        <div className="flex justify-center gap-4 mt-4">
          <button className="btn btn-outline ">Cart</button>
          <button className="btn btn-primary ">Wishlist</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto mt-8 p-4">
        {/* Cart Section */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-bold">Cart</h2>
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold">Total cost: $999.99</h2>
            <button className="btn btn-outline ">Sort by Price</button>
            <button className="btn btn-primary ">Purchase</button>
          </div>
        </div>

        {/* Cart Item Example */}
        <div className="flex items-center justify-between mt-6 bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            {/* Placeholder for product image */}
            <div className="w-16 h-16 bg-gray-200 rounded"></div>
            <div>
              <h3 className="text-lg font-semibold">Samsung Galaxy S23 Ultra</h3>
              <p className="text-sm text-gray-600">
                Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.
              </p>
              <p className="text-lg font-semibold mt-1">Price: $999.99</p>
            </div>
          </div>
          <button className="btn btn-outline btn-circle btn-sm text-red-500 border-red-500 hover:bg-red-500 hover:text-white">
            ✖
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;




















































// import React, { useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";

// const Dashboard = () => {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Samsung Galaxy S23 Ultra",
//       description:
//         "Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.",
//       price: 999.99,
//     },
//     {
//       id: 2,
//       name: "Samsung Galaxy S24 Ultra",
//       description:
//         "Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.",
//       price: 1000.99,
//     },
//   ]);

//   const [totalCost, setTotalCost] = useState(
//     cartItems.reduce((sum, item) => sum + item.price, 0)
//   );

//   const removeItem = (id) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart);
//     setTotalCost(updatedCart.reduce((sum, item) => sum + item.price, 0));
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Header */}
//       <header className="bg-purple-500 text-white text-center py-8">
//         <h1 className="text-3xl font-bold">Dashboard</h1>
//         <p className="text-lg mt-2">
//           Explore the latest gadgets that will take your experience to the next
//           level. From smart devices to the coolest accessories, we have it all!
//         </p>
//         <div className="flex justify-center mt-4">
//           <button className="btn btn-primary mr-4">Cart</button>
//           <button className="btn btn-outline">Wishlist</button>
//         </div>
//       </header>

//       {/* Cart Section */}
//       <section className="max-w-5xl mx-auto mt-8 bg-white shadow-md p-6 rounded-xl">
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-bold">Cart</h2>
//           <h2 className="text-xl font-semibold">Total cost: ${totalCost.toFixed(2)}</h2>
//         </div>
//         <div className="flex justify-between items-center mt-4">
//           <button className="btn btn-outline">Sort by Price</button>
//           <button className="btn btn-primary">Purchase</button>
//         </div>

//         {/* Cart Items */}
//         <div className="mt-6 space-y-4">
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
//             >
//               <div>
//                 <h3 className="text-lg font-bold">{item.name}</h3>
//                 <p className="text-sm text-gray-600">{item.description}</p>
//                 <p className="text-gray-700 font-semibold mt-2">
//                   Price: ${item.price.toFixed(2)}
//                 </p>
//               </div>
//               <button
//                 onClick={() => removeItem(item.id)}
//                 className="text-red-500 hover:text-red-700 text-2xl"
//               >
//                 <AiOutlineClose />
//               </button>
//             </div>
//           ))}
//           {cartItems.length === 0 && (
//             <p className="text-center text-gray-500 mt-4">Your cart is empty.</p>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Dashboard;
