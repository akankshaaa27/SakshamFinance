import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaChartLine, FaBuilding, FaHandshake, FaFileInvoiceDollar } from 'react-icons/fa';
import { MdBusinessCenter, MdAttachMoney, MdTrendingUp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const BusinessLoanPage = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanTerm, setLoanTerm] = useState(24);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const calculateEMI = () => {
    const rate = 10.5 / 100 / 12; // Monthly interest rate for business loans
    const term = loanTerm;
    const principal = loanAmount;

    const emi = principal * rate * Math.pow(1 + rate, term) / (Math.pow(1 + rate, term) - 1);
    return emi.toFixed(2);
  };

  const businessFeatures = [
    {
      icon: <MdAttachMoney className="text-3xl" />,
      title: "High Loan Amounts",
      desc: "Get funding from ₹5 lakhs up to ₹2 crores for your business needs"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Growth Financing",
      desc: "Funds for expansion, equipment purchase, or working capital"
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Flexible Terms",
      desc: "Repayment periods from 1 to 5 years to match your cash flow"
    },
    {
      icon: <MdTrendingUp className="text-3xl" />,
      title: "Competitive Rates",
      desc: "Interest rates starting from 10.5% with quick processing"
    }
  ];

  const businessTypes = [
    {
      title: "Working Capital Loan",
      desc: "Manage day-to-day operations and cash flow",
      icon: <FaFileInvoiceDollar className="text-2xl" />
    },
    {
      title: "Equipment Financing",
      desc: "Purchase machinery or upgrade technology",
      icon: <MdBusinessCenter className="text-2xl" />
    },
    {
      title: "Business Expansion",
      desc: "Open new locations or increase production",
      icon: <FaBuilding className="text-2xl" />
    },
    {
      title: "Startup Funding",
      desc: "Launch your new business venture",
      icon: <FaChartLine className="text-2xl" />
    }
  ];

  const faqs = [
    {
      question: "What types of businesses are eligible?",
      answer: "We fund sole proprietorships, partnerships, LLPs, private limited companies, and MSMEs with at least 2 years of operation or 1 year for startups with strong financial projections."
    },
    {
      question: "What collateral is required?",
      answer: "Collateral requirements vary based on loan amount and business profile. We offer both secured and unsecured business loan options."
    },
    {
      question: "How long does the approval process take?",
      answer: "Approval can take 2-5 business days after document submission, with disbursement within 24 hours of approval."
    },
    {
      question: "Can I prepay my business loan?",
      answer: "Yes, prepayment options are available after 6 months with nominal charges (1-2% of outstanding amount)."
    }
  ];

  const testimonials = [
    {
      name: "Rajiv Malhotra",
      business: "Textile Manufacturing",
      content: "The equipment loan helped us double our production capacity. The process was smooth with minimal paperwork.",
      rating: 5
    },
    {
      name: "Neha Gupta",
      business: "Restaurant Chain",
      content: "Got working capital within 3 days to manage our seasonal inventory needs. Excellent service!",
      rating: 4
    },
    {
      name: "Arun Joshi",
      business: "IT Startup",
      content: "As a new startup, we struggled to get funding elsewhere. These guys believed in our business model.",
      rating: 5
    }
  ];

  const navigate = useNavigate()
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
              Fuel Your <span className="text-indigo-600">Business Growth</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get business loans up to ₹2 crores with flexible repayment options and competitive interest rates starting from 10.5% p.a.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate('/form')} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                Apply for Business Loan
              </button>
              <button onClick={() => navigate('/businesscal')} className="border-2 border-indigo-600 text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-indigo-50 transition duration-300 transform hover:scale-105">
                Calculate EMI
              </button>
            </div>
            <div className="mt-10 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <img
                    key={item}
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 30}.jpg`}
                    alt="Business owner"
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
                <p className="text-sm text-gray-600">Trusted by 5,000+ businesses</p>
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
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Business team meeting"
              className="w-full max-w-lg mx-auto rounded-xl shadow-2xl"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block"
            >
              <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-3">
                  <MdAttachMoney className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Up to ₹2 Cr</p>
                  <p className="text-sm text-gray-600">Loan Amount</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Business Loan Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Business Loan Calculator</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Plan your business finances with our EMI calculator</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 bg-indigo-50 p-8 rounded-2xl shadow-md">
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Loan Amount (₹)</label>
                <div className="flex items-center">
                  <input
                    type="range"
                    min="500000"
                    max="20000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-4 text-indigo-700 font-semibold min-w-[120px] text-right">
                    ₹{(loanAmount / 100000).toFixed(1)} L
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹5L</span>
                  <span>₹2Cr</span>
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
                    <FaChartLine className="text-indigo-600 text-xl" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 text-sm">Interest Rate</p>
                    <p className="font-medium">10.5% - 18% p.a.</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Total Interest</p>
                    <p className="font-medium">₹{(calculateEMI() * loanTerm - loanAmount).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Business Loan Features</h3>
              <ul className="space-y-4">
                {businessFeatures.map((feature, index) => (
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
                <h3 className="font-semibold text-xl mb-3">Business Loan Eligibility</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="mr-2" /> Business vintage: Minimum 2 years (1 year for startups)
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-2" /> Annual turnover: ₹10 lakhs+
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-2" /> Profitability: Positive net worth
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-2" /> Business bank statements for last 12 months
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Loan Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Types of Business Loans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer customized financing solutions for different business needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.desc}</p>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Business Loan Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get funded in just 4 simple steps</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-indigo-200 transform -translate-x-1/2"></div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              {[
                {
                  title: "Application",
                  desc: "Fill our online form with basic business details",
                  icon: "1",
                  position: "left"
                },
                {
                  title: "Document Submission",
                  desc: "Upload required business documents digitally",
                  icon: "2",
                  position: "right"
                },
                {
                  title: "Approval",
                  desc: "Get loan approval within 3-5 working days",
                  icon: "3",
                  position: "left"
                },
                {
                  title: "Disbursement",
                  desc: "Receive funds directly in your business account",
                  icon: "4",
                  position: "right"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex ${step.position === 'right' ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="flex-shrink-0 lg:mx-4">
                    <div className="w-14 h-14 bg-indigo-600 text-white font-bold text-xl rounded-full flex items-center justify-center mx-auto">
                      {step.icon}
                    </div>
                  </div>
                  <div className={`mt-2 lg:mt-0 ${step.position === 'right' ? 'lg:text-right' : ''}`}>
                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 mt-1">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Business Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See how we've helped businesses like yours grow</p>
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
                    src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 40}.jpg`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.business}</p>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Business Loan FAQs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get answers to common business financing questions</p>
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
          <h2 className="text-3xl font-bold mb-6">Grow Your Business Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Get the funding you need to take your business to the next level</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              onClick={() => navigate("/contact")} // Navigate to contact page
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg"
            >
              Apply Now
            </motion.button>
          <motion.button
  onClick={() => navigate("/form")} // Navigate to form page
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition"
>
  Contact Sales
</motion.button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessLoanPage;