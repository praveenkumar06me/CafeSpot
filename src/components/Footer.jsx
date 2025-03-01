import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-cafe-brown text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display mb-4">Greta Caffe</h3>
            <p className="text-sm">Serving happiness one cup at a time</p>
          </div>
          <div>
            <h4 className="text-lg font-display mb-4">Hours</h4>
            <p className="text-sm">Monday - Friday: 7am - 8pm</p>
            <p className="text-sm">Saturday - Sunday: 8am - 9pm</p>
          </div>
          <div>
            <h4 className="text-lg font-display mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cafe-accent transition-colors"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-cafe-accent transition-colors"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-cafe-accent transition-colors"><FaTwitter size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;