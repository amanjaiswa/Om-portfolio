import React from "react";

function Properties() {
  return (
    <section id="properties" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Featured Properties</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
              alt="Plot"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Residential Plot</h3>
              <p>Prime Location</p>
              <p className="text-orange-500 font-bold">Contact for Price</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="House"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Independent House</h3>
              <p>City Center</p>
              <p className="text-orange-500 font-bold">Contact for Price</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
              alt="Land"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Commercial Land</h3>
              <p>High Growth Area</p>
              <p className="text-orange-500 font-bold">Contact for Price</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Properties;