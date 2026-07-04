import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import SearchContext from "../../Context/SearchContext";

function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  return (
    <div className="relative w-full max-w-[420px]">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-indigo-500 transition-colors duration-300" />

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.trimStart())}
        className="
          w-full
          rounded-2xl
          border
          border-indigo-200
          bg-gradient-to-r
          from-white
          via-slate-50
          to-indigo-50
          py-3
          pl-12
          pr-4
          text-slate-800
          caret-indigo-600
          placeholder:text-slate-400
          shadow-lg
          outline-none
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:shadow-xl
          focus:border-indigo-500
          focus:ring-4
          focus:ring-indigo-200
          focus:shadow-2xl
        "
      />
    </div>
  );
}

export default SearchBar;
