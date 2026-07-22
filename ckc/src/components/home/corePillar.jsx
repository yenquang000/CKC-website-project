export default function CorePillars() {
  const pillars = [
    {
      title: "Authentic Recipes",
      description:
        "Discover indigenous ingredients and traditional cooking methods preserved by local artisans and home cooks.",
      accent: "bg-[#FF7F50]", // Coral
    },
    {
      title: "Historical Origins",
      description:
        "Understand the geographical context and migration patterns that shaped the dishes we share today.",
      accent: "bg-[#008080]", // Teal
    },
    {
      title: "Fostering Empathy",
      description:
        "Bridging cultural gaps and building community through the universal language of food.",
      accent: "bg-[#FF7F50]", // Coral
    },
  ];

  return (
    <section className="py-12 px-4 bg-white border-t border-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {pillars.map((pillar, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className={`h-1 w-12 mb-6 ${pillar.accent}`}></div>
            <h3 className="text-lg font-medium text-gray-900 mb-4 tracking-widest uppercase">
              {pillar.title}
            </h3>
            <p className="text-gray-500 font-light leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
