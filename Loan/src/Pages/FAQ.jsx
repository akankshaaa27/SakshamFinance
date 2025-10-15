import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaChevronDown,
  FaChevronUp,
  FaHandHoldingUsd,
  FaCalculator,
  FaFileAlt,
  FaClock,
  FaRupeeSign,
  FaPercentage,
  FaUserShield
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of loans does Saksham Finance offer?",
      answer: "We offer personal loans, home loans, business loans, education loans, vehicle loans, agriculture loans, and loans against property with competitive interest rates.",
      icon: <FaHandHoldingUsd className="text-blue-600 text-xl" />
    },
    {
      question: "How can I calculate my EMI?",
      answer: "Use our online EMI calculators for each loan type. Just enter the loan amount, tenure, and interest rate to get instant EMI estimates.",
      icon: <FaCalculator className="text-green-600 text-xl" />
    },
    {
      question: "What documents are required for loan application?",
      answer: "Typically you'll need ID proof, address proof, income documents, and property papers (for secured loans). Exact requirements vary by loan type.",
      icon: <FaFileAlt className="text-purple-600 text-xl" />
    },
    {
      question: "How long does loan approval take?",
      answer: "Personal loans can be approved in as little as 24 hours. Home loans and other secured loans typically take 3-7 working days after document submission.",
      icon: <FaClock className="text-yellow-600 text-xl" />
    },
    {
      question: "What is the minimum and maximum loan amount?",
      answer: "We offer loans starting from ₹25,000 up to ₹5 crores depending on the loan type, your income, and credit profile.",
      icon: <FaRupeeSign className="text-red-600 text-xl" />
    },
    {
      question: "What interest rates do you offer?",
      answer: "Interest rates start from 7.75% p.a. for home loans and vary based on loan type, amount, tenure, and applicant's creditworthiness.",
      icon: <FaPercentage className="text-indigo-600 text-xl" />
    },
    {
      question: "Is my personal information secure?",
      answer: "Absolutely. We use bank-grade encryption and follow strict data protection protocols to keep your information safe and confidential.",
      icon: <FaUserShield className="text-teal-600 text-xl" />
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our loan products and application process.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 focus:outline-none"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {faq.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 text-left">
                    {faq.question}
                  </h3>
                </div>
                {activeIndex === index ? (
                  <FaChevronUp className="text-gray-500 transition-transform duration-200" />
                ) : (
                  <FaChevronDown className="text-gray-500 transition-transform duration-200" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Didn't find your answer? Contact our support team for assistance.
          </p>
          <button onClick={() => navigate('/contact')} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;