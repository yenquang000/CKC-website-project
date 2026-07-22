import MissionStatement from "./missionStatement";
import Contributor from "./contributor";

export default function Impacts() {
  // Made-up statistics to demonstrate the scale of Cultured's impact
  const stats = [
    {
      label: "Regions Documented",
      value: "24",
      accent: "text-[var(--color-teal)]",
    },
    {
      label: "Stories Preserved",
      value: "150+",
      accent: "text-[var(--color-coral)]",
    },
    {
      label: "Global Contributors",
      value: "85",
      accent: "text-[var(--color-teal)]",
    },
    {
      label: "Active Explorers",
      value: "12k+",
      accent: "text-[var(--color-coral)]",
    },
  ];

  return (
    <section className="py-2 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* 2. NEW: The Cultured Impact Stats Section */}
        <div className="py-24 my-24 border-y border-gray-100">
          <div className="mb-16 text-center flex flex-col items-center">
            <h2 className="text-2xl font-light tracking-widest uppercase text-gray-900 mb-4">
              Cultured By The Numbers
            </h2>
            <div className="h-1 w-16 bg-gray-900"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-default"
              >
                {/* 
                  The numbers will slightly scale up on hover 
                  using alternating coral and teal colors 
                */}
                <span
                  className={`text-5xl md:text-7xl font-light transition-transform duration-500 group-hover:scale-110 ${stat.accent}`}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
