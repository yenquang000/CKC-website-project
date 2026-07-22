export default function MissionStatement() {
  return (
    // 1. Added the structural wrappers back so it aligns with the other components in Home.jsx
    <section className="py-2 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* 2. items-start aligns the top edges naturally without forcing padding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-light tracking-widest uppercase text-gray-900 ">
              Mission Statement
            </h2>
            <div className="h-1 w-24 bg-[var(--color-teal)]"></div>
          </div>

          {/* Right Column */}
          <div>
            <p className="text-2xl font-light text-gray-900 leading-relaxed ">
              Food is a cultural artifact.
            </p>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              We promote cultural appreciation rather than appropriation. By
              framing each recipe within its geographical and historical
              migration patterns and indigenous roots. We teach users not just
              how to cook a dish, but why it exists and what it means to the
              people who inherited it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
