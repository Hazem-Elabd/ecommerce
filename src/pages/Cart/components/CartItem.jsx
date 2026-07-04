import { useContext } from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import CartContext from "../../../Context/CartContext";

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  return (
    <div className="flex items-center gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Product Image */}
      <div className="h-24 w-24 rounded-lg bg-slate-100 p-2">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{item.title}</h2>

        <p className="mt-2 text-slate-500 capitalize">{item.category}</p>

        <p className="mt-2 text-xl font-bold text-indigo-600">
          ${item.price.toFixed(2)}
        </p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            console.log("MINUS CLICKED", item.id);
            decreaseQuantity(item.id);
          }}
          className="rounded-lg border p-2 hover:bg-slate-100"
        >
          <FiMinus />
        </button>

        <span className="text-lg font-semibold">{item.quantity}</span>

        <button
          onClick={() => {
            increaseQuantity(item.id);
          }}
          className="rounded-lg border p-2 hover:bg-slate-100"
        >
          <FiPlus />
        </button>
      </div>

      {/* Remove */}
      <button
        onClick={() => {
          removeFromCart(item.id);
        }}
        className="rounded-lg p-3 text-red-500 hover:bg-red-50"
      >
        <FiTrash2 />
      </button>
    </div>
  );
}

export default CartItem;
