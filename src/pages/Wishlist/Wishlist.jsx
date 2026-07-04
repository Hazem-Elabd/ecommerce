import { useContext } from "react";
import WishlistContext from "../../Context/WishlistContext";
import ProductCard from "../../components/ProductCard/ProductCard";

function Wishlist() {
  const { wishlistItems } = useContext(WishlistContext);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-8 text-4xl font-bold">Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-12 text-center">
          <h2 className="text-2xl font-semibold text-slate-800">
            Your wishlist is empty ❤️
          </h2>

          <p className="mt-3 text-slate-500">
            Add some products to your wishlist and they will appear here.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Wishlist;
