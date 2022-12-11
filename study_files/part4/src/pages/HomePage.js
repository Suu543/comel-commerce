import ProductCarouselComponent from "../components/user/ProductCarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";

const HomePage = () => {
  return (
    <>
      <section>
        <ProductCarouselComponent />
        <CategoryCardComponent />
      </section>
    </>
  );
};

export default HomePage;
