import { FiHeart, FiStar } from "react-icons/fi";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";

function ProductInfo({ product }) {
  return (
    <div>
      <p className="text-indigo-600 capitalize">{product.category}</p>

      <h1 className="mt-3 text-4xl font-bold text-slate-900">
        {product.title}
      </h1>

      <div className="mt-5 flex items-center gap-2">
        <FiStar className="text-yellow-500" />

        <span>{product.rating.rate}</span>

        <span className="text-slate-500">({product.rating.count} Reviews)</span>
      </div>

      <h2 className="mt-6 text-4xl font-bold text-indigo-600">
        ${product.price}
      </h2>

      <p className="mt-8 leading-8 text-slate-600">{product.description}</p>

      <QuantitySelector />

      <AddToCartButton product={product} />

      <button className="mt-5 flex items-center gap-3 text-lg font-medium text-slate-700 transition hover:text-red-500">
        <FiHeart />
        Add To Wishlist
      </button>
    </div>
  );
}

export default ProductInfo;
