import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCalculator, FaHandHoldingUsd, FaClock, FaUserShield } from 'react-icons/fa';
import { MdOutlinePayments, MdSavings } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const PersonalLoanPage = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const calculateEMI = () => {
    const rate = 8.5 / 100 / 12; // Monthly interest rate
    const term = loanTerm;
    const principal = loanAmount;
    
    const emi = principal * rate * Math.pow(1 + rate, term) / (Math.pow(1 + rate, term) - 1);
    return emi.toFixed(2);
  };

  const features = [
    {
      icon: <FaHandHoldingUsd className="text-3xl" />,
      title: "Quick Disbursal",
      desc: "Get funds transferred to your account within 24 hours of approval"
    },
    {
      icon: <MdOutlinePayments className="text-3xl" />,
      title: "Flexible Repayment",
      desc: "Choose repayment tenure from 12 to 60 months as per your convenience"
    },
    {
      icon: <FaUserShield className="text-3xl" />,
      title: "No Collateral",
      desc: "Unsecured loans without any property or asset as security"
    },
    {
      icon: <MdSavings className="text-3xl" />,
      title: "Competitive Rates",
      desc: "Interest rates starting from just 8.5% per annum"
    }
  ];

  const faqs = [
    {
      question: "What is the minimum and maximum loan amount?",
      answer: "You can avail personal loans from ₹10,000 up to ₹20,00,000 depending on your eligibility."
    },
    {
      question: "What documents are required?",
      answer: "Basic KYC documents like PAN, Aadhaar, salary slips (for salaried) or IT returns (for self-employed), and bank statements of last 6 months."
    },
    {
      question: "How long does approval take?",
      answer: "Most applications are approved within 2 hours of document submission. Disbursal happens within 24 hours of approval."
    },
    {
      question: "Can I prepay the loan?",
      answer: "Yes, you can prepay after 6 months of loan disbursement with minimal prepayment charges."
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Small Business Owner",
      content: "Got my loan approved in just 3 hours! The process was completely digital and hassle-free.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "IT Professional",
      content: "Competitive interest rates and excellent customer service. Highly recommended!",
      rating: 4
    },
    {
      name: "Vikram Singh",
      role: "Doctor",
      content: "Needed funds for my daughter's education. The flexible repayment options helped a lot.",
      rating: 5
    }
  ];

  const navigate =useNavigate();

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
              Personal Loans Made <span className="text-indigo-600">Simple</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get instant approval for personal loans up to ₹20 lakhs at attractive interest rates starting from 8.5% p.a.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={()=>navigate('/form')} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                Apply Now
              </button>
              <button onClick={()=>navigate('/persnolcal')} className="border-2 border-indigo-600 text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-indigo-50 transition duration-300 transform hover:scale-105">
                Calculate EMI
              </button>
            </div>
            <div className="mt-10 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <img 
                    key={item}
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item+20}.jpg`} 
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
                <p className="text-sm text-gray-600">Trusted by 10,000+ customers</p>
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
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Happy customer with money"
              className="w-full max-w-lg mx-auto rounded-xl shadow-2xl"
            />
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block"
            >
              <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-3">
                  <FaClock className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Quick Approval</p>
                  <p className="text-sm text-gray-600">Within 2 hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Loan Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Loan Calculator</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Calculate your EMI and choose the best repayment plan for your needs</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 bg-indigo-50 p-8 rounded-2xl shadow-md">
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Loan Amount (₹)</label>
                <div className="flex items-center">
                  <input 
                    type="range" 
                    min="10000" 
                    max="2000000" 
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-4 text-indigo-700 font-semibold min-w-[100px] text-right">
                    ₹{loanAmount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹10K</span>
                  <span>₹20L</span>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Loan Term (months)</label>
                <div className="flex items-center">
                  <input 
                    type="range" 
                    min="12" 
                    max="60" 
                    step="1"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-4 text-indigo-700 font-semibold min-w-[50px] text-right">
                    {loanTerm} months
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>12</span>
                  <span>60</span>
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
                    <p className="font-medium">8.5% - 15% p.a.</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Total Interest</p>
                    <p className="font-medium">₹{(calculateEMI() * loanTerm - loanAmount).toLocaleString('en-IN', {maximumFractionDigits: 0})}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Why Choose Our Personal Loan?</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
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
                <h3 className="font-semibold text-xl mb-3">Eligibility Criteria</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="mr-2" /> Minimum age: 21 years
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-2" /> Minimum income: ₹15,000/month
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-2" /> CIBIL score: 650+
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-2" /> Indian resident
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get your personal loan in just 3 simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Apply Online",
                desc: "Fill our simple application form in just 2 minutes",
                icon: "1"
              },
              {
                title: "Upload Documents",
                desc: "Submit soft copies of required documents",
                icon: "2"
              },
              {
                title: "Get Money",
                desc: "Receive funds directly in your bank account",
                icon: "3"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Trusted by thousands of happy customers across India</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index+30}.jpg`} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about personal loans</p>
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
                  className="flex justify-between items-center w-full p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
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
                  className="px-4 bg-white rounded-b-lg overflow-hidden"
                >
                  <p className="py-4 text-gray-600 border-t border-gray-100">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Apply for a personal loan today and get funds in your account within 24 hours</p>
          <motion.button
              onClick={() => navigate("/form")} // Navigate to form page
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg"
          >
            Apply Now
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default PersonalLoanPage;