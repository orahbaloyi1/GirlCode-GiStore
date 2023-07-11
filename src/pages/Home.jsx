import HeroSec from "../components/HeroSec";
import CategorySection from "../components/CategorySection";
import DealsSection from "../components/DealsSection";
import MainLayout from "../Layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <HeroSec />
      <CategorySection />
      <DealsSection />
    </MainLayout>
  );
};
export default Home;
