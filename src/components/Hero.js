import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center flex items-center justify-center text-white relative">
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gold">
          Premium Property Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Trusted Real Estate Consultant for Land, Plots & Homes
        </p>
        <a
          href="#contact"
          className="border border-gold px-8 py-3 rounded-full hover:bg-gold hover:text-black transition"
        >
          Get Consultation
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;




