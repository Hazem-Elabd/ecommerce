import { createContext, useEffect, useState } from "react";

const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");

    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  function toggleWishlist(product) {
    const exists = wishlistItems.find((item) => item.id === product.id);

    if (exists) {
      setWishlistItems(wishlistItems.filter((item) => item.id !== product.id));
    } else {
      setWishlistItems([...wishlistItems, product]);
    }
  }

  function isInWishlist(id) {
    return wishlistItems.some((item) => item.id === id);
  }

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export { WishlistProvider };
export default WishlistContext;
