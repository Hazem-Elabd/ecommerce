import { useState } from "react";

function QuantitySelector() {
  const [count, setCount] = useState(1);

  return (
    <div className="mt-8 flex items-center gap-5">
      <button
        onClick={() => count > 1 && setCount(count - 1)}
        className="h-10 w-10 rounded-lg bg-slate-200 text-xl"
      >
        -
      </button>

      <span className="text-xl font-bold">{count}</span>

      <button
        onClick={() => setCount(count + 1)}
        className="h-10 w-10 rounded-lg bg-indigo-600 text-xl text-white"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
