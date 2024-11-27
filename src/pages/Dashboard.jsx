
import { Outlet, useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import Wishlist from "./WishList";
import { useEffect, useState } from "react";
import { allAddToCart, removecart } from '../utilities';

const Dashboard = () => {
  const [gadgets, setGadgets] = useState([])
  useEffect(() => {
    const addtocart = allAddToCart()
    setGadgets(addtocart)
  }, [])
  const handleremove = (id) => {
    removecart(id)
    const addtocart = allAddToCart()
    setGadgets(addtocart)
  }
  const handlesort = (sortbyprice) => {

    if (sortbyprice === 'price') {
      const addtocart1 = allAddToCart()
      const sorted = addtocart1.sort((a, b) => b.price - a.price)
      setGadgets(sorted)
    }
  }
  const [totalCost, setTotalCost] = useState(0)
  const handletotalcost = () => {
    const addtocart2 = allAddToCart()
    const total = addtocart2.reduce((sum, item) => sum + item.price, 0)
    setTotalCost(total)
  }
  useEffect(() => {
    handletotalcost(gadgets)
  }, [gadgets])
  // const data = useLoaderData()
  const [active, setActive] = useState('cart')
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-purple-500 text-white text-center py-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-lg mt-2">
          Explore the latest gadgets that will take your experience to the next level.
          From smart devices to the <br /> coolest accessories, we have it all!
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <button onClick={() => setActive('cart')} className={`btn ${active === 'cart' ? 'btn-primary' : 'btn-outline'} w-32`}>Cart</button>
          <button onClick={() => setActive('wishlist')} className={`btn ${active === 'wishlist' ? 'btn-primary' : 'btn-outline'} w-32`}>Wishlist</button>
        </div>
      </div>

      <Outlet></Outlet>
      {
        active === 'cart' ? <Cart setTotalCost={setTotalCost} gadgets={gadgets} setGadgets={setGadgets} handleremove={handleremove} handlesort={handlesort} totalCost={totalCost}></Cart> : <Wishlist></Wishlist>
      }
    </div>
  );
};

export default Dashboard;



