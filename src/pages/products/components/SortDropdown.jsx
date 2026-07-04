import { useContext } from "react";
import SortContext from "../../../Context/SortContext";

function SortDropdown() {
  const { sortBy, setSortBy } = useContext(SortContext);

  return (
    <div className="mb-6 flex items-center justify-end gap-3">
      <label htmlFor="sort" className="text-sm font-medium text-slate-700">
        Sort By
      </label>

      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="rounded-lg border border-slate-300 bg-white px-4 py-2 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
      >
        <option value="default">Default</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rating</option>
        <option value="name">Name: A → Z</option>
      </select>
    </div>
  );
}

export default SortDropdown;
