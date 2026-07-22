import { Link } from "react-router-dom";

export default function InteractiveMap() {
  const regions = [
    "East Asia",
    "Southeast Asia",
    "South Asia",
    "Middle East",
    "West Africa",
    "East Africa",
    "Latin America",
    "The Caribbean",
    "Eastern Europe",
  ];

  return (
    <section className="py-12 px-4 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-3xl font-light tracking-widest uppercase text-gray-900 mb-4">
            Explore by Region
          </h2>
          <div className="h-1 w-24 bg-[var(--color-coral)]"></div>
          <p className="mt-6 text-gray-500 font-light max-w-xl">
            Select a region to uncover native ingredients, historical migration
            patterns, and the traditional dining customs that define it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 text-center">
          {regions.map((region, index) => {
            const slug = region.toLowerCase().replace(/\s+/g, "-");

            return (
              <Link
                key={index}
                to={`/region/${slug}`}
                className="group cursor-pointer py-8 border-b border-gray-200 hover:border-[var(--color-teal)] transition-colors duration-300 block"
              >
                <h3 className="text-2xl font-light text-gray-400 group-hover:text-[var(--color-teal)] transition-colors duration-300 uppercase tracking-widest">
                  {region}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
