import { FiShoppingBag } from "react-icons/fi";

function ProductsHeader() {
  return (
    <div className="mb-10 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl text-indigo-600">
        <FiShoppingBag />
      </div>

      <h1 className="mt-5 text-4xl font-bold text-slate-900">Our Products</h1>

      <p className="mx-auto mt-4 max-w-2xl text-slate-600">
        Explore our latest collection of premium products. Find everything you
        need with the best quality and unbeatable prices.
      </p>
    </div>
  );
}

export default ProductsHeader;
