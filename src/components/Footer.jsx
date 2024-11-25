
export default function Footer() {
  return (
    <div>
      <footer className="bg-white text-gray-700 px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Gadget Heaven</h1>
          <p className="text-gray-500 mt-2">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>

        {/* Links */}
        <div className="flex lg:flex-row justify-center text-center gap-56">
          <div>
            <h2 className="font-bold text-gray-800 mb-4">Services</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Product Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-4">Legal</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
