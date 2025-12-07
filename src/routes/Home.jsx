import ContactSec from "../components/sections/Home/ContactSec.jsx";
import HeroSec from "../components/sections/Home/HeroSec.jsx";
import News from "../components/sections/Home/News.jsx";
import SolutionSec from "../components/sections/Home/SolutionSec.jsx";
import WorksSec from "../components/sections/Home/WorksSec.jsx";

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
