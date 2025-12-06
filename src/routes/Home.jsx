import ContactSec from "../components/ContactSec"
import HeroSec from "../components/HeroSec"
import News from "../components/News"
import SolutionSec from "../components/solutionSec"
import WorksSec from "../components/WorksSec"

const Home = () => {
  return (
    <main className="w-full bg-linear-to-br from-orange-50 via-white to-amber-50">
      <HeroSec/>
      <WorksSec/>
      <SolutionSec/>
      <News/>
      <ContactSec/>
    </main>
  )
}

export default Home