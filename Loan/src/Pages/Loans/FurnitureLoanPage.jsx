import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCouch, FaTruckMoving, FaFileInvoiceDollar, FaRegSmile } from 'react-icons/fa';
import { MdAttachMoney, MdTrendingUp, MdChair, MdHome } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const FurnitureLoanPage = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const calculateEMI = () => {
    const rate = 9.5 / 100 / 12; // Monthly interest rate for furniture loans
    const term = loanTerm;
    const principal = loanAmount;

    const emi =
      (principal * rate * Math.pow(1 + rate, term)) /
      (Math.pow(1 + rate, term) - 1);
    return emi.toFixed(2);
  };

  const furnitureFeatures = [
    {
      icon: <MdAttachMoney className="text-3xl" />,
      title: "Affordable Loans",
      desc: "Get loans starting from just ₹50,000 for furniture purchases."
    },
    {
      icon: <FaCouch className="text-3xl" />,
      title: "Upgrade Your Lifestyle",
      desc: "Finance your dream furniture without straining your savings."
    },
    {
      icon: <FaTruckMoving className="text-3xl" />,
      title: "Quick Approvals",
      desc: "Get instant approval and fast disbursement directly to your account."
    },
    {
      icon: <MdTrendingUp className="text-3xl" />,
      title: "Flexible Repayment",
      desc: "Easy EMIs with tenure options ranging from 6 to 48 months."
    }
  ];

  const furnitureTypes = [
    {
      title: "Home Furniture Loan",
      desc: "Finance sofas, beds, dining tables, and more.",
      icon: <MdHome className="text-2xl" />
    },
    {
      title: "Office Furniture Loan",
      desc: "Upgrade your office interiors and workstations.",
      icon: <MdChair className="text-2xl" />
    },
    {
      title: "Interior Upgrade Loan",
      desc: "Renovate and redesign your interiors seamlessly.",
      icon: <FaCouch className="text-2xl" />
    },
    {
      title: "Luxury Furniture Loan",
      desc: "Bring home premium and designer furniture hassle-free.",
      icon: <FaRegSmile className="text-2xl" />
    }
  ];

  const faqs = [
    {
      question: "What is the maximum amount I can borrow?",
      answer: "You can borrow anywhere between ₹50,000 to ₹10,00,000 based on your eligibility and repayment capacity."
    },
    {
      question: "Is collateral required for a furniture loan?",
      answer: "Most furniture loans are unsecured, meaning you don't need to provide collateral."
    },
    {
      question: "How quickly will the loan be approved?",
      answer: "Loan approvals are typically done within 24-48 hours after submission of required documents."
    },
    {
      question: "Can I prepay the furniture loan?",
      answer: "Yes, you can prepay after 6 months of repayment with minimal prepayment charges."
    }
  ];

  const testimonials = [
    {
      name: "Ananya Verma",
      business: "Home Owner",
      content: "Thanks to this furniture loan, I was able to renovate my living room without worrying about my budget!",
      rating: 5
    },
    {
      name: "Rohan Singh",
      business: "Freelancer",
      content: "Got an office furniture loan to set up my workspace at home. Super quick approval process!",
      rating: 4
    },
    {
      name: "Meera Patel",
      business: "Interior Designer",
      content: "This service made upgrading my client's home interiors seamless and affordable.",
      rating: 5
    }
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Furnish Your Home with <span className="text-purple-600">Easy Financing</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get furniture loans up to ₹10 lakhs with flexible repayment options and competitive interest rates starting from 9.5% p.a.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/form')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              >
                Apply for Furniture Loan
              </button>
              <button
                onClick={() => navigate('/furniturecal')}
                className="border-2 border-purple-600 text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-purple-50 transition duration-300 transform hover:scale-105"
              >
                Calculate EMI
              </button>
            </div>
            <div className="mt-10 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <img
                    key={item}
                    src={`https://i.pravatar.cc/150?img=${item + 30}`}
                    alt="Happy customer"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">Trusted by 3,000+ happy homeowners</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <img
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Beautiful furniture"
              className="w-full max-w-lg mx-auto rounded-xl shadow-2xl"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80';
              }}
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block"
            >
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-3">
                  <MdAttachMoney className="text-purple-600 text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Up to ₹10 L</p>
                  <p className="text-sm text-gray-600">Furniture Loan</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Furniture Loan Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Furniture Loan Calculator</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Plan your repayments with our easy EMI calculator.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Calculator */}
            <div className="lg:w-1/2 bg-purple-50 p-8 rounded-2xl shadow-md">
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Loan Amount (₹)</label>
                <div className="flex items-center">
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-4 text-purple-700 font-semibold min-w-[100px] text-right">
                    ₹{(loanAmount / 1000).toFixed(0)}k
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹50k</span>
                  <span>₹10L</span>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Loan Term (months)</label>
                <div className="flex items-center">
                  <input
                    type="range"
                    min="6"
                    max="48"
                    step="1"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-4 text-purple-700 font-semibold min-w-[50px] text-right">
                    {loanTerm} months
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>6</span>
                  <span>48</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-inner">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-gray-600">Monthly EMI</p>
                    <h3 className="text-2xl font-bold text-purple-700">₹{calculateEMI()}</h3>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <FaFileInvoiceDollar className="text-purple-600 text-xl" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 text-sm">Interest Rate</p>
                    <p className="font-medium">9.5% - 16% p.a.</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Total Interest</p>
                    <p className="font-medium">
                      ₹{(calculateEMI() * loanTerm - loanAmount).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Furniture Loan Features</h3>
              <ul className="space-y-4">
                {furnitureFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-3 rounded-full mr-4 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                        <p className="text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FurnitureLoanPage;