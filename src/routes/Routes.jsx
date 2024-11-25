import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Statistics from '../pages/Statistics'
import ProductDetails from '../pages/ProductDetails'
import Products from '../components/Products'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement:
      <div className='flex justify-center items-center'>
        <h1 className='text-8xl h-96 w-full bg-gradient-to-r from-[#333399] to-[#ff00cc]'>404 pages</h1>
      </div>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../../public/Gadgets-Categories.json'),
        children: [
          {
            path: '/products/:products',
            element: <Products></Products>,
            loader:() => fetch('../../public/Gadgets-data.json')
          }
        ]
      },
      {
        path: '/dashboard/:id',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/product/:id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/public/Gadgets-data.json')
      }
    ]
  }
])
export default routes