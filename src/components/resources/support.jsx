export default function Support() {
  const faqs = [
    {
      question: "How can I submit my family's recipe?",
      answer:
        "We are currently accepting story submissions for our next digital volume. Please use the contact link below to connect with our editorial team. We prioritize stories that highlight historical migration and indigenous roots.",
    },
    {
      question: "How do you ensure cultural accuracy?",
      answer:
        "We work directly with the home cooks, local artisans, and community elders who contribute these recipes. Every narrative is framed by the lived experiences of the people who inherited the dish.",
    },
  ];

  const sourcingLinks = [
    {
      title: "Diaspora Co.",
      desc: "Equitable, single-origin spices directly from partner farms.",
    },
    {
      title: "Masienda",
      desc: "Heirloom corn and traditional masa tools supporting smallholder farmers.",
    },
    {
      title: "Fly By Jing",
      desc: "Uncensored Chinese flavors and ethically sourced Sichuan ingredients.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white border-t border-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-24 text-center flex flex-col items-center">
          <h2 className="text-3xl font-light tracking-widest uppercase text-gray-900 mb-4">
            Support & Info
          </h2>
          <div className="h-1 w-24 bg-[var(--color-teal)]"></div>
        </div>

        <div className="space-y-32">
          {/* FAQ Section */}
          <section>
            <h3 className="text-xl font-medium uppercase tracking-widest text-gray-900 mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-[var(--color-coral)]"></span>
              Frequently Asked Questions
            </h3>
            <div className="space-y-10 pl-12 border-l border-gray-100">
              {faqs.map((faq, index) => (
                <div key={index} className="group">
                  <h4 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-[var(--color-teal)] transition-colors duration-300">
                    {faq.question}
                  </h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Community Guidelines */}
          <section>
            <h3 className="text-xl font-medium uppercase tracking-widest text-gray-900 mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-[var(--color-coral)]"></span>
              Community Guidelines
            </h3>
            <div className="bg-gray-50 p-10 border-l-2 border-[var(--color-coral)]">
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Cultured is built on the belief that food is a universal
                language meant to bridge gaps, not widen them. We ask all
                community members to operate with appreciation over
                appropriation.
              </p>
              <ul className="space-y-3 text-sm text-gray-500 font-light uppercase tracking-wide">
                <li>• Respect the origins and histories of every dish.</li>
                <li>• Center the voices of the inheriting culture.</li>
                <li>• Engage with curiosity and empathy.</li>
              </ul>
            </div>
          </section>

          {/* Contacts */}
          <section className="text-center pt-16 border-t border-gray-100">
            <h3 className="text-xl font-medium uppercase tracking-widest text-gray-900 mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-500 font-light mb-8 max-w-md mx-auto">
              Have a question, a story to share, or want to report an issue? Our
              inbox is always open.
            </p>
            <a className="inline-block px-10 py-4 bg-[var(--color-teal)] text-white text-xs uppercase tracking-widest hover:bg-[var(--color-coral)] transition-colors shadow-sm">
              Contact Us
            </a>
          </section>
        </div>
      </div>
    </section>
  );
}
