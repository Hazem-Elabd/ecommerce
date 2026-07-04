import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import { useContext } from "react";
import WishlistContext from "../../Context/WishlistContext";

function ProductCard({ product }) {
  if (!product) return null;

  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);

  const isFavorite = isInWishlist(product.id);

  const { id, title, price, image, category, rating } = product;

  return (
    <Link
      to={`/products/${id}`}
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Product Image */}
      <div className="relative bg-slate-100">
        <img
          src={image}
          alt={title}
          className="h-72 w-full object-contain p-6 transition duration-500 group-hover:scale-105"
        />

        {/* Wishlist */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute right-4 top-4 rounded-full p-3 shadow-lg transition ${
            isFavorite
              ? "bg-red-500 text-white"
              : "bg-white hover:bg-red-500 hover:text-white"
          }`}
        >
          <FiHeart fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-sm capitalize text-slate-500">{category}</p>

        <h3 className="mt-2 min-h-14 text-lg font-semibold text-slate-900">
          {title}
        </h3>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1">
          <div className="flex text-yellow-500">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </div>

          <span className="ml-2 text-sm text-slate-500">({rating.rate})</span>
        </div>

        {/* Price */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-600">
            ${price.toFixed(2)}
          </span>

          <button
            onClick={(e) => e.preventDefault()}
            className="rounded-xl bg-indigo-600 p-3 text-white transition hover:bg-indigo-700"
          >
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
