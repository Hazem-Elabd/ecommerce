import ProductCard from "../../../components/ProductCard/ProductCard";
import SkeletonCard from "../../../components/Skeleton/SkeletonCard";

function ProductsGrid({ products, loading, error }) {
  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <h2 className="text-center text-2xl text-red-500">{error}</h2>;
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-3xl font-bold text-slate-700">
          🔍 No products found
        </h2>

        <p className="mt-3 text-slate-500">
          Try searching with another keyword.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsGrid;
