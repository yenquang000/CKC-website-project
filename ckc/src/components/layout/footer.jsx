import { FaInstagram, FaTiktok, FaYoutube, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-20 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        {/* Left Side: Logo */}
        <div>
          <a
            href="/"
            className="text-4xl md:text-5xl font-light tracking-widest uppercase text-gray-900 hover:text-[var(--color-coral)] transition-colors"
          >
            Cultured
          </a>
        </div>

        {/* Right Side: Contact & Socials */}
        <div className="flex flex-col items-center md:items-end gap-8">
          {/* Contact Info */}
          <div className="text-gray-500 font-light text-sm space-y-2 text-center md:text-right tracking-wide">
            <p>
              Email:{" "}
              <a
                href="mailto:thisisnotreal@gmail.com"
                className="hover:text-[var(--color-teal)] transition-colors duration-300"
              >
                thisisnotreal@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:123-456-7890"
                className="hover:text-[var(--color-teal)] transition-colors duration-300"
              >
                123-456-7890
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-8 text-2xl text-gray-900">
            <a
              href="#"
              className="hover:text-[var(--color-coral)] transition-transform duration-300 hover:-translate-y-1"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-teal)] transition-transform duration-300 hover:-translate-y-1"
            >
              <FaTiktok />
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-coral)] transition-transform duration-300 hover:-translate-y-1"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-teal)] transition-transform duration-300 hover:-translate-y-1"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
