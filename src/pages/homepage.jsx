import CorePillars from "../components/home/corePillar";
import Gallery from "../components/exploration/gallery";
import InteractiveMap from "../components/exploration/interactiveMap";
import MissionStatement from "../components/about/missionStatement";
import Contributor from "../components/about/contributor";
import Impact from "../components/about/impacts";
import Glossary from "../components/resources/glossary";
import Support from "../components/resources/support";

export default function Home() {
  return (
    <>
      <section
        id="home"
        // Changed min-h-[80vh] to pt-32 pb-16 to pull the Core Pillars up
        className="flex flex-col items-center justify-center text-center px-4 pt-8 pb-8"
      >
        <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-tight text-gray-900">
          Culinary storytelling. <br />
          <span className="text-[var(--color-coral)]">
            Cultural preservation.
          </span>
        </h2>

        <p className="text-lg text-gray-500 max-w-2xl mb-12 font-light leading-relaxed">
          Discover the histories behind authentic regional dishes.
          <br />
          Cultured connects recipes with the stories of the people who inherited
          them.
        </p>

        <a
          href="#explore"
          className="inline-block px-10 py-4 bg-[var(--color-teal)] text-white text-xs uppercase tracking-widest hover:bg-[var(--color-coral)] transition-colors shadow-sm"
        >
          Explore the Map
        </a>
      </section>

      <CorePillars />

      {/* Added flex and gap-y-12 to control spacing between these stacked components */}
      <div id="about" className="scroll-mt-24 flex flex-col ">
        <MissionStatement />
        <Impact />
        <Contributor />
      </div>

      <div id="explore" className="scroll-mt-24 flex flex-col ">
        <Gallery />
        <InteractiveMap />
      </div>

      <div id="resources" className="scroll-mt-24 flex flex-col ">
        <Glossary />
        <Support />
      </div>
    </>
  );
}
