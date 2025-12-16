import CompanionCard from '@/components/CompanionCard';
import CompanionList from '@/components/CompanionList';
import Cta from '@/components/Cta';
import { recentSessions } from '../constants/index';

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard
          id="123"
          name="Neura the brainy Explorer"
          topic="Neural Network of the brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Verba the Vocabluary Builder"
          topic="Building a Strong Vocabulary"
          subject="English"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="Countsy the Number Wizard"
          topic="Counting and Number Sense"
          subject="Mathematics"
          duration={30}
          color="#bde7ff"
        />
      </section>

      <section className='home-section'>
        <CompanionList
          title="Recent Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page