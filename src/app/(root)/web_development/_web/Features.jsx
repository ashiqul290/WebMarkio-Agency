import React from 'react'

const Features = () => {
      const features = [
    "Expand Your Reach",
    "Higher Annualized",
    "Book Your Provider",
    "Secure Multi-usable",
    "Advanced Analytics",
    "Easy Integration",
  ];
  return (
    <>
     {/* Features */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-blue-400 text-xs">
            Features
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Our Solutions
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Boost customer engagement to strengthen relationships and
            drive loyalty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-5" />

              <h3 className="text-xl font-semibold">
                {item}
              </h3>

              <p className="text-gray-400 mt-3">
                A complete solution built for modern businesses and
                customer growth.
              </p>
            </div>
          ))}
        </div>
      </section> 
    </>
  )
}

export default Features
