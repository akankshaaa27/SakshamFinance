import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt,FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  // Open Google Maps for the address
  const openGoogleMaps = () => {
    const address = "Sr No. 19/1, Hingne Home Colony, Karve Nagar, Pune-411052";
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Navigate to a path and scroll to top
  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <h3
              className="text-2xl font-bold mb-6 text-yellow-400 cursor-pointer"
              onClick={() => goToPage('/')}
            >
              Saksham Finance
            </h3>
            <p className="mb-4 text-gray-300">
              Empowering your financial journey with trusted loan solutions and personalized services.
            </p>
            <div className="flex space-x-4 mt-6">
  {/* Facebook */}
  <a 
    href="https://www.facebook.com/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-300 hover:text-yellow-400 transition-colors"
  >
    <FaFacebook size={20} />
  </a>

  {/* Twitter */}
  <a 
    href="https://x.com/Sakshamfinance7?t=Q2n-lo4krjRIeFbI_DcNxw&s=09" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-300 hover:text-yellow-400 transition-colors"
  >
    <FaTwitter size={20} />
  </a>

  {/* Instagram */}
  <a 
    href="https://www.instagram.com/sakshamfinance07?igsh=bGV5MTA2bGN5NWUz" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-300 hover:text-yellow-400 transition-colors"
  >
    <FaInstagram size={20} />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/7276240084"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-yellow-400 transition-colors"
  >
    <FaWhatsapp size={20} />
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => goToPage('/')} className="text-gray-300 hover:text-yellow-400 transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => goToPage('/about')} className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => goToPage('/faq')} className="text-gray-300 hover:text-yellow-400 transition-colors">FAQ</button>
              </li>
              <li>
                <button onClick={() => goToPage('/contact')} className="text-gray-300 hover:text-yellow-400 transition-colors">Contact Us</button>
              </li>
            </ul>
          </div>

          {/* Loan Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Loan Products</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => goToPage('/Personalloan')} className="text-gray-300 hover:text-yellow-400 transition-colors">Personal Loan</button>
              </li>
              <li>
                <button onClick={() => goToPage('/businessloan')} className="text-gray-300 hover:text-yellow-400 transition-colors">Business Loan</button>
              </li>
              <li>
                <button onClick={() => goToPage('/homeloan')} className="text-gray-300 hover:text-yellow-400 transition-colors">Home Loan</button>
              </li>
              <li>
                <button onClick={() => goToPage('/vehicalloan')} className="text-gray-300 hover:text-yellow-400 transition-colors">Car Loan</button>
              </li>
              <li>
                <button onClick={() => goToPage('/educationloan')} className="text-gray-300 hover:text-yellow-400 transition-colors">Education Loan</button>
              </li>
              <li>
                <button onClick={() => goToPage('/furnitureloanpage')} className="text-gray-300 hover:text-yellow-400 transition-colors">Furniture Loan</button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-yellow-400" />
                <span 
                  onClick={openGoogleMaps}
                  className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
                  title="Click to open in Google Maps"
                >
                  Sr No. 19/1, Hingne Home Colony, Karve Nagar, Pune-411052
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-yellow-400" />
                <a href="tel:7276240084" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  7276240084
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-yellow-400" />
                <a href="mailto:sakshamfinance@gmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  sakshamfinance@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Saksham Finance. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <button onClick={() => goToPage('/privacy-policy')} className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => goToPage('/terms_conditions')} className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Terms & Conditions
              </button>
              <button onClick={() => goToPage('/disclaimer')} className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
