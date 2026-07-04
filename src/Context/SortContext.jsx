import { createContext, useState } from "react";

const SortContext = createContext();

function SortProvider({ children }) {
  const [sortBy, setSortBy] = useState("default");

  return (
    <SortContext.Provider
      value={{
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </SortContext.Provider>
  );
}

export { SortProvider };
export default SortContext;
