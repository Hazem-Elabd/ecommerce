import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import CartItems from "./components/CartItems";
import CartSummary from "./components/CartSummary";
import EmptyCart from "./components/EmptyCart";

function Cart() {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CartItems cartItems={cartItems} />
        </div>

        <CartSummary cartItems={cartItems} />
      </div>
    </div>
  );
}

export default Cart;
