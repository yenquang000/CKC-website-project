export default function Gallery({ isPreview = true }) {
  // 1. Added the 'story' property to our mock data!
  const stories = [
    {
      id: 1,
      dish: "Oaxacan Mole Negro",
      origin: "Oaxaca, Mexico",
      contributor: "Rosa Mendez",
      image: "/images/g1.JPG",
      story:
        "A labor-intensive blend of over 30 ingredients, including toasted chiles and chocolate, passed down through generations of Oaxacan matriarchs for celebratory feasts.",
    },
    {
      id: 2,
      dish: "Classic Pho Bo",
      origin: "Hanoi, Vietnam",
      contributor: "The Tran Family",
      image: "/images/g2.JPG",
      story:
        "Originally a humble street food in early 20th-century Hanoi, this slow-simmered bone broth reflects a complex history of French colonial influence and Vietnamese resilience.",
    },
    {
      id: 3,
      dish: "Jollof Rice",
      origin: "Lagos, Nigeria",
      contributor: "Adebayo Okafor",
      image: "/images/g3.JPG",
      story:
        "A deeply debated and fiercely cherished one-pot dish born from the Senegambian region, serving as the ultimate centerpiece for West African celebrations.",
    },
    {
      id: 4,
      dish: "Hand-Pulled Biang Biang",
      origin: "Shaanxi, China",
      contributor: "Wei Chen",
      image: "/images/g4.JPG",
      story:
        "Named for the sound the dough makes as it slaps against the counter, these thick, chewy noodles were historically sustenance for hardworking Shaanxi laborers.",
    },
    {
      id: 5,
      dish: "Traditional Pierogi",
      origin: "Kraków, Poland",
      contributor: "Agnieszka Kowalski",
      image: "/images/g5.JPG",
      story:
        "Initially considered peasant food, these delicate unleavened dough pockets became a vital, comforting survival staple during harsh Eastern European winters.",
    },
    {
      id: 6,
      dish: "Arepas de Queso",
      origin: "Medellín, Colombia",
      contributor: "The Garcia Sisters",
      image: "/images/g6.JPG",
      story:
        "A pre-Columbian indigenous staple made from ground corn dough, representing the resilient culinary backbone of daily life in the Andes mountains.",
    },
  ];

  const displayedStories = isPreview ? stories.slice(0, 3) : stories;

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl font-light tracking-widest uppercase text-gray-900 mb-4">
            {isPreview ? "The Story Behind the Plate" : "Full Culinary Archive"}
          </h2>
          <div className="h-1 w-24 bg-[var(--color-teal)]"></div>
        </div>

        {/* 2. Adjusted gap-y-16 to give the cards more breathing room for the new text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {displayedStories.map((story) => (
            <div key={story.id} className="group cursor-pointer flex flex-col">
              <div className="w-full aspect-square mb-6 group-hover:shadow-lg transition-shadow duration-300 relative overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-[var(--color-coral)] opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                <img
                  src={story.image}
                  alt={story.dish}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-medium text-gray-900 mb-1 group-hover:text-[var(--color-teal)] transition-colors">
                {story.dish}
              </h3>

              <p className="text-sm text-gray-500 font-light tracking-wide mb-2 uppercase">
                {story.origin}
              </p>

              <p className="text-sm text-[var(--color-coral)] italic mb-4">
                Preserved by {story.contributor}
              </p>

              {/* 3. The New Narrative Block! */}
              <p className="text-gray-600 font-light leading-relaxed text-sm border-l-2 border-gray-100 pl-4 group-hover:border-[var(--color-teal)] transition-colors duration-300">
                {story.story}
              </p>
            </div>
          ))}
        </div>

        {isPreview && (
          <div className="mt-16 flex justify-center">
            <a
              href="/archive"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-gray-900 text-gray-900 text-xs uppercase tracking-widest hover:bg-[var(--color-coral)] hover:text-white hover:border-[var(--color-coral)] transition-colors"
            >
              View Full Archive
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
