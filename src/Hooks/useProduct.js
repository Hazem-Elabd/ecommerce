import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../Service/api";

function useProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    }

    getProduct();
  }, [id]);

  return {
    product,
    loading,
    error,
  };
}

export default useProduct;
