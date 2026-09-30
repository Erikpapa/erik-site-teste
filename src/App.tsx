import { SectionOpening } from './components/SectionOpening';
import { SectionSolution } from './components/SectionSolution';
import { SectionOffer } from './components/SectionOffer';

export default function App() {
  return (
    <>
      <SectionOpening />
      <main>
        <SectionSolution />
        <SectionOffer />
      </main>
    </>
  );
}
