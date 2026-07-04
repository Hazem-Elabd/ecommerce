import Container from "../../../components/Container/Container";

function Newsletter() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="rounded-3xl bg-white px-8 py-16 shadow-lg">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
              Newsletter
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Stay Updated
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Subscribe to our newsletter and be the first to know about new
              arrivals, exclusive offers, and special discounts.
            </p>

            <form className="mt-10 flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-indigo-600"
              />

              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Newsletter;
