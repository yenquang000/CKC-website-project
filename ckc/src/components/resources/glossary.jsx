import { useState } from "react";

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for the glossary
  const ingredients = [
    {
      name: "Gochugaru",
      origin: "Korea",
      profile: "Smoky, sweet, mild to moderate heat",
      description:
        "A coarsely ground Korean chili powder essential for kimchi and many stews. It provides a vibrant red color and a complex flavor profile that is hard to substitute.",
    },
    {
      name: "Sumac",
      origin: "Middle East",
      profile: "Tangy, lemony, tart",
      description:
        "A deep red spice derived from the dried and ground berries of the sumac flower. Used widely in Levantine cuisine to add acidity without using a liquid like lemon juice.",
    },
    {
      name: "Masa Harina",
      origin: "Mesoamerica",
      profile: "Earthy, corn-forward, nutty",
      description:
        "Traditional flour made from field corn that has undergone nixtamalization (soaking in an alkaline solution). The foundational ingredient for authentic tortillas and tamales.",
    },
    {
      name: "Tamarind Paste",
      origin: "Africa & Asia",
      profile: "Sour, sweet, tangy",
      description:
        "A sticky extract from the pod-like fruit of the tamarind tree. It forms the sour backbone of dishes like Pad Thai, Indian curries, and regional candies.",
    },
    {
      name: "Grains of Paradise",
      origin: "West Africa",
      profile: "Peppery, citrusy, aromatic",
      description:
        "A rare spice from the ginger family. It offers a warm, peppery heat with complex notes of cardamom and citrus, historically used as a substitute for black pepper.",
    },
  ];

  // Filter logic for the search bar
  const filteredIngredients = ingredients.filter(
    (ing) =>
      ing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ing.origin.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className=" px-4 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Header & Search */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl font-light tracking-widest uppercase text-gray-900 mb-4">
            Ingredient Glossary
          </h2>
          <div className="h-1 w-24 bg-[var(--color-coral)] mb-2"></div>

          <div className="w-full max-w-lg relative">
            <input
              type="text"
              placeholder="Search by name or region..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-b-2 border-gray-200 py-3 px-4 text-gray-700 font-light focus:outline-none focus:border-[var(--color-teal)] transition-colors duration-300 placeholder-gray-400 text-center"
            />
          </div>
        </div>

        {/* Glossary List */}
        <div className="space-y-12">
          {filteredIngredients.length > 0 ? (
            filteredIngredients.map((ingredient, index) => (
              <div
                key={index}
                className="group flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 border-b border-gray-200 pb-8 hover:border-[var(--color-coral)] transition-colors duration-300"
              >
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-light text-gray-900 group-hover:text-[var(--color-coral)] transition-colors">
                    {ingredient.name}
                  </h3>
                  <p className="text-sm text-[var(--color-teal)] uppercase tracking-widest mt-1">
                    {ingredient.origin}
                  </p>
                </div>

                <div className="md:w-2/3">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
                    Profile: {ingredient.profile}
                  </p>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {ingredient.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-400 font-light italic">
              No ingredients found matching "{searchTerm}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
