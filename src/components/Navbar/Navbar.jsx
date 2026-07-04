import { Link } from "react-router-dom";
import { useContext } from "react";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import SearchBar from "../SearchBar/SearchBar";
import Container from "../Container/Container";
import CartContext from "../../Context/CartContext";
import WishlistContext from "../../Context/WishlistContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900 shadow-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide text-white">
            ShopX
          </Link>

          {/* Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <Link
                to="/"
                className="font-medium text-slate-200 transition hover:text-indigo-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="font-medium text-slate-200 transition hover:text-indigo-400"
              >
                Products
              </Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-5">
            <button className="text-xl text-slate-200 transition hover:text-white">
              <FiSearch />
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative text-xl text-slate-200 transition hover:text-red-500"
            >
              <FiHeart />

              {wishlistItems.length > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-xl text-slate-200 transition hover:text-white"
            >
              <FiShoppingCart />

              {cartItems.length > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <Link
              to="/login"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              Login
            </Link>

            <SearchBar />
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
