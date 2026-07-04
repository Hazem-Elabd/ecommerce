import { useEffect, useState } from "react";
import api from "../Service/api";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  return {
    products,
    loading,
    error,
  };
}

export default useProducts;
