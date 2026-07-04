import Container from "../../../components/Container/Container";
import ProductCard from "../../../components/ProductCard/ProductCard";
import useProducts from "../../../Hooks/useProducts";
import SkeletonCard from "../../../components/Skeleton/SkeletonCard";

function FeaturedProducts() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Featured Products
            </h2>

            <p className="mt-3 text-slate-500">
              Discover our best-selling products.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </Container>
      </section>
    );
  }
  if (error) {
    return (
      <section className="bg-slate-50 py-20">
        <Container>
          <h2 className="text-center text-2xl text-red-500">{error}</h2>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Featured Products
          </h2>

          <p className="mt-3 text-slate-500">
            Discover our best-selling products.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProducts;
