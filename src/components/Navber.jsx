import { Link, useLocation } from "react-router-dom";


export default function Navber() {

const location = useLocation()
const navStyle = location.pathname !== '/'? 'bg-white text-[#9538E2] rounded-t-xl' : 'bg-[#9538E2] text-white rounded-t-xl'
const navStyle2 = location.pathname !== '/' ? '' : 'px-3 pt-3'
const navStyle3 = location.pathname !== '/' ? 'text-purple-500' : 'text-white'
  return (
    <div className={`${navStyle2}`}>
      <div className={`navbar ${navStyle} py-4 px-10 shadow-md`}>
        <div className="flex-1">
          <a className="text-xl font-bold">Gadget Heaven</a>
        </div>

        <div className="flex-none lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className={`btn btn-ghost ${navStyle3}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-500 rounded-lg "
            >
              <li>
                <Link to={'/'} className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to='/statistics' className="hover:underline">Statistics</Link>
              </li>
              <li>
                <Link to={`/Dashboard/`} className="hover:underline">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden lg:flex mr-80 flex-1 justify-center gap-8">
          <Link to={'/'} className="hover:underline">Home</Link>
          <Link to='/statistics' className="hover:underline">Statistics</Link>
          <Link to={`/Dashboard/`} className="hover:underline">Dashboard</Link>
        </div>

        <div className="flex gap-4">
          <button className="btn btn-circle bg-white text-purple-500 hover:bg-purple-700 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.879 4.387m3.83 2.573h6.518m-6.518 0l-3.83-2.573M16.118 10H21l-1 5h-5.828M16.118 10l1.121-6H6l-.121 6"
              />
            </svg>
          </button>

          <button className="btn btn-circle bg-white text-purple-500 hover:bg-purple-700 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l8.32 8.33 8.32-8.33a5.5 5.5 0 000-7.78z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
