import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      <section className="relative h-[600px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"/>
        <div className="absolute inset-0 bg-black/40"/>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl text-white font-display mb-4">Welcome to Greta Caffe</h1>
            <p className="text-xl text-white/90 max-w-xl">Experience the perfect blend of artisanal coffee and delicious treats in our cozy atmosphere.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-display mb-2">Quality Coffee</h3>
            <p className="text-gray-600">Sourced from the finest beans around the world</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-display mb-2">Fresh Pastries</h3>
            <p className="text-gray-600">Baked daily in our kitchen</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-display mb-2">Cozy Atmosphere</h3>
            <p className="text-gray-600">Perfect for work or relaxation</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;