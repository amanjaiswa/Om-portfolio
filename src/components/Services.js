import React from "react";


function Services() {
  return (
    <section id="services" className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gold mb-12">
          Our Premium Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Residential Buying & Selling",
            "Commercial Land Deals",
            "Investment Consultation",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;