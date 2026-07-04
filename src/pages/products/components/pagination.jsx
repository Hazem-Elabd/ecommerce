function Pagination({ currentPage, setCurrentPage, totalPages }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mt-10 flex items-center justify-center gap-3">
      <button
        onClick={() => setCurrentPage((page) => page - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border px-4 py-2 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => setCurrentPage(number)}
          className={`rounded-lg px-4 py-2 transition ${
            currentPage === number
              ? "bg-indigo-600 text-white"
              : "border hover:bg-slate-100"
          }`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((page) => page + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border px-4 py-2 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
