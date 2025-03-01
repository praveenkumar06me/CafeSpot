import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h1 className="text-4xl font-display mb-6">Our Story</h1>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Café Delight has been serving the community with passion and dedication.
              Our journey began with a simple dream: to create a warm and welcoming space where people
              could enjoy exceptional coffee and delicious treats.
            </p>
            <p className="text-gray-600">
              We take pride in sourcing the finest coffee beans from sustainable farms around the world
              and preparing them with care and expertise. Our skilled baristas are committed to crafting
              the perfect cup of coffee for each customer.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Café interior"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;