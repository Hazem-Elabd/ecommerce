import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";

function Banner() {
  return (
    <section className="py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-slate-900 px-8 py-16 text-white lg:px-20">
          <div className="max-w-2xl">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
              Limited Time Offer
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight lg:text-6xl">
              Summer Sale <br />
              Up To 50% OFF
            </h2>

            <p className="mt-6 text-lg text-slate-200">
              Discover premium fashion at unbeatable prices. Refresh your
              wardrobe with our newest collection.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-block rounded-xl bg-white px-7 py-3 font-semibold text-slate-900 transition duration-300 hover:scale-105 hover:bg-slate-100"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Banner;
