export default function Contributor() {
  const contributors = [
    {
      name: "Maria Garcia",
      role: "Grandmother & Home Cook",
      location: "Medellín, Colombia",
    },
    {
      name: "Kenji Sato",
      role: "Local Artisan",
      location: "Kyoto, Japan",
    },
    {
      name: "Fatima Ali",
      role: "Community Chef",
      location: "Dearborn, Michigan",
    },
  ];

  return (
    <div className="border-t border-gray-100 pt-12">
      <div className=" text-center flex flex-col items-center">
        <h2 className="text-2xl font-light tracking-widest uppercase text-gray-900 mb-4">
          The Voices Behind the Plate
        </h2>
        <div className="h-1 w-16 bg-[var(--color-coral)]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {contributors.map((contributor, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center p-8 border border-gray-50 hover:border-[var(--color-coral)] transition-colors duration-300"
          >
            {/* Minimalist Avatar Placeholder */}
            <div className="w-24 h-24 rounded-full bg-gray-100 mb-6 group-hover:bg-[var(--color-coral)] group-hover:bg-opacity-10 transition-colors duration-300 flex items-center justify-center">
              <span className="text-gray-400 font-light tracking-widest">
                {contributor.name.charAt(0)}
              </span>
            </div>

            <h3 className="text-lg font-medium text-gray-900 mb-1">
              {contributor.name}
            </h3>
            <p className="text-sm text-[var(--color-teal)] uppercase tracking-widest mb-2">
              {contributor.role}
            </p>
            <p className="text-sm text-gray-400 font-light italic">
              {contributor.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
