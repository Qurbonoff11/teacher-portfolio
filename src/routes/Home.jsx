import ContactSec from "../components/ContactSec.jsx";
import HeroSec from "../components/HeroSec.jsx";
import News from "../components/News.jsx";
import SolutionSec from "../components/solutionSec.jsx";
import WorksSec from "../components/WorksSec.jsx";

const Home = () => {
  return (
    <main className="w-full bg-linear-to-br from-orange-50 via-white to-amber-50">
      <HeroSec />
      <WorksSec />
      <SolutionSec />
      <News />
      <ContactSec />
    </main>
  );
};

export default Home;
