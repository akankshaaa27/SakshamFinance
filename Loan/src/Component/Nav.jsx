import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../../public/sflogo.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [showCalcDropdown, setShowCalcDropdown] = useState(false);
  const [showMobileCalcDropdown, setShowMobileCalcDropdown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-gray-800 fixed w-full z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl flex items-center">
              <img src={logo} className="h-8 w-auto mr-2" alt="Saksham Finance Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>

              {/* Loans Dropdown */}
              <div className="relative">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => {
                    setShowDropdown(!showDropdown);
                    setShowCalcDropdown(false); // Close other dropdown
                  }}
                >
                  <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                    Loans
                  </span>
                  <svg
                    className={`ml-1 h-4 w-4 text-gray-300 transition-transform duration-200 ${
                      showDropdown ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-[700px] bg-white text-black rounded-lg shadow-2xl z-50 p-3 border border-gray-200">
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { name: 'Personal Loan', link: '/Personalloan', desc: 'Up to ₹10L in 10 mins' },
                        { name: 'Home Loan', link: '/homeloan', desc: 'From 7.75%* p.a.' },
                        { name: 'Business Loan', link: '/businessloan', desc: 'Up to ₹5L' },
                        { name: 'Education Loan', link: '/educationloan', desc: 'Study abroad' },
                        { name: 'Vehicle Loan', link: '/vehicalloan', desc: '100% financing' },
                        { name: 'Agriculture Loan', link: '/agriculturepage', desc: 'Farmers schemes' },
                        { name: 'Loan Against Property', link: '/loanagainstpropartyloan', desc: 'All loan types' },
                        { name: 'Furniture Loan', link: '/furnitureloanpage', desc: 'Buy home furniture' },
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.link}
                          className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                          onClick={() => setShowDropdown(false)}
                        >
                          <div className="font-semibold text-sm">{item.name}</div>
                          <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Calculators Dropdown */}
              <div className="relative">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => {
                    setShowCalcDropdown(!showCalcDropdown);
                    setShowDropdown(false); // Close other dropdown
                  }}
                >
                  <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                    Calculators
                  </span>
                  <svg
                    className={`ml-1 h-4 w-4 text-gray-300 transition-transform duration-200 ${
                      showCalcDropdown ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {showCalcDropdown && (
                  <div className="absolute right-0 mt-2 w-[700px] bg-white text-black rounded-lg shadow-2xl z-50 p-3 border border-gray-200">
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { name: 'Personal Loan', link: '/persnolcal', desc: 'EMI calculator' },
                        { name: 'Home Loan', link: '/homecal', desc: 'EMI breakdown' },
                        { name: 'Business Loan', link: '/businesscal', desc: 'EMI estimates' },
                        { name: 'Education Loan', link: '/educationcal', desc: 'Financing plan' },
                        { name: 'Vehicle Loan', link: '/vehiclecal', desc: 'Auto loan EMIs' },
                        { name: 'Agriculture Loan', link: '/agriculturecal', desc: 'Farm loan estimates' },
                        { name: 'Loan Against Property', link: '/emical', desc: 'All loan types' },
                        { name: 'Furniture Loan', link: '/furniturecal', desc: 'Furniture finance' },
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.link}
                          className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                          onClick={() => setShowCalcDropdown(false)}
                        >
                          <div className="font-semibold text-sm">{item.name}</div>
                          <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/realestate"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Real Estate
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none flex items-center px-3 py-2 rounded-md text-base font-medium"
              aria-expanded={isOpen}
            >
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Loans Dropdown */}
          <div className="relative">
            <button
              className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between transition-colors duration-200"
              onClick={() => setShowMobileDropdown(!showMobileDropdown)}
            >
              Loans
              <svg
                className={`h-4 w-4 text-gray-300 transition-transform duration-200 ${
                  showMobileDropdown ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`ml-4 mt-1 transition-all duration-300 overflow-hidden ${showMobileDropdown ? 'max-h-96' : 'max-h-0'}`}>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'Personal Loan', link: '/Personalloan' },
                  { name: 'Home Loan', link: '/homeloan' },
                  { name: 'Business Loan', link: '/businessloan' },
                  { name: 'Education Loan', link: '/educationloan' },
                  { name: 'Vehicle Loan', link: '/vehicalloan' },
                  { name: 'Agriculture Loan', link: '/agriculturepage' },
                  { name: 'Loan Against Property', link: '/loanagainstpropartyloan' },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    className="block px-2 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                    onClick={() => {
                      setIsOpen(false);
                      setShowMobileDropdown(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Calculators Dropdown */}
          <div className="relative">
            <button
              className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between transition-colors duration-200"
              onClick={() => setShowMobileCalcDropdown(!showMobileCalcDropdown)}
            >
              Calculators
              <svg
                className={`h-4 w-4 text-gray-300 transition-transform duration-200 ${
                  showMobileCalcDropdown ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`ml-4 mt-1 transition-all duration-300 overflow-hidden ${
                showMobileCalcDropdown ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'Personal Loan', link: '/persnolcal' },
                  { name: 'Home Loan', link: '/homecal' },
                  { name: 'Business Loan', link: '/businesscal' },
                  { name: 'Education Loan', link: '/educationcal' },
                  { name: 'Vehicle Loan', link: '/vehiclecal' },
                  { name: 'Agriculture Loan', link: '/agriculturecal' },
                  { name: 'Loan Against Property', link: '/emical' },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    className="block px-2 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                    onClick={() => {
                      setIsOpen(false);
                      setShowMobileCalcDropdown(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/realestate"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Real Estate
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
