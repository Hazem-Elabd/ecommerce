import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="mb-8">
      <div className="relative">
        <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-slate-400" />

        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-xl border border-slate-300 bg-white py-4 pl-14 pr-4 outline-none transition focus:border-indigo-600"
        />
      </div>
    </div>
  );
}

export default SearchBar;
