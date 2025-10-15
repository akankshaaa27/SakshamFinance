import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTractor, FaCalculator, FaSeedling, FaHandHoldingUsd } from 'react-icons/fa';
import { GiFarmTractor, GiFarmer, GiPlantWatering } from 'react-icons/gi';
import { Navigate, useNavigate } from 'react-router-dom';


const AgricultureLoanPage = () => {
  const [landValue, setLandValue] = useState(1000000);
  const [loanAmount, setLoanAmount] = useState(800000);
  const [loanTerm, setLoanTerm] = useState(120);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const calculateEMI = () => {
    const rate = 7.5 / 100 / 12; // Monthly interest rate for agri loans
    const term = loanTerm;
    const principal = loanAmount;
    const emi = principal * rate * Math.pow(1 + rate, term) / (Math.pow(1 + rate, term) - 1);
    return emi.toFixed(2);
  };

  const calculateLTV = () => {
    return ((loanAmount / landValue) * 100).toFixed(1);
  };

  const nevigate =useNavigate()
  const agriLoanFeatures = [
    {
      icon: <FaSeedling className="text-3xl" />,
      title: "Low Interest Rates",
      desc: "Interest rates starting from 7.5% p.a. with flexible tenure"
    },
    {
      icon: <GiFarmTractor className="text-3xl" />,
      title: "Farm Equipment Funding",
      desc: "Get financing for tractors, harvesters, and modern farming tools"
    },
    {
      icon: <GiFarmer className="text-3xl" />,
      title: "Land Development Support",
      desc: "Loans for irrigation, fencing, and land improvement"
    },
    {
      icon: <GiPlantWatering className="text-3xl" />,
      title: "Crop Cultivation",
      desc: "Funds to cover seeds, fertilizers, and other inputs"
    }
  ];

  const navigate = useNavigate();

  const loanPurposes = [
    {
      title: "Purchase Agricultural Land",
      desc: "Buy new land for farming purposes",
      icon: <FaHandHoldingUsd className="text-2xl" />
    },
    {
      title: "Farm Equipment Purchase",
      desc: "Finance modern farming machinery",
      icon: <GiFarmTractor className="text-2xl" />
    },
    {
      title: "Irrigation Setup",
      desc: "Install drip or sprinkler systems",
      icon: <GiPlantWatering className="text-2xl" />
    },
    {
      title: "Crop Production",
      desc: "Cover expenses for seeds, fertilizer, and labor",
      icon: <FaSeedling className="text-2xl" />
    }
  ];

  const faqs = [
    {
      question: "What is the maximum loan amount for agriculture loans?",
      answer: "You can get up to ₹50 lakhs depending on your eligibility and purpose of the loan."
    },
    {
      question: "What documents are required for an agriculture loan?",
      answer: "KYC documents, land ownership proof, crop plan, and income proof."
    },
    {
      question: "How long does agriculture loan approval take?",
      answer: "Usually 5-10 working days after document submission and verification."
    },
    {
      question: "Are there subsidies available?",
      answer: "Yes, government schemes offer subsidies on interest rates for certain crop loans."
    }
  ];

  const testimonials = [
    {
      name: "Ramesh Kumar",
      location: "Punjab",
      content: "Got a tractor loan at 7.5% and improved my farm's productivity greatly.",
      rating: 5
    },
    {
      name: "Sunita Devi",
      location: "Maharashtra",
      content: "Easy process for irrigation system funding. Very supportive staff.",
      rating: 4
    },
    {
      name: "Mahesh Patel",
      location: "Gujarat",
      content: "Quick approval for crop cultivation loan before sowing season.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
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
              Grow Your <span className="text-green-600">Farm</span> with Our Loans
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Agriculture loans up to ₹50 lakhs with low interest and flexible repayment for farmers and agripreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={()=>nevigate('/form')} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                Apply for Agriculture Loan
              </button>
              <button onClick={()=>nevigate('/agriculturecal')} className="border-2 border-green-600 text-green-600 font-semibold py-3 px-6 rounded-lg hover:bg-green-50 transition duration-300 transform hover:scale-105">
               Calculate EMI
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=500&q=80" 
              alt="Farm field"
              className="w-full max-w-lg mx-auto rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Agriculture Loan Calculator</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Plan your farming investments smartly</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 bg-green-50 p-8 rounded-2xl shadow-md">
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Land/Project Value (₹)</label>
                <input 
                  type="range" 
                  min="500000" 
                  max="10000000" 
                  step="50000"
                  value={landValue}
                  onChange={(e) => {
                    setLandValue(e.target.value);
                    setLoanAmount(Math.min(Math.round(e.target.value * 0.8), 5000000));
                  }}
                  className="w-full"
                />
                <span className="text-green-700 font-semibold">₹{(landValue/100000).toFixed(1)} L</span>
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Loan Amount (₹)</label>
                <input 
                  type="range" 
                  min="500000" 
                  max={landValue * 0.9}
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full"
                />
                <span className="text-green-700 font-semibold">₹{(loanAmount/100000).toFixed(1)} L</span>
                <p className="text-sm text-gray-600 mt-2">LTV Ratio: {calculateLTV()}%</p>
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Loan Term (years)</label>
                <input 
                  type="range" 
                  min="1" 
                  max="15" 
                  step="1"
                  value={loanTerm / 12}
                  onChange={(e) => setLoanTerm(e.target.value * 12)}
                  className="w-full"
                />
                <span className="text-green-700 font-semibold">{loanTerm/12} years</span>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-inner">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-gray-600">Monthly EMI</p>
                    <h3 className="text-2xl font-bold text-green-700">₹{calculateEMI()}</h3>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaCalculator className="text-green-600 text-xl" />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Agriculture Loan Benefits</h3>
              <ul className="space-y-4">
                {agriLoanFeatures.map((feature, index) => (
                  <motion.li key={index} whileHover={{ scale: 1.02 }} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
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

      {/* Loan Purposes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Agriculture Loan For Every Need</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Flexible funding solutions for farmers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanPurposes.map((purpose, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {purpose.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{purpose.title}</h3>
                <p className="text-gray-600">{purpose.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Farmers' Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} whileHover={{ y: -10 }} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <img 
                    src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index+60}.jpg`} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Agriculture Loan FAQs</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} className="mb-4 overflow-hidden">
                <button onClick={() => toggleFaq(index)} className="flex justify-between items-center w-full p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-800">{faq.question}</h3>
                  <svg className={`w-5 h-5 text-green-600 transition-transform duration-300 ${activeFaq === index ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === index && (
                  <div className="px-4 bg-gray-50 rounded-b-lg">
                    <p className="py-4 text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Farm?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Get low-interest loans for all your agriculture needs</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button onClick={() => navigate("/form")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-green-600 font-semibold py-3 px-8 rounded-lg shadow-lg">
              Apply Now
            </motion.button>
            <motion.button 
              onClick={() => navigate("/agriculturecal")}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700">
              Get Rate Quote
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgricultureLoanPage;
