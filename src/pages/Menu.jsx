import { motion } from 'framer-motion';

const menuItems = {
  coffee: [
    { name: 'Espresso', price: '3.50', description: 'Rich and bold' },
    { name: 'Cappuccino', price: '4.50', description: 'Espresso with steamed milk and foam' },
    { name: 'Latte', price: '4.75', description: 'Espresso with lots of steamed milk' },
    { name: 'Americano', price: '3.75', description: 'Espresso with hot water' }
  ],
  pastries: [
    { name: 'Croissant', price: '3.25', description: 'Buttery and flaky' },
    { name: 'Chocolate Muffin', price: '3.50', description: 'Rich chocolate flavor' },
    { name: 'Cinnamon Roll', price: '4.00', description: 'Fresh baked daily' },
    { name: 'Blueberry Scone', price: '3.75', description: 'Made with fresh blueberries' }
  ]
};

const Menu = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-display text-center mb-12">Our Menu</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-display mb-6 text-cafe-brown">Coffee</h2>
              <div className="space-y-6">
                {menuItems.coffee.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-start"
                  >
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    <span className="text-cafe-brown">${item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-6 text-cafe-brown">Pastries</h2>
              <div className="space-y-6">
                {menuItems.pastries.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-start"
                  >
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    <span className="text-cafe-brown">${item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;