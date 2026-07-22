import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
export default function Region() {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const regionalData = {
    "east-asia": {
      name: "East Asia",
      ingredientSummary:
        "Focuses heavily on umami, fermentation, and balance. Fermented bean pastes and soy are foundational.",
      ingredientsList: [
        "Soy Sauce & Miso",
        "Gochugaru",
        "Rice Vinegar",
        "Sesame Oil",
      ],
      migration:
        "Influenced by ancient imperial trade and the spread of Buddhism, which introduced vegetarian traditions and tofu. Rice and wheat (via noodles and dumplings) form the dual carbohydrate pillars.",
      customs:
        "Meals are often served family-style. Chopsticks are the primary utensil, and there is a strong emphasis on the visual harmony, balance of colors, and texture of the meal.",
    },
    "southeast-asia": {
      name: "Southeast Asia",
      ingredientSummary:
        "A foundational balance of sweet, sour, salty, and spicy. Dishes rely heavily on fresh aromatics rather than dried spices.",
      ingredientsList: [
        "Lemongrass & Galangal",
        "Tamarind Paste",
        "Fermented Fish Sauce",
        "Bird's Eye Chili",
      ],
      migration:
        "Shaped extensively by ancient maritime trade routes. Chinese diaspora introduced wok-hei and noodles, while early Indian traders brought curries and coconut milk integrations.",
      customs:
        "Meals are traditionally communal and served all at once rather than in courses. Rice acts as the central canvas of the meal, with various shared proteins placed in the center.",
    },
    "south-asia": {
      name: "South Asia",
      ingredientSummary:
        "Built on incredibly complex spice blends, aromatics, and rich, slow-simmered gravies.",
      ingredientsList: [
        "Turmeric & Cumin",
        "Green Cardamom",
        "Ghee (Clarified Butter)",
        "Fresh Coriander",
      ],
      migration:
        "A vibrant tapestry woven from ancient Indus Valley civilizations, the ancient Silk Road, and the opulent culinary traditions of the Mughal Empire which brought Persian influences.",
      customs:
        "Meals are often served 'thali' style (a platter with multiple small dishes). Eating with the right hand is a deeply rooted custom that honors a tactile connection with the food.",
    },
    "middle-east": {
      name: "Middle East",
      ingredientSummary:
        "Characterized by herbaceous, tart, and aromatic profiles, utilizing wood-fired techniques and abundant olive oil.",
      ingredientsList: [
        "Sumac & Za'atar",
        "Pomegranate Molasses",
        "Tahini",
        "Saffron",
      ],
      migration:
        "Deeply rooted in nomadic Bedouin traditions and shaped by the vast reach of the Ottoman Empire, bridging the culinary gap between Europe, Asia, and Africa.",
      customs:
        "Hospitality is paramount. Meals usually begin with a 'mezze' (an array of small shared plates), and flatbreads often double as both a staple carbohydrate and the primary utensil.",
    },
    "west-africa": {
      name: "West Africa",
      ingredientSummary:
        "Defined by deep, earthy flavors, foundational starches, and complex, slowly simmered one-pot stews.",
      ingredientsList: [
        "Red Palm Oil",
        "Scotch Bonnet Peppers",
        "Grains of Paradise",
        "Yams & Cassava",
      ],
      migration:
        "Shaped by ancient Trans-Saharan trade routes. The culinary techniques here heavily influenced global cuisine through the devastating impact of the transatlantic slave trade.",
      customs:
        "Communal dining is central to community building. Hearty stews are typically eaten alongside a pounded starch (like fufu), which is pinched off by hand and used to scoop the rich sauces.",
    },
    "east-africa": {
      name: "East Africa",
      ingredientSummary:
        "A beautiful fusion of indigenous staples paired with a heavy reliance on warm coastal spices and coconut.",
      ingredientsList: [
        "Berbere Spice Blend",
        "Injera (Teff Flour)",
        "Cardamom",
        "Coconut Milk",
      ],
      migration:
        "The Swahili coast was a massive hub for the ancient Indian Ocean spice trade, blending indigenous African ingredients with robust Indian and Arab influences.",
      customs:
        "In the Horn of Africa, meals are served on a massive, shared flatbread (injera) that acts as the plate. Diners tear off pieces of the bread to scoop up the meats and lentils.",
    },
    "latin-america": {
      name: "Latin America",
      ingredientSummary:
        "A vibrant, acidic, and earthy flavor profile anchored by indigenous crops and slow-roasting techniques.",
      ingredientsList: [
        "Masa (Nixtamalized Corn)",
        "Aji Amarillo & Guajillo",
        "Black Beans",
        "Fresh Cilantro",
      ],
      migration:
        "A complex collision of ancient Mesoamerican and Andean civilizations (Mayan, Aztec, Incan) with Spanish and Portuguese colonization, plus later waves of global immigration.",
      customs:
        "Food is fiercely tied to family and celebration. Meals are often lengthy, social affairs, and street food culture acts as a vital, daily communal gathering space.",
    },
    "the-caribbean": {
      name: "The Caribbean",
      ingredientSummary:
        "Bold, fiery, and slightly sweet, heavily utilizing tropical fruits, distinct jerk marinades, and fresh seafood.",
      ingredientsList: [
        "Allspice (Pimento)",
        "Scotch Bonnet",
        "Plantains",
        "Fresh Thyme",
      ],
      migration:
        "A resilient culinary history forged from the indigenous Taino people, the African diaspora, and waves of European colonial, Indian, and Chinese indentured influences.",
      customs:
        "Outdoor cooking and barbecue are culturally significant. Weekend communal meals, often featuring slow-cooked stews or roasted meats, are a staple of community life.",
    },
    "eastern-europe": {
      name: "Eastern Europe",
      ingredientSummary:
        "Hearty, comforting, and deeply reliant on root vegetables, delicate dumplings, and preservation techniques.",
      ingredientsList: [
        "Fresh Dill",
        "Beetroot",
        "Caraway Seeds",
        "Sour Cream (Smetana)",
      ],
      migration:
        "Shaped heavily by harsh, cold climates necessitating pickling, smoking, and fermentation, as well as the historical shifting of Slavic empires and nomadic tribes.",
      customs:
        "Generous hospitality is non-negotiable. Meals are characterized by hearty portions, a deep respect for bread, and often accompanied by communal toasting.",
    },
  };

  const region = regionalData[id];
  if (!region) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <nav className="p-8 border-b border-gray-100 mb-16">
        <a
          href="/"
          className="text-2xl font-light tracking-widest uppercase hover:text-[var(--color-coral)] transition-colors"
        >
          Cultured
        </a>
      </nav>

      <main className="max-w-5xl mx-auto px-4 pb-32">
        <header className="mb-24 text-center flex flex-col items-center">
          <p className="text-[var(--color-teal)] uppercase tracking-widest text-sm mb-4">
            Regional Archive
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
            {region.name}
          </h1>
          <div className="h-1 w-32 bg-[var(--color-coral)]"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <section className="group">
            <div className="h-px w-full bg-gray-200 mb-8 group-hover:bg-[var(--color-teal)] transition-colors duration-300"></div>
            <h2 className="text-xl font-medium uppercase tracking-widest mb-4 group-hover:text-[var(--color-teal)] transition-colors duration-300">
              Native Ingredients
            </h2>
            <p className="text-gray-500 font-light leading-relaxed mb-4">
              {region.ingredientSummary}
            </p>
            <ul className="text-sm text-gray-700 font-light space-y-2 uppercase tracking-wide">
              {region.ingredientsList.map((ingredient, index) => (
                <li key={index}>• {ingredient}</li>
              ))}
            </ul>
          </section>

          <section className="group">
            <div className="h-px w-full bg-gray-200 mb-8 group-hover:bg-[var(--color-coral)] transition-colors duration-300"></div>
            <h2 className="text-xl font-medium uppercase tracking-widest mb-4 group-hover:text-[var(--color-coral)] transition-colors duration-300">
              Migration Patterns
            </h2>
            <p className="text-gray-500 font-light leading-relaxed">
              {region.migration}
            </p>
          </section>

          <section className="group">
            <div className="h-px w-full bg-gray-200 mb-8 group-hover:bg-[var(--color-teal)] transition-colors duration-300"></div>
            <h2 className="text-xl font-medium uppercase tracking-widest mb-4 group-hover:text-[var(--color-teal)] transition-colors duration-300">
              Dining Customs
            </h2>
            <p className="text-gray-500 font-light leading-relaxed">
              {region.customs}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
