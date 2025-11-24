import Header from "../Header";
import Footer from "../Footer";
import HeroSection from "../../sections/HeroSection";
import OffersSection from "../../sections/OffersSection";
import JourneySection from "../../sections/JourneySection";
import '../../../styles/main.scss';

const SpaceAdventure = () => {
  return (
    <div className="space-adventure">
      <Header />
      <main className="space-adventure__main">
        <HeroSection />
        <OffersSection />
        <JourneySection />
      </main>
      <Footer />
    </div>
  );
}

export default SpaceAdventure;
