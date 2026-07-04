import { createContext, useState } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <FilterContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export { FilterProvider };
export default FilterContext;
