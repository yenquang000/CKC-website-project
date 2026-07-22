import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm flex justify-between items-center p-8 border-b border-gray-100">
        <a
          href="#home"
          className="text-2xl font-light tracking-widest uppercase hover:text-[var(--color-coral)] transition-colors"
        >
          Cultured
        </a>

        <div className="space-x-8 text-sm tracking-widest uppercase">
          <a
            href="#about"
            className="hover:text-[var(--color-teal)] transition-colors"
          >
            About
          </a>
          <a
            href="#explore"
            className="hover:text-[var(--color-teal)] transition-colors"
          >
            Explore
          </a>
          <a
            href="#resources"
            className="hover:text-[var(--color-teal)] transition-colors"
          >
            Resources
          </a>
        </div>
      </nav>

      <main>
        <Home />
      </main>
    </div>
  );
}
