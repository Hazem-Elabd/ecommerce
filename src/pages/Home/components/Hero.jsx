import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";
import heroImg from "../../../assets/hero.png";

function Hero() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
              New Collection 2026
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">
              Discover Your{" "}
              <span className="text-indigo-600">Perfect Style</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Explore premium fashion made for every occasion. Find the latest
              trends with quality you can trust.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/products"
                className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Shop Now
              </Link>

              <Link
                to="/products"
                className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Explore
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <img
              src={heroImg}
              alt="Hero"
              className="h-[500px] w-[400px] rounded-3xl object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
