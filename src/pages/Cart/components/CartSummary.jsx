function CartSummary({ cartItems }) {
  const totalItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>

      <div className="mb-4 flex justify-between">
        <span>Total Items</span>
        <span>{totalItems}</span>
      </div>

      <div className="mb-6 flex justify-between">
        <span>Total Price</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      <button className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartSummary;
