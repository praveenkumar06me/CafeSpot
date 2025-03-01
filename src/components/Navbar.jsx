import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCoffee } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  
  const links = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FaCoffee className="h-8 w-8 text-cafe-brown" />
              <span className="font-display text-xl text-cafe-brown">Greta Caffe</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="relative font-medium text-gray-700 hover:text-cafe-brown transition-colors"
              >
                {location.pathname === to && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-cafe-brown bottom-0"
                    initial={false}
                  />
                )}
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;