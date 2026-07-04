import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";

import {
  FiShoppingBag,
  FiSmartphone,
  FiWatch,
  FiHeadphones,
} from "react-icons/fi";

function Categories() {
  const categories = [
    {
      id: 1,
      name: "Fashion",
      icon: <FiShoppingBag />,
    },
    {
      id: 2,
      name: "Electronics",
      icon: <FiSmartphone />,
    },
    {
      id: 3,
      name: "Watches",
      icon: <FiWatch />,
    },
    {
      id: 4,
      name: "Accessories",
      icon: <FiHeadphones />,
    },
  ];

  return (
    <section className="bg-white py-20">
      <Container>
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Shop by Category
          </h2>

          <p className="mt-3 text-slate-500">
            Discover products from our most popular categories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/products"
              className="group rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-4xl text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                {category.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-800">
                {category.name}
              </h3>

              <p className="mt-2 text-sm text-slate-500">Explore Collection</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Categories;
