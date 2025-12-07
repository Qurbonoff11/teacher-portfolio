import HeroSec from "../components/sections/About/HeroSec";
import StatsSec from "../components/sections/About/StatsSec";
import VisionSec from "../components/sections/About/VisionSec";
import TeamSec from "../components/sections/About/TeamSec";

const About = () => {
  return (
    <main className="w-full min-h-screen bg-linear-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <HeroSec />
      <StatsSec />
      <VisionSec />
      <TeamSec />
    </main>
  );
};

export default About;
