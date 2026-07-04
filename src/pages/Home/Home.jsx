import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Banner from "./components/Banner";
import Newsletter from "./components/Newsletter";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Banner />
      <Newsletter />
    </>
  );
}

export default Home;
