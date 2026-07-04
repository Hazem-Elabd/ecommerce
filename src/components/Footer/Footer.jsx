import { Link } from "react-router-dom";
import Container from "../Container/Container";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <Link to="/" className="text-3xl font-extrabold tracking-wider">
              <span className="text-indigo-500">Shop</span>
              <span className="text-white">X</span>
            </Link>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Your trusted destination for fashion, electronics and lifestyle
              products. Shop with confidence and enjoy the best deals every day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/wishlist" className="hover:text-white transition">
                  Wishlist
                </Link>
              </li>

              <li>
                <Link to="/cart" className="hover:text-white transition">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Customer Service</h3>

            <ul className="space-y-3 text-slate-400">
              <li>Help Center</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>

            <ul className="space-y-3 text-slate-400">
              <li>Email: support@shopx.com</li>
              <li>Phone: +20 100 123 4567</li>
              <li>Egypt</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 py-6 text-center text-sm text-slate-400">
          Shopx.com.eg
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
