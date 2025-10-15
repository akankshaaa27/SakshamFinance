import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaHome, FaCalculator, FaPiggyBank, FaClipboardCheck } from 'react-icons/fa';
import { MdRealEstateAgent, MdOutlineVerifiedUser, MdEmojiPeople } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const HomeLoanPage = () => {
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [loanAmount, setLoanAmount] = useState(4000000);
  const [loanTerm, setLoanTerm] = useState(240);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const calculateEMI = () => {
    const rate = 8.4 / 100 / 12; // Monthly interest rate for home loans
    const term = loanTerm;
    const principal = loanAmount;
    
    const emi = principal * rate * Math.pow(1 + rate, term) / (Math.pow(1 + rate, term) - 1);
    return emi.toFixed(2);
  };

  const calculateLTV = () => {
    return ((loanAmount / propertyValue) * 100).toFixed(1);
  };

  const homeLoanFeatures = [
    {
      icon: <FaHome className="text-3xl" />,
      title: "High Loan Amount",
      desc: "Get up to 90% of property value (up to ₹10 crores)"
    },
    {
      icon: <FaPiggyBank className="text-3xl" />,
      title: "Low Interest Rates",
      desc: "Interest rates starting from 8.4% p.a. with flexible tenure"
    },
    {
      icon: <MdRealEstateAgent className="text-3xl" />,
      title: "Wide Property Coverage",
      desc: "Finance for apartments, villas, plots, and construction"
    },
    {
      icon: <MdOutlineVerifiedUser className="text-3xl" />,
      title: "Balance Transfer",
      desc: "Transfer your existing home loan to save on interest"
    }
  ];

  const loanPurposes = [
    {
      title: "Buy New Home",
      desc: "Purchase your dream home from our partner projects",
      icon: <FaHome className="text-2xl" />
    },
    {
      title: "Construct House",
      desc: "Fund your construction on purchased plot",
      icon: <MdRealEstateAgent className="text-2xl" />
    },
    {
      title: "Home Extension",
      desc: "Expand your existing residential property",
      icon: <MdEmojiPeople className="text-2xl" />
    },
    {
      title: "Home Improvement",
      desc: "Renovate or upgrade your current home",
      icon: <FaClipboardCheck className="text-2xl" />
    }
  ];

  const faqs = [
    {
      question: "What is the maximum loan amount for a home loan?",
      answer: "You can get up to ₹10 crores or 90% of the property value (whichever is lower) for salaried individuals. For self-employed, it's up to ₹7.5 crores or 80% of property value."
    },
    {
      question: "What documents are required for home loan application?",
      answer: "KYC documents, property papers, income proof (salary slips/IT returns), bank statements, and processing fee cheque. For construction loans, approved plans and cost estimates are also needed."
    },
    {
      question: "How long does home loan approval take?",
      answer: "Approval typically takes 3-7 working days after document submission. Disbursement happens after property verification and legal clearance, usually within 15-30 days of approval."
    },
    {
      question: "Are there any prepayment charges?",
      answer: "Most banks allow prepayment without charges for floating rate loans. Fixed rate loans may have prepayment penalties (usually 2-3% of outstanding amount)."
    }
  ];

  const testimonials = [
    {
      name: "Sanjay Patel",
      location: "Mumbai",
      content: "Got my home loan at 8.5% when others were offering 9%+. The entire process was transparent and completed in 3 weeks.",
      rating: 5
    },
    {
      name: "Ananya Reddy",
      location: "Bangalore",
      content: "The loan officer helped me understand each step. I got ₹75 lakhs for my 2BHK without any hassle.",
      rating: 4
    },
    {
      name: "Rohit Malhotra",
      location: "Delhi",
      content: "Transferred my existing home loan and saved ₹12,000 per month in EMIs. Highly recommend their services!",
      rating: 5
    }
  ];


  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
              Own Your <span className="text-indigo-600">Dream Home</span> Today
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get home loans up to ₹10 crores at attractive interest rates starting from 8.4% p.a. with flexible repayment up to 30 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={()=>navigate('/form')} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                Apply for Home Loan
              </button>
              <button onClick={()=>navigate('/homecal')} className="border-2 border-indigo-600 text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-indigo-50 transition duration-300 transform hover:scale-105">
                Calculate EMI
              </button>
            </div>
            <div className="mt-10 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <img 
                    key={item}
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item+50}.jpg`} 
                    alt="Home owner"
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
                <p className="text-sm text-gray-600">10,000+ Homes Funded</p>
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
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Modern home"
              className="w-full max-w-lg mx-auto rounded-xl shadow-2xl"
            />
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block"
            >
              <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-3">
                  <FaHome className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Up to ₹10 Cr</p>
                  <p className="text-sm text-gray-600">Home Loan</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Home Loan Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Home Loan Calculator</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Calculate your EMI and plan your home purchase</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 bg-indigo-50 p-8 rounded-2xl shadow-md">
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Property Value (₹)</label>
                <div className="flex items-center">
                  <input 
                    type="range" 
                    min="1000000" 
                    max="20000000" 
                    step="100000"
                    value={propertyValue}
                    onChange={(e) => {
                      setPropertyValue(e.target.value);
                      // Auto-set loan amount to 80% of property value
                      setLoanAmount(Math.min(Math.round(e.target.value * 0.8), 100000000));
                    }}
                    className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-4 text-indigo-700 font-semibold min-w-[120px] text-right">
                    ₹{(propertyValue / 1000000).toFixed(1)} Cr
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹10L</span>
                  <span>₹20Cr</span>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Loan Amount (₹)</label>
                <div className="flex items-center">
                  <input 
                    type="range" 
                    min="1000000" 
                    max={propertyValue * 0.9}
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-4 text-indigo-700 font-semibold min-w-[120px] text-right">
                    ₹{(loanAmount / 1000000).toFixed(1)} Cr
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹10L</span>
                  <span>₹{(propertyValue * 0.9 / 1000000).toFixed(1)} Cr</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">LTV Ratio: {calculateLTV()}%</p>
              </div>
              
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Loan Term (years)</label>
                <div className="flex items-center">
                  <input 
                    type="range" 
                    min="5" 
                    max="30" 
                    step="1"
                    value={loanTerm / 12}
                    onChange={(e) => setLoanTerm(e.target.value * 12)}
                    className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-4 text-indigo-700 font-semibold min-w-[50px] text-right">
                    {loanTerm / 12} years
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5</span>
                  <span>30</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-inner">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-gray-600">Monthly EMI</p>
                    <h3 className="text-2xl font-bold text-indigo-700">₹{calculateEMI()}</h3>
                  </div>
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <FaCalculator className="text-indigo-600 text-xl" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 text-sm">Interest Rate</p>
                    <p className="font-medium">8.4% - 9.5% p.a.</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Total Interest</p>
                    <p className="font-medium">₹{(calculateEMI() * loanTerm - loanAmount).toLocaleString('en-IN', {maximumFractionDigits: 0})}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Home Loan Benefits</h3>
              <ul className="space-y-4">
                {homeLoanFeatures.map((feature, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-3 rounded-full mr-4 flex-shrink-0">
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
              
              <div className="mt-8 bg-indigo-600 text-white p-6 rounded-xl">
                <h3 className="font-semibold text-xl mb-3">Home Loan Eligibility</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="mr-2" /> Age: 21-65 years (at loan maturity)
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-2" /> Income: ₹25,000+ monthly (salaried)
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-2" /> CIBIL Score: 750+ preferred
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-2" /> Property should be in approved locations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Loan Purposes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Home Loan For Every Need</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer customized home financing solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanPurposes.map((purpose, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {purpose.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{purpose.title}</h3>
                <p className="text-gray-600">{purpose.desc}</p>
                <button className="mt-4 text-indigo-600 font-medium text-sm hover:underline">
                  Learn more
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Home Loan Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get your home loan in 5 simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                title: "Application",
                desc: "Submit basic details online or at branch",
                icon: "1"
              },
              {
                title: "Documentation",
                desc: "Provide KYC, income & property documents",
                icon: "2"
              },
              {
                title: "Processing",
                desc: "Verification of documents & credit check",
                icon: "3"
              },
              {
                title: "Approval",
                desc: "Loan sanction based on eligibility",
                icon: "4"
              },
              {
                title: "Disbursement",
                desc: "Amount released after property check",
                icon: "5"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-5 rounded-lg text-center"
              >
                <div className="w-12 h-12 bg-indigo-600 text-white font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-3">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Happy Home Owners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See what our customers say about their home loan experience</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
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
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Home Loan FAQs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get answers to common home financing questions</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4 overflow-hidden"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition text-left"
                >
                  <h3 className="font-medium text-gray-800">{faq.question}</h3>
                  <svg 
                    className={`w-5 h-5 text-indigo-600 transition-transform duration-300 ${activeFaq === index ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeFaq === index ? 'auto' : 0,
                    opacity: activeFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="px-4 bg-gray-50 rounded-b-lg overflow-hidden"
                >
                  <p className="py-4 text-gray-600">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Own Your Dream Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Get the best home loan rates and make your home ownership dream come true</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              onClick={() => navigate("/form")} // Navigate to form page
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg"
            >
              Apply Now
            </motion.button>
            <motion.button
              onClick={() => navigate("/homecal")} // Navigate to calculator page
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition"
            >
              Get Rate Quote
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeLoanPage;