import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import CartContext from "../../../Context/CartContext";

function AddToCartButton({ product }) {
  const { handleAddToCart } = useContext(CartContext);

  return (
    <button
      onClick={() => handleAddToCart(product, 1)}
      className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-indigo-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-indigo-700"
    >
      <FiShoppingCart />
      Add To Cart
    </button>
  );
}

export default AddToCartButton;
