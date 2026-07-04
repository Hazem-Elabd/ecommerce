import Container from "../../components/Container/Container";
import useProduct from "../../Hooks/useProduct";

import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";

function ProductDetails() {
  const { product, loading, error } = useProduct();

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ProductImage image={product.image} title={product.title} />

          <ProductInfo product={product} />
        </div>
      </Container>
    </section>
  );
}

export default ProductDetails;
