import { useContext } from "react";
import FilterContext from "../../../Context/FilterContext";

function FilterSidebar() {
  const { selectedCategory, setSelectedCategory } = useContext(FilterContext);

  const categories = [
    "All",
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
  ];

  return (
    <aside className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-xl font-bold text-slate-900">Filters</h2>

      <div>
        <h3 className="mb-4 font-semibold text-slate-700">Categories</h3>

        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-3"
            >
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
              />

              <span className="capitalize">{category}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default FilterSidebar;
