import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCheck, 
  FaCalculator, 
  FaMobileAlt, 
  FaLaptop, 
  FaTabletAlt, 
  FaHeadphones,
  FaCamera,       // ✅ Added
  FaClock,        // ✅ Added
  FaHome          // ✅ Added
} from 'react-icons/fa';

import { MdOutlinePayments, MdElectricBolt } from 'react-icons/md';

// Image imports
const deviceHeroImg = 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
const customer1Img = 'https://randomuser.me/api/portraits/women/45.jpg';
const customer2Img = 'https://randomuser.me/api/portraits/men/32.jpg';
const customer3Img = 'https://randomuser.me/api/portraits/women/68.jpg';
const customer4Img = 'https://randomuser.me/api/portraits/men/55.jpg';

const ElectricDeviceLoanPage = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [interestRate, setInterestRate] = useState(10.5);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const calculateEMI = () => {
    const rate = interestRate / 100 / 12; // Monthly interest rate
    const term = loanTerm; // Already in months
    const principal = loanAmount;
    
    const emi = principal * rate * Math.pow(1 + rate, term) / (Math.pow(1 + rate, term) - 1);
    return emi.toFixed(2);
  };

  const features = [
    {
      icon: <MdElectricBolt className="text-3xl" />,
      title: "Instant Approval",
      desc: "Get approved within minutes with minimal documentation"
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: "All Devices Covered",
      desc: "Smartphones, laptops, tablets, cameras, and smart devices"
    },
    {
      icon: <MdOutlinePayments className="text-3xl" />,
      title: "No Down Payment",
      desc: "100% financing with zero down payment options"
    },
    {
      icon: <FaHeadphones className="text-3xl" />,
      title: "Buy Now, Pay Later",
      desc: "Enjoy your device now with flexible EMI options"
    }
  ];

  const faqs = [
    {
      question: "What devices are eligible for financing?",
      answer: "All electronic devices including smartphones (₹10,000+), laptops (₹25,000+), tablets, cameras, smartwatches, and home appliances from partner retailers."
    },
    {
      question: "What documents are required?",
      answer: "Just your KYC (Aadhaar/PAN), latest salary slip (if salaried), and bank statement for last 3 months."
    },
    {
      question: "How quickly can I get the device?",
      answer: "Instant approval at partner stores - walk out with your device immediately after approval."
    },
    {
      question: "Can I prepay the loan?",
      answer: "Yes, you can prepay after 3 EMIs with just 1% foreclosure charges."
    },
    {
      question: "Is insurance included?",
      answer: "Optional device protection plan available at nominal cost covering damage and theft."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Graphic Designer",
      content: "Got my new MacBook on EMI with zero down payment. Process took just 10 minutes at the store!",
      rating: 5,
      img: customer1Img
    },
    {
      name: "Rahul Verma",
      role: "Student",
      content: "Financed my smartphone over 12 months. Perfect for students with limited budget.",
      rating: 4,
      img: customer2Img
    },
    {
      name: "Ananya Patel",
      role: "Photographer",
      content: "Purchased my professional camera gear through their financing. No hidden charges!",
      rating: 5,
      img: customer3Img
    }
  ];

  const deviceTypes = [
    { name: "Smartphones", icon: <FaMobileAlt className="text-2xl" /> },
    { name: "Laptops", icon: <FaLaptop className="text-2xl" /> },
    { name: "Tablets", icon: <FaTabletAlt className="text-2xl" /> },
    { name: "Cameras", icon: <FaCamera className="text-2xl" /> },
    { name: "Smartwatches", icon: <FaClock className="text-2xl" /> },
    { name: "Appliances", icon: <FaHome className="text-2xl" /> },
  ];

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
              Device Financing <span className="text-indigo-600">at 10.5%*</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Upgrade your tech without upfront payment. Get the latest devices with easy EMI options and instant approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                Apply Now
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-indigo-50 transition duration-300 transform hover:scale-105">
                Calculate EMI
              </button>
            </div>
            <div className="mt-10 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[customer4Img, customer1Img, customer2Img].map((img, index) => (
                  <img 
                    key={index}
                    src={img} 
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
                <p className="text-sm text-gray-600">Trusted by 50,000+ customers</p>
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
              src={deviceHeroImg} 
              alt="Electronic Devices"
              className="w-full max-w-lg mx-auto rounded-xl shadow-2xl"
            />
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block"
            >
              <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-3">
                  <MdElectricBolt className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Instant Approval</p>
                  <p className="text-sm text-gray-600">Within minutes</p>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">EMI Calculator</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Calculate your monthly payments for any device</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 bg-indigo-50 p-8 rounded-2xl shadow-md">
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Device Price (₹)</label>
                <div className="flex items-center">
                  <input 
                    type="range" 
                    min="10000" 
                    max="200000" 
                    step="1000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-4 text-indigo-700 font-semibold min-w-[120px] text-right">
                    ₹{loanAmount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹10K</span>
                  <span>₹2L</span>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Interest Rate (%)</label>
                <div className="flex items-center">
                  <input 
                    type="range" 
                    min="8" 
                    max="18" 
                    step="0.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-4 text-indigo-700 font-semibold min-w-[50px] text-right">
                    {interestRate}%
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>8%</span>
                  <span>18%</span>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Loan Term (months)</label>
                <div className="flex items-center">
                  <input 
                    type="range" 
                    min="3" 
                    max="24" 
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
                  <span>3</span>
                  <span>24</span>
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
                    <p className="text-gray-600 text-sm">Total Interest</p>
                    <p className="font-medium">₹{(calculateEMI() * loanTerm - loanAmount).toLocaleString('en-IN', {maximumFractionDigits: 0})}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Total Payment</p>
                    <p className="font-medium">₹{(calculateEMI() * loanTerm).toLocaleString('en-IN', {maximumFractionDigits: 0})}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Benefits of Device Financing</h3>
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
                    <FaCheck className="mr-2" /> Age: 18-65 years
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-2" /> Minimum income ₹15,000/month
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-2" /> Valid ID and address proof
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-2" /> Device must be from partner retailer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Devices You Can Finance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From smartphones to home appliances</p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {deviceTypes.map((device, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600 text-2xl">
                  {device.icon}
                </div>
                <h3 className="font-medium text-gray-800">{device.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get your device in 4 simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Select Device",
                desc: "Choose your device at any partner store or online",
                icon: "1"
              },
              {
                title: "Apply In-Store",
                desc: "Complete 2-minute application with store executive",
                icon: "2"
              },
              {
                title: "Instant Approval",
                desc: "Get approval decision within minutes",
                icon: "3"
              },
              {
                title: "Take It Home",
                desc: "Walk out with your device immediately after approval",
                icon: "4"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow border border-gray-100"
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Trusted by tech enthusiasts across India</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.img} 
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about device financing</p>
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
                  className="flex justify-between items-center w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
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
                  <p className="py-4 text-gray-600 border-t border-gray-200">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Upgrade Your Tech Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Get the latest devices with easy EMIs and instant approval</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg"
          >
            Apply Now
          </motion.button>
          <p className="mt-4 text-indigo-100">*Terms and conditions apply</p>
        </div>
      </section>
    </div>
  );
};

export default ElectricDeviceLoanPage;