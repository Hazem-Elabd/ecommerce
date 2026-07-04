import CartItem from "./CartItem";

function CartItems({ cartItems }) {
  return (
    <div className="space-y-6">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartItems;
