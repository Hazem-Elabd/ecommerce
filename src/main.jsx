import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import { WishlistProvider } from "./Context/WishlistContext";
import { CartProvider } from "./Context/CartContext.jsx";
import { SearchProvider } from "./Context/SearchContext.jsx";
import { FilterProvider } from "./Context/FilterContext.jsx";
import { SortProvider } from "./Context/SortContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchProvider>
      <FilterProvider>
        <SortProvider>
          <CartProvider>
            <WishlistProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </WishlistProvider>
          </CartProvider>
        </SortProvider>
      </FilterProvider>
    </SearchProvider>
  </StrictMode>,
);
