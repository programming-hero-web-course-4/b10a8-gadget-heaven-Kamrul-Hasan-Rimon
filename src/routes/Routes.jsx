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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
          <h1 className="text-8xl font-bold text-purple-700">404</h1>
          <p className="text-xl text-gray-700 mt-4">Page Not Found</p>

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
              loader: () => fetch('../../public/Gadgets-data.json')
            },
            {
              path: '/',
              element: <Products></Products>,
              loader: () => fetch('../../public/Gadgets-data.json')
            }
          ]
        },
        {
          path: '/dashboard/',
          element: <Dashboard></Dashboard>,
          loader: () => fetch('../../public/Gadgets-data.json')
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