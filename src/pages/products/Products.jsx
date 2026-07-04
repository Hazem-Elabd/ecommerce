import { useContext, useEffect, useState } from "react";

import ProductsHeader from "./components/ProductsHeader";
import SearchBar from "./components/SearchBar";
import FilterSidebar from "./components/FilterSidebar";
import SortDropdown from "./components/SortDropdown";
import ProductsGrid from "./components/ProductsGrid";
import Pagination from "./components/Pagination";

import Container from "../../components/Container/Container";

import useProducts from "../../Hooks/useProducts";
import SearchContext from "../../Context/SearchContext";
import FilterContext from "../../Context/FilterContext";
import SortContext from "../../Context/SortContext";

function Products() {
  const { products, loading, error } = useProducts();

  const { searchTerm } = useContext(SearchContext);
  const { selectedCategory } = useContext(FilterContext);
  const { sortBy } = useContext(SortContext);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Search + Filter
  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sort
  switch (sortBy) {
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
      break;

    case "name":
      filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;

    default:
      break;
  }

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Return to first page when Search / Filter / Sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <ProductsHeader />

        <SearchBar />

        <div className="mt-10 grid gap-8 lg:grid-cols-4">
          <FilterSidebar />

          <div className="lg:col-span-3">
            <SortDropdown />

            <ProductsGrid
              products={currentProducts}
              loading={loading}
              error={error}
            />

            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Products;
