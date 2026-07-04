import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <div className="text-7xl">🛒</div>

      <h2 className="mt-6 text-4xl font-bold">Your Cart is Empty</h2>

      <p className="mt-3 text-lg text-slate-500">
        Looks like you haven't added any products yet.
      </p>

      <Link
        to="/products"
        className="mt-8 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default EmptyCart;
