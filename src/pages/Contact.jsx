import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-display text-center mb-12">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-cafe-brown text-xl mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Coffee Street<br />
                    Café Town, CT 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhone className="text-cafe-brown text-xl mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Call Us</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-cafe-brown text-xl mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Email Us</h3>
                  <p className="text-gray-600">hello@cafedelight.com</p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cafe-brown focus:ring-cafe-brown"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cafe-brown focus:ring-cafe-brown"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cafe-brown focus:ring-cafe-brown"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cafe-brown text-white py-2 px-4 rounded-md hover:bg-cafe-brown/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;